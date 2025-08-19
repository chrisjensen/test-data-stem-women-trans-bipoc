#!/usr/bin/env node

import { generateDiversityReport } from '../../test-data-api/scripts/diversity-analyzer.js';
import { stemAchievementsData } from '../dist/index.js';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Generate and save the report
try {
  const outputPath = join(__dirname, '..', 'DIVERSITY.md');
  
  generateDiversityReport(stemAchievementsData, outputPath, {
    datasetName: 'STEM Achievements Dataset',
    includeUnicodeAnalysis: true  // Enable Unicode analysis for STEM data
  });
  
} catch (error) {
  console.error('❌ Error generating diversity report:', error);
  process.exit(1);
}