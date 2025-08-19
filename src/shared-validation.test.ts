import { validateDataPackage } from 'test-data-factory';
import { stemAchievementsData } from './index.js';

validateDataPackage(stemAchievementsData, {
  datasetName: 'STEM Achievements Dataset',
  minBirthYear: 300,  // Historical figures like Hypatia
  maxBirthYear: 2010,
  requirePronouns: true,
  requireDateOfBirth: true,
  minBioLength: 100,
  containsFirstNationsPeople: false,
  validateImageUrls: false,  // Disabled due to timeout issues with some URLs
  validateReferenceUrls: false,  // Disabled due to timeout issues with some URLs
  httpTimeout: 30000
});