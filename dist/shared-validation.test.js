import { describe, it, expect } from 'vitest';
import { DataPackageValidator } from 'test-data-factory';
import { stemAchievementsData } from './index.js';
describe('STEM Achievements Data - Shared Validation', () => {
    it('should pass comprehensive data validation', async () => {
        const validator = new DataPackageValidator(stemAchievementsData, {
            datasetName: 'STEM Achievements Dataset',
            minBirthYear: 300, // Historical figures like Hypatia
            maxBirthYear: 2010,
            requirePronouns: true,
            requireDateOfBirth: true,
            minBioLength: 100,
            containsFirstNationsPeople: false,
            validateImageUrls: false, // Disable for now to avoid timeout
            validateReferenceUrls: false // Disable for now to avoid timeout
        });
        const result = await validator.validate();
        // Debug information
        console.log('\nDataset info:');
        console.log(`  Total people in raw data: ${stemAchievementsData.people.length}`);
        console.log(`  Total people validated: ${result.totalPeople}`);
        // Check specific failing entries
        const graceHopper = stemAchievementsData.people.find(p => p.id === 'grace-hopper');
        console.log(`  Grace Hopper bio: ${graceHopper?.bio ? 'exists' : 'missing'} (${graceHopper?.bio?.length} chars)`);
        if (!result.isValid) {
            console.error('\nValidation errors:');
            result.errors.forEach(error => console.error(`  ❌ ${error}`));
        }
        if (result.warnings.length > 0) {
            console.warn('\nValidation warnings:');
            result.warnings.forEach(warning => console.warn(`  ⚠️  ${warning}`));
        }
        expect(result.isValid, `Dataset validation failed. See console for details.`).toBe(true);
        expect(result.errors.length).toBe(0);
    });
});
