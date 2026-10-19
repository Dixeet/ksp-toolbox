import experiencesExtracted from '../data/ExperiencesExtractedWebsite.js';
import { toCsv } from '../Utils.js';

export async function generateExperiencesCsvFromWebsite() {
  const situations = [
    'Asteroid',
    'Comet',
    'flying high',
    'flying low',
    'surface',
    'space',
    'space high',
    'space low',
    'splashed',
  ];
  const experiences = [];
  experiencesExtracted.forEach((expExtract) => {
    const experience = {};
    for (let attr in expExtract) {
      experience[attr] =
        expExtract[attr].split('\n\n').length === 1
          ? expExtract[attr]
          : expExtract[attr].split('\n\n').join(', ');
    }
    situations.forEach((situation) => {
      experience[situation] = '';
    });
    experience.Situations.split(', ').forEach((situation) => {
      situation = situation.replace('landed', 'surface');
      const subSituations = situation.split(' (');
      if (subSituations[0] !== 'n/a') {
        if (subSituations.length === 1) {
          experience[subSituations[0]] = 'global';
        } else {
          experience[subSituations[0]] += experience[subSituations[0]]?.length
            ? `, ${subSituations[1].replace(')', '')}`
            : subSituations[1].replace(')', '');
        }
      }
    });
    experiences.push(experience);
  });
  const headers = [
    { name: 'name' },
    { name: 'Data size' },
    { name: 'Data rate' },
    { name: 'Sample size' },
    { name: 'Sample mass' },
    { name: 'Duration' },
    { name: 'Situations' },
    { name: 'Electricity' },
    { name: 'Operation' },
    { name: 'Part needed' },
    { name: 'Information' },
    { name: 'Asteroid' },
    { name: 'Comet' },
    { name: 'flying high' },
    { name: 'flying low' },
    { name: 'surface' },
    { name: 'space' },
    { name: 'space high' },
    { name: 'space low' },
    { name: 'splashed' },
  ];
  return toCsv(experiences, headers);
}

