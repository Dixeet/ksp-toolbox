import { default as siUnit } from '@/utils/SIUnitFormat.js';
const DEFAULT_NumberFormat_OPTIONS = {
  maximumSignificantDigits: 3,
  style: 'decimal',
};
const DEFAULT_FORMATTER_OPTIONS = {
  withSpace: false,
  formatterOptions: DEFAULT_NumberFormat_OPTIONS,
};

export function standardFormatter(value, unit = '', options = { ...DEFAULT_FORMATTER_OPTIONS }) {
  options = { ...DEFAULT_FORMATTER_OPTIONS, ...options };
  return (
    new Intl.NumberFormat(undefined, {
      notation: 'standard',
      ...options.formatterOptions,
    }).format(value) +
    (options.withSpace ? ' ' : '') +
    unit
  );
}

export function engineeringFormatter(value, unit = '', options = { ...DEFAULT_FORMATTER_OPTIONS }) {
  options = { ...DEFAULT_FORMATTER_OPTIONS, ...options };
  return (
    new Intl.NumberFormat(undefined, {
      notation: 'engineering',
      ...options.formatterOptions,
    }).format(value) +
    (options.withSpace ? ' ' : '') +
    unit
  );
}

export function siUnitFormatter(value, unit = '', options = { ...DEFAULT_FORMATTER_OPTIONS }) {
  options = { ...DEFAULT_FORMATTER_OPTIONS, ...options };
  return siUnit(value, unit, options);
}

export function autoFormat(value, unit = '', options = { ...DEFAULT_FORMATTER_OPTIONS }) {
  options = { ...DEFAULT_FORMATTER_OPTIONS, ...options };
  if (value >= 1e15) {
    return engineeringFormatter(value, unit, options);
  } else if (value >= 1e3) {
    return siUnitFormatter(value, unit, options);
  } else if (value < 1e-3) {
    return engineeringFormatter(value, unit, options);
  } else {
    return standardFormatter(value, unit, options);
  }
}
