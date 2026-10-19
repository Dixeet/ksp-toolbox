import { readdir, readFile } from 'fs/promises';
import { extname, join } from 'path';

/**
 * Recursively finds all file paths nested within a directory that have a ".cfg" extension.
 * @param {string} dirPath - The root directory path to search.
 * @returns {Promise<string[]>} Array of absolute or relative paths to .cfg files.
 */
export async function findCfgFiles(dirPath) {
  try {
    const entries = await readdir(dirPath, { withFileTypes: true });
    const files = await Promise.all(
      entries.map(async (entry) => {
        const fullPath = join(dirPath, entry.name);
        if (entry.isDirectory()) {
          return findCfgFiles(fullPath);
        } else if (entry.isFile() && extname(entry.name).toLowerCase() === '.cfg') {
          return fullPath;
        }
        return [];
      }),
    );
    return files.flat();
  } catch (error) {
    console.error(`Error reading directory at "${dirPath}":`, error.message);
    throw error;
  }
}

/**
 * Reads the content of a file at the given path.
 * @param {string} filePath - Path to the file.
 * @param {string} [encoding='utf8'] - File encoding.
 * @returns {Promise<string>} Content of the file.
 */
export async function readFileContent(filePath, encoding = 'utf8') {
  try {
    const data = await readFile(filePath, { encoding });
    return data;
  } catch (error) {
    console.error(`Error reading file at "${filePath}":`, error.message);
    throw error;
  }
}

export function toCsv(data, headers, separator = ';', addHeaders = true) {
  let csvStr = '';
  if (addHeaders) {
    headers.forEach((header) => (csvStr += `${header.name}${separator}`));
    csvStr += '\n';
  }
  data.forEach((row) => {
    headers.forEach((header) => {
      if (header.callback && header.callback instanceof Function) {
        csvStr += `${header.callback(row)}${separator}`;
      } else if (typeof row[header.name] !== 'undefined') {
        csvStr += `${row[header.name]}${separator}`;
      }
    });
    csvStr += '\n';
  });
  return csvStr;
}

export function csvToJs(csv, headers) {
  const entries = csv.split('\n');
  const [head] = entries.splice(0, 1);
  if (!headers) {
    headers =  head.split(',');
  }
  return entries.map((entry) => {
    const row = {};
    entry.split(',').forEach((value, i) => {
      row[headers[i]] = value;
    });
    return row;
  })
}