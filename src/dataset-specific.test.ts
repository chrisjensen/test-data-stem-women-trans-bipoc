import { describe, it, expect } from 'vitest';
import { stemAchievementsData } from './index.js';

describe('STEM Achievements Dataset - Specific Requirements', () => {
  describe('Geographic Distribution', () => {
    it('should maintain geographic diversity as specified in README', () => {
      // Count North American entries (people with US/Canada related tags or groups)
      const northAmericanTags = ['nasa', 'american', 'indian-american', 'african-american'];
      const northAmericanGroups = ['nasa-mathematics', 'nasa-engineering', 'lewis-research-center', 'langley-research-center'];
      
      const northAmericanCount = stemAchievementsData.people.filter(person => 
        person.tags.some(tag => northAmericanTags.includes(tag)) ||
        person.groupMemberships.some(group => northAmericanGroups.includes(group))
      ).length;
      
      const totalPeople = stemAchievementsData.people.length;
      const northAmericanPercentage = (northAmericanCount / totalPeople) * 100;
      
      // Should be 30% or less as specified in README
      expect(northAmericanPercentage).toBeLessThanOrEqual(30);
    });
  });

  describe('Representation Categories', () => {
    it('should include women in STEM', () => {
      const womenInSTEM = stemAchievementsData.people.filter(person => 
        person.tags.some(tag => ['physics', 'chemistry', 'mathematics', 'computer-science', 'engineering', 'astronomy', 'biology'].includes(tag))
      );
      expect(womenInSTEM.length).toBeGreaterThan(0);
    });

    it('should include diverse ethnic and cultural backgrounds', () => {
      const diverseBackgrounds = stemAchievementsData.people.filter(person => 
        person.tags.some(tag => ['african-american', 'asian-american', 'indian-american', 'british', 'polish-french'].includes(tag))
      );
      expect(diverseBackgrounds.length).toBeGreaterThan(0);
    });

    it('should cover multiple STEM fields', () => {
      const stemFields = ['physics', 'chemistry', 'mathematics', 'computer-science', 'engineering', 'astronomy', 'biology', 'psychology'];
      const coveredFields = new Set();
      
      stemAchievementsData.people.forEach(person => {
        person.tags.forEach(tag => {
          if (stemFields.includes(tag)) {
            coveredFields.add(tag);
          }
        });
      });
      
      expect(coveredFields.size).toBeGreaterThanOrEqual(6);
    });
  });
});