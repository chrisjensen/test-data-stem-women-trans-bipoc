import { describe, it, expect } from 'vitest';
import { stemAchievementsData } from './index.js';

describe('STEM Achievements Data', () => {
  describe('Export Structure', () => {
    it('should export valid DataPackage structure', () => {
      expect(stemAchievementsData).toBeDefined();
      expect(stemAchievementsData).toHaveProperty('people');
      expect(stemAchievementsData).toHaveProperty('groups');
      expect(stemAchievementsData).toHaveProperty('events');
    });

    it('should contain actual data', () => {
      expect(stemAchievementsData.people.length).toBeGreaterThan(0);
      expect(stemAchievementsData.groups.length).toBeGreaterThan(0);
      expect(stemAchievementsData.events.length).toBeGreaterThan(0);
    });
  });
});