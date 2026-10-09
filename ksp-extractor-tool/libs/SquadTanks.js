import parseKSPConfig from './KSPLib.js'
import { findCfgFiles, readFileContent, toCsv } from '../Utils.js'


let localization = {};

async function loadLocalization(localizationPath) {
  const translationKSP = await readFileContent(localizationPath);
  localization = parseKSPConfig(translationKSP);
}

function translate(key) {
  return localization.Localization['en-us'][key];
}

function parseRawParts(rawParts) {
  return rawParts.map((partRaw) => {
    const part = {
      partIdName: partRaw.name,
      name: translate(partRaw.title),
      cost: partRaw.cost,
      mass: partRaw.mass,
      category: partRaw.category,
      bulkhead: partRaw.bulkheadProfiles.split(',').map((bulkhead) => bulkhead.trim()),
      resources: []
    };

    if (Array.isArray(partRaw.RESOURCE)) {
      part.resources = [...partRaw.RESOURCE];
    } else if (partRaw.RESOURCE) {
      part.resources.push(partRaw.RESOURCE);
    }
    return part;
  });
}

async function getParts(dirPath) {
  const partsKSP = await findCfgFiles(dirPath);

  const rawParts = (await Promise.all(partsKSP.map(async (filePath) => {
    return readFileContent(filePath);
  }))).map((partCfg) => parseKSPConfig(partCfg).PART);

  return parseRawParts(rawParts);
}

function tanksToCsv(tanks) {
  const headers = [
    { name: 'partIdName' },
    { name: 'name' },
    { name: 'cost' },
    { name: 'mass' },
    { name: 'category' },
    { name: 'bulkhead' },
    {
      name: 'LiquidFuel',
      callback: (row) => {
        return row.resources.find((resource) => resource.name === 'LiquidFuel')?.maxAmount || 0;
      },
    },
    {
      name: 'Oxidizer',
      callback: (row) => {
        return row.resources.find((resource) => resource.name === 'Oxidizer')?.maxAmount || 0;
      },
    },
    {
      name: 'MonoPropellant',
      callback: (row) => {
        return row.resources.find((resource) => resource.name === 'MonoPropellant')?.maxAmount || 0;
      },
    },
    {
      name: 'XenonGas',
      callback: (row) => {
        return row.resources.find((resource) => resource.name === 'XenonGas')?.maxAmount || 0;
      },
    },
  ];
  return toCsv(tanks, headers);
}

async function generateTanksCsv(localizationPath, squadTanksFolderPath) {
  await loadLocalization(localizationPath);

  const bulkheads = [];
  const resources = [];
  const tanks = (await getParts(squadTanksFolderPath)).filter((part) => {
    if (part.resources && part.resources.length > 0) {
      part.bulkhead.forEach((bulk) => {
        const found = bulkheads.find((bulkhead) => bulkhead === bulk);
        if (!found) {
          bulkheads.push(bulk);
        }
      });
      part.resources.forEach((resource) => {
        const found = resources.find((r) => r === resource.name);
        if (!found) {
          resources.push(resource.name);
        }
      });
      return part;
    }
  });

  return tanksToCsv(tanks);
}

export default generateTanksCsv;