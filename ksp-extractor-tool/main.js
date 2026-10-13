import { loadEnvFile } from 'node:process';
import { toCsv } from './Utils.js';
import generateTanksCsv from './libs/SquadTanks.js'
import { generateExperiencesCsvFromWebsite } from './libs/KerbalismScienceExperiments.js';

loadEnvFile('../.env');

// const experimentsCsv = await generateExperiencesCsvFromWebsite();
// const tanksCsv = await generateTanksCsv(process.env.SQUAD_PARTS_LOCALIZATION_PATHSQUAD_PARTS_LOCALIZATION_PATH, process.env.SQUAD_PARTS_TANKS_FOLDER_PATH);
