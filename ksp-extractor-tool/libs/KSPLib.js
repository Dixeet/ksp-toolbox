function parseKSPConfig(cfgString) {
  const root = {};
  const stack = [root];
  const lines = cfgString.split(/\r?\n/);

  for (let line of lines) {
    line = line.replace(/\/\/.*$/, '').trim();
    if (!line) {
      continue;
    }

    let hasOpeningBracket = false;
    if (line.endsWith('{')) {
      hasOpeningBracket = true;
      line = line.slice(0, -1).trim(); // Remove '{' from the string
    }

    if (line === '{') {
      continue;
    }

    if (line === '}') {
      if (stack.length > 1) {
        stack.pop();
      }
      continue;
    }

    if (line.includes('=')) {
      const eqIndex = line.indexOf('=');
      const key = line.substring(0, eqIndex).trim();
      const value = line.substring(eqIndex + 1).trim();

      const currentScope = stack[stack.length - 1];
      insertProperty(currentScope, key, value);
    } else if (line.length > 0) {
      const currentScope = stack[stack.length - 1];
      const newNode = {};

      insertProperty(currentScope, line, newNode);
      stack.push(newNode);
    }

  }
  return root;
}

function insertProperty(obj, key, val) {
  if (obj[key] !== undefined) {
    if (Array.isArray(obj[key])) {
      obj[key].push(val);
    } else {
      obj[key] = [obj[key], val];
    }
  } else {
    obj[key] = val;
  }
}

export default parseKSPConfig;
