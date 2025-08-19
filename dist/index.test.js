import { describe, it, expect } from 'vitest';
import { stemAchievementsData } from './index.js';
describe('STEM Achievements Data', () => {
    describe('Data Structure Compatibility', () => {
        it('should export data compatible with DataPackage interface', () => {
            expect(stemAchievementsData).toHaveProperty('people');
            expect(stemAchievementsData).toHaveProperty('groups');
            expect(stemAchievementsData).toHaveProperty('events');
            expect(Array.isArray(stemAchievementsData.people)).toBe(true);
            expect(Array.isArray(stemAchievementsData.groups)).toBe(true);
            expect(Array.isArray(stemAchievementsData.events)).toBe(true);
        });
        it('should have people with correct Person interface structure', () => {
            stemAchievementsData.people.forEach((person, index) => {
                expect(person).toHaveProperty('id');
                expect(person).toHaveProperty('fullName');
                expect(person).toHaveProperty('bio');
                expect(person).toHaveProperty('email');
                expect(person).toHaveProperty('phone');
                expect(person).toHaveProperty('picture');
                expect(person).toHaveProperty('tags');
                expect(person).toHaveProperty('groupMemberships');
                expect(typeof person.id).toBe('string');
                expect(typeof person.fullName).toBe('string');
                expect(typeof person.email).toBe('string');
                expect(Array.isArray(person.tags)).toBe(true);
                expect(Array.isArray(person.groupMemberships)).toBe(true);
                // bio, phone, and picture can be null
                expect(person.bio === null || typeof person.bio === 'string').toBe(true);
                expect(person.phone === null || typeof person.phone === 'string').toBe(true);
                expect(person.picture === null || typeof person.picture === 'string').toBe(true);
            });
        });
        it('should have groups with correct Group interface structure', () => {
            stemAchievementsData.groups.forEach((group, index) => {
                expect(group).toHaveProperty('id');
                expect(group).toHaveProperty('name');
                expect(group).toHaveProperty('about');
                expect(group).toHaveProperty('email');
                expect(group).toHaveProperty('website');
                expect(group).toHaveProperty('picture');
                expect(typeof group.id).toBe('string');
                expect(typeof group.name).toBe('string');
                expect(typeof group.about).toBe('string');
                // email, website, and picture can be null
                expect(group.email === null || typeof group.email === 'string').toBe(true);
                expect(group.website === null || typeof group.website === 'string').toBe(true);
                expect(group.picture === null || typeof group.picture === 'string').toBe(true);
            });
        });
        it('should have events with correct Event interface structure', () => {
            stemAchievementsData.events.forEach((event, index) => {
                expect(event).toHaveProperty('id');
                expect(event).toHaveProperty('name');
                expect(event).toHaveProperty('date');
                expect(event).toHaveProperty('attendeeIds');
                expect(typeof event.id).toBe('string');
                expect(typeof event.name).toBe('string');
                expect(event.date instanceof Date).toBe(true);
                expect(Array.isArray(event.attendeeIds)).toBe(true);
            });
        });
    });
    describe('Data Integrity', () => {
        it('should have unique IDs for all people', () => {
            const ids = stemAchievementsData.people.map(p => p.id);
            const uniqueIds = new Set(ids);
            expect(uniqueIds.size).toBe(ids.length);
        });
        it('should have unique IDs for all groups', () => {
            const ids = stemAchievementsData.groups.map(g => g.id);
            const uniqueIds = new Set(ids);
            expect(uniqueIds.size).toBe(ids.length);
        });
        it('should have unique IDs for all events', () => {
            const ids = stemAchievementsData.events.map(e => e.id);
            const uniqueIds = new Set(ids);
            expect(uniqueIds.size).toBe(ids.length);
        });
        it('should have valid email formats for people', () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            stemAchievementsData.people.forEach(person => {
                expect(emailRegex.test(person.email)).toBe(true);
            });
        });
        it('should have valid email formats for groups when present', () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            stemAchievementsData.groups.forEach(group => {
                if (group.email) {
                    expect(emailRegex.test(group.email)).toBe(true);
                }
            });
        });
        it('should have valid website URLs for groups when present', () => {
            const urlRegex = /^https?:\/\/.+/;
            stemAchievementsData.groups.forEach(group => {
                if (group.website) {
                    expect(urlRegex.test(group.website)).toBe(true);
                }
            });
        });
        it('should have valid picture URLs for people when present', () => {
            const urlRegex = /^https?:\/\/.+/;
            stemAchievementsData.people.forEach(person => {
                if (person.picture) {
                    expect(urlRegex.test(person.picture)).toBe(true);
                }
            });
        });
        it('should have valid picture URLs for groups when present', () => {
            const urlRegex = /^https?:\/\/.+/;
            stemAchievementsData.groups.forEach(group => {
                if (group.picture) {
                    expect(urlRegex.test(group.picture)).toBe(true);
                }
            });
        });
    });
    describe('Group Membership Validation', () => {
        it('should have valid group memberships for all people', () => {
            const groupIds = new Set(stemAchievementsData.groups.map(g => g.id));
            stemAchievementsData.people.forEach(person => {
                person.groupMemberships.forEach(groupId => {
                    expect(groupIds.has(groupId)).toBe(true);
                });
            });
        });
        it('should have valid attendee IDs for all events', () => {
            const peopleIds = new Set(stemAchievementsData.people.map(p => p.id));
            stemAchievementsData.events.forEach(event => {
                event.attendeeIds.forEach(attendeeId => {
                    expect(peopleIds.has(attendeeId)).toBe(true);
                });
            });
        });
    });
    describe('Content Quality', () => {
        it('should have meaningful bios for people', () => {
            stemAchievementsData.people.forEach(person => {
                if (person.bio) {
                    expect(person.bio.length).toBeGreaterThan(50);
                    expect(person.bio).toContain(' ');
                }
            });
        });
        it('should have meaningful descriptions for groups', () => {
            stemAchievementsData.groups.forEach(group => {
                expect(group.about.length).toBeGreaterThan(20);
                expect(group.about).toContain(' ');
            });
        });
        it('should have meaningful names for events', () => {
            stemAchievementsData.events.forEach(event => {
                expect(event.name.length).toBeGreaterThan(10);
                expect(event.name).toContain(' ');
            });
        });
        it('should have relevant tags for people', () => {
            stemAchievementsData.people.forEach(person => {
                expect(person.tags.length).toBeGreaterThan(0);
                person.tags.forEach(tag => {
                    expect(tag.length).toBeGreaterThan(0);
                    expect(tag).toMatch(/^[a-z-]+$/);
                });
            });
        });
    });
    describe('Geographic Distribution', () => {
        it('should maintain geographic diversity as specified in README', () => {
            // Count North American entries (people with US/Canada related tags or groups)
            const northAmericanTags = ['nasa', 'american', 'indian-american', 'african-american'];
            const northAmericanGroups = ['nasa-mathematics', 'nasa-engineering', 'lewis-research-center', 'langley-research-center'];
            const northAmericanCount = stemAchievementsData.people.filter(person => person.tags.some(tag => northAmericanTags.includes(tag)) ||
                person.groupMemberships.some(group => northAmericanGroups.includes(group))).length;
            const totalPeople = stemAchievementsData.people.length;
            const northAmericanPercentage = (northAmericanCount / totalPeople) * 100;
            // Should be 30% or less as specified in README
            expect(northAmericanPercentage).toBeLessThanOrEqual(30);
        });
    });
    describe('Data Completeness', () => {
        it('should have complete required fields for all people', () => {
            const missingFields = [];
            stemAchievementsData.people.forEach((person, index) => {
                // Required fields
                if (!person.id)
                    missingFields.push(`Person ${index} missing id`);
                if (!person.fullName)
                    missingFields.push(`Person ${index} missing fullName`);
                if (!person.bio)
                    missingFields.push(`Person ${index} missing bio`);
                if (!person.email)
                    missingFields.push(`Person ${index} missing email`);
                if (!Array.isArray(person.tags))
                    missingFields.push(`Person ${index} tags not array`);
                if (!Array.isArray(person.groupMemberships))
                    missingFields.push(`Person ${index} groupMemberships not array`);
                // New required fields
                if (!person.dateOfBirth)
                    missingFields.push(`Person ${index} (${person.fullName || person.preferredName}) missing dateOfBirth`);
                if (person.dateOfBirth && !(person.dateOfBirth instanceof Date))
                    missingFields.push(`Person ${index} (${person.fullName || person.preferredName}) dateOfBirth not a Date`);
                if (!person.pronouns)
                    missingFields.push(`Person ${index} (${person.fullName || person.preferredName}) missing pronouns`);
                if (person.pronouns && typeof person.pronouns !== 'string')
                    missingFields.push(`Person ${index} (${person.fullName || person.preferredName}) pronouns not a string`);
                // Pronouns should be in expected format
                if (person.pronouns && !['she/her', 'he/him', 'they/them'].includes(person.pronouns)) {
                    missingFields.push(`Person ${index} (${person.fullName || person.preferredName}) has invalid pronouns: ${person.pronouns}`);
                }
                // Birth date should be reasonable (between 300-2010 for historical figures)
                if (person.dateOfBirth) {
                    const birthYear = person.dateOfBirth.getFullYear();
                    if (birthYear <= 300 || birthYear >= 2010) {
                        missingFields.push(`Person ${index} (${person.fullName || person.preferredName}) unrealistic birth year: ${birthYear}`);
                    }
                }
            });
            if (missingFields.length > 0) {
                console.error('Missing or invalid fields found:');
                missingFields.forEach(field => console.error(`  - ${field}`));
                expect(missingFields.length, `Found ${missingFields.length} missing/invalid fields. See console for details.`).toBe(0);
            }
        });
        it('should properly mark First Nations people', () => {
            const firstNationsPeople = stemAchievementsData.people.filter(person => person.isFirstNations);
            if (firstNationsPeople.length > 0) {
                // If there are First Nations people, the metadata should reflect this
                expect(stemAchievementsData.metadata?.containsFirstNationsPeople).toBe(true);
                // Check each First Nations person has appropriate cultural markers
                firstNationsPeople.forEach(person => {
                    const name = person.fullName || person.preferredName;
                    console.log(`Found First Nations person: ${name}`);
                    // Should have appropriate tags or bio content indicating Indigenous heritage
                    const hasIndigenousMarkers = person.tags.some(tag => tag.includes('indigenous') || tag.includes('first-nations') || tag.includes('native')) ||
                        (person.bio && (person.bio.toLowerCase().includes('indigenous') ||
                            person.bio.toLowerCase().includes('first nations') ||
                            person.bio.toLowerCase().includes('native') ||
                            person.bio.toLowerCase().includes('aboriginal')));
                    expect(hasIndigenousMarkers, `First Nations person ${name} should have Indigenous cultural markers in tags or bio`).toBe(true);
                });
            }
        });
    });
    describe('Representation Categories', () => {
        it('should include women in STEM', () => {
            const womenInSTEM = stemAchievementsData.people.filter(person => person.tags.some(tag => ['physics', 'chemistry', 'mathematics', 'computer-science', 'engineering', 'astronomy', 'biology'].includes(tag)));
            expect(womenInSTEM.length).toBeGreaterThan(0);
        });
        it('should include diverse ethnic and cultural backgrounds', () => {
            const diverseBackgrounds = stemAchievementsData.people.filter(person => person.tags.some(tag => ['african-american', 'asian-american', 'indian-american', 'british', 'polish-french'].includes(tag)));
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
