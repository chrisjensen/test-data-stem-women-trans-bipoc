import { validateImageUrls } from '../../test-data-api/src/shared-tests.js';
import { stemAchievementsData } from './index.js';

validateImageUrls(stemAchievementsData, {
  datasetName: 'STEM Achievements Dataset',
  httpTimeout: 15000
});