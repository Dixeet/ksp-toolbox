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
  if (Math.abs(value) >= 1e15) {
    return engineeringFormatter(value, unit, options);
  } else if (Math.abs(value) >= 1e3) {
    return siUnitFormatter(value, unit, options);
  } else if (Math.abs(value) < 1e-3 && value !== 0) {
    return engineeringFormatter(value, unit, options);
  } else {
    return standardFormatter(value, unit, options);
  }
}

export function kspDateFormat(value, withYear = false) {
  const year = withYear ? Math.floor(value / (6 * 3600 * 426)) : 0;
  const days = Math.floor((value - year * 6 * 3600 * 426)/(6*3600));
  const hours = Math.floor((value - year * 6 * 3600 * 426 - days * 6 * 3600)/3600);
  const minutes = Math.floor((value - year * 6 * 3600 * 426 - days * 6 * 3600 - hours * 3600)/60);
  const seconds = Math.round(value - year * 6 * 3600 * 426 - days * 6 * 3600 - hours * 3600 - minutes * 60);
  return `${year ? year+'y ': ''}${days}d ${hours}h ${minutes}m ${seconds}s`;
}
