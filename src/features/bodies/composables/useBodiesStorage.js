import { useStorage } from '@vueuse/core';
import dataBodies from '@/data/bodies.json';
import { engineeringFormatter, kspDateFormat, standardFormatter } from '@/utils/Formatter.js';

function processBodies(bodies) {
  return bodies.map((body) => {
    const planet = {};
    for (const key in body) {
      const number = parseFloat(body[key]);
      planet[key] = isNaN(number) ? body[key] : number;
    }
    return planet;
  });
}

export const useBodiesStorage = () => {
  let bodies = useStorage('bodies', processBodies(dataBodies), localStorage, {
    deep: false,
    mergeDefaults: true,
  });
  bodies.reset = function () {
    this.value = processBodies(dataBodies);
  };
  bodies.set = function (newBodies) {
    this.value = processBodies(newBodies);
  };

  return bodies;
};

export const bodyKeys = {
  name: { label: 'Name', unit: '' },
  parent: {
    label: 'Parent',
    unit: '',
  },
  sma: {
    label: 'Semi-major Axis',
    unit: 'm',
    description: 'The semi-major axis ($a$) is half of the longest diameter (the major axis) of an elliptical orbit, representing the average distance from the center of the orbit to either of its farthest points',
  },
  inclination: {
    label: 'Inclination',
    unit: '°',
    description: 'Orbital inclination ($i$) relative to the reference plane in degrees.',
  },
  eccentricity: {
    label: 'Eccentricity',
    unit: '',
    description: `Orbital eccentricity $e$, where $ 0$ is circular and $ 0 < e < 1$ is elliptical.`,
  },
  radius: {
    label: 'Radius',
    unit: 'm',
    description: 'Mean equatorial radius ($R$) of the body in meters.',
  },
  orbitalPeriod: {
    label: 'Orbital Period',
    unit: 's',
    description: 'Orbital period ($T$) in seconds.',
    formatter: (value) => kspDateFormat(value, true),
  },
  mu: {
    label: 'μ',
    labelLong: 'Gravitational Parameter',
    unit: 'm³/s²',
    description:
      'Standard gravitational parameter $\\mu = G \\cdot M$, expressed in $\\text{m}^3/\\text{s}^2$.',
    formatter: (value) => engineeringFormatter(value, 'm³/s²', { withSpace: true }),
  },
  mass: {
    label: 'Mass',
    unit: 'kg',
    description: 'Total mass ($M$) of the celestial body in kilograms.',
  },
  gravity: {
    label: 'Gravity',
    unit: 'm/s²',
    description: 'Surface gravitational acceleration ($g_0$) in $\\text{m}/\\text{s}^2$.',
  },
  g: {
    label: 'g',
    unit: 'g',
    description:
      'Surface gravity in Earth standard gravities ($ 1\\text{ g} = 9.80665\\text{ m}/\\text{s}^2 $ ).',
  },
  soi: {
    label: 'SOI',
    labelLong: 'Sphere of Influence',
    unit: 'm',
    description:
      'Sphere of Influence radius: $r_{\\text{SOI}} \\approx a \\cdot \\left(\\frac{m}{M}\\right)^{2/5}$.',
  },
  atmosphere: {
    label: 'Atmosphere',
    unit: 'kPa',
    description: 'Surface atmospheric pressure in kilopascals (kPa).',
  },
  flyingHigh: {
    label: 'Flying High',
    unit: 'm',
    description: 'Altitude threshold for high atmosphere flight boundary.',
  },
  spaceLow: {
    label: 'Space Low',
    unit: 'm',
    description: 'Altitude threshold for low space boundary.',
  },
  spaceHigh: {
    label: 'Space High',
    unit: 'm',
    description: 'Altitude threshold for high space science boundary.',
  },
  pack: { label: 'Pack', unit: '', description: 'Celestial body pack or mod origin (e.g. Stock).' },
};
