import experiencesExtractedFromWebsite from '../data/ExperiencesExtractedWebsite.js';
import { readFileContent, toCsv } from '../Utils.js';
import parseKSPConfig from './KSPLib.js'

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
  experiencesExtractedFromWebsite.forEach((expExtract) => {
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

export async function getScienceDoneFromSave(savePath) {
  const data = await readFileContent(savePath);
  const save = parseKSPConfig(data);
  const rAndD = save.GAME.SCENARIO.find((scenario) => scenario.name === 'ResearchAndDevelopment');
  console.log(rAndD);
}

export async function extractKerbalismScienceExperiments(kerbalismPath) {
  const scienceDefStockPath = `${kerbalismPath}\\System\\ScienceRework\\ScienceDefs-Stock.cfg`;
  const scienceDefKerbalismPath = `${kerbalismPath}\\System\\ScienceRework\\ScienceDefs-Kerbalism.cfg`;
  const scienceDefStockFile = await readFileContent(scienceDefStockPath);
  const scienceDefKerbalismFile = await readFileContent(scienceDefKerbalismPath);
  const scienceDefStock = parseKSPConfig(scienceDefStockFile);
  const scienceDefKerbalism = parseKSPConfig(scienceDefKerbalismFile);
  console.log(rAndD);
}

