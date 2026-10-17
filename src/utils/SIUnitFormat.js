/**
 * Fork from :
 * @license Unit Formatter v1.2.0
 * https://github.com/rawify/UnitFormat.js
 *
 * Copyright (c) 2026, Robert Eisele (https://raw.org/)
 * Licensed under the MIT license.
 */

const PREFIX_EXPONENTS = {
  2: {
    E: 60,
    P: 50,
    T: 40,
    G: 30,
    M: 20,
    k: 10,
  },
  10: {
    E: 18,
    P: 15,
    T: 12,
    G: 9,
    M: 6,
    k: 3,
    h: 2,
    d: -1,
    c: -2,
    m: -3,
    u: -6,
    μ: -6,
    n: -9,
    p: -12,
    f: -15,
    a: -18,
  },
};
const DEFAULT_FORMATTER_OPTIONS = {
  maximumFractionDigits: 3,
  useGrouping: false,
  maximumSignificantDigits: 3,
};

function isUnitBase(base) {
  return base === 2 || base === 10;
}
function formatNumber(value, formatterOptions = DEFAULT_FORMATTER_OPTIONS) {
  let _a;
  const formatter = new Intl.NumberFormat(void 0, formatterOptions);
  return (_a = formatter == null ? void 0 : formatter.format(value)) != null
    ? _a
    : String(
        Math.round(value * (10 ^ formatterOptions.maximumSignificantDigits)) /
          (10 ^ formatterOptions.maximumSignificantDigits),
      );
}

function SIUnitFormat(
  value,
  baseUnit = '',
  options = {
    prefixes: 'kMGTPE',
    base: 10,
    withSpace: false,
    formatterOptions: DEFAULT_FORMATTER_OPTIONS,
  },
) {
  const { prefixes, withSpace, base, formatterOptions } = {
    prefixes: 'kMGTPE',
    base: 10,
    withSpace: false,
    formatterOptions: DEFAULT_FORMATTER_OPTIONS,
    ...options,
  };
  const resolvedUnit = baseUnit != null ? baseUnit : '';
  const resolvedPrefixes = prefixes != null ? prefixes : 'kMGTPE';
  const resolvedBase = base != null ? base : 10;
  const space = withSpace ? ' ' : '';
  if (!isUnitBase(resolvedBase)) {
    throw new Error(`Not supported base ${resolvedBase}`);
  }
  if (value === 0) {
    return `${formatNumber(0, formatterOptions)}${resolvedUnit}`;
  }
  const magnitude = Math.abs(value);
  const exponents = PREFIX_EXPONENTS[resolvedBase];
  let bestPrefix = '';
  let bestScore = magnitude;
  for (const prefix of resolvedPrefixes) {
    const exponent = exponents[prefix];
    if (exponent === void 0) {
      throw new Error(`Unknown unit ${prefix}`);
    }
    const score = magnitude / Math.pow(resolvedBase, exponent);
    if (score >= 1 && (score < bestScore || bestScore < 1)) {
      bestScore = score;
      bestPrefix = prefix;
    }
  }
  const scaledValue = value < 0 ? -bestScore : bestScore;
  return `${formatNumber(scaledValue, formatterOptions)}${space}${bestPrefix}${resolvedUnit}`;
}
export default SIUnitFormat;
