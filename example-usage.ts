import { stemAchievementsData } from './src/index.js';

// Example usage of the STEM Achievements Dataset
// This demonstrates how the data can be used with the test-data-api

console.log('=== STEM Achievements Dataset ===');
console.log(`Total People: ${stemAchievementsData.people.length}`);
console.log(`Total Groups: ${stemAchievementsData.groups.length}`);
console.log(`Total Events: ${stemAchievementsData.events.length}`);

console.log('\n=== Sample People ===');
const samplePeople = stemAchievementsData.people.slice(0, 3);
samplePeople.forEach(person => {
  console.log(`\n${person.fullName}`);
  console.log(`  Field: ${person.tags.find(tag => ['physics', 'chemistry', 'mathematics', 'computer-science', 'engineering', 'astronomy', 'biology'].includes(tag))}`);
  console.log(`  Bio: ${person.bio?.substring(0, 100)}...`);
});

console.log('\n=== Sample Groups ===');
const sampleGroups = stemAchievementsData.groups.slice(0, 3);
sampleGroups.forEach(group => {
  console.log(`\n${group.name}`);
  console.log(`  About: ${group.about}`);
  console.log(`  Email: ${group.email || 'Not provided'}`);
});

console.log('\n=== Sample Events ===');
const sampleEvents = stemAchievementsData.events.slice(0, 3);
sampleEvents.forEach(event => {
  console.log(`\n${event.name}`);
  console.log(`  Date: ${event.date.toDateString()}`);
  console.log(`  Attendees: ${event.attendeeIds.length}`);
});

console.log('\n=== Geographic Distribution ===');
const northAmericanCount = stemAchievementsData.people.filter(person => 
  person.tags.some(tag => ['nasa', 'american', 'indian-american', 'african-american'].includes(tag)) ||
  person.groupMemberships.some(group => ['nasa-mathematics', 'nasa-engineering', 'lewis-research-center', 'langley-research-center'].includes(group))
).length;

const totalPeople = stemAchievementsData.people.length;
const northAmericanPercentage = (northAmericanCount / totalPeople) * 100;

console.log(`North American entries: ${northAmericanCount}/${totalPeople} (${northAmericanPercentage.toFixed(1)}%)`);
console.log(`International entries: ${totalPeople - northAmericanCount}/${totalPeople} (${(100 - northAmericanPercentage).toFixed(1)}%)`);

console.log('\n=== STEM Field Coverage ===');
const stemFields = ['physics', 'chemistry', 'mathematics', 'computer-science', 'engineering', 'astronomy', 'biology', 'psychology'];
const fieldCounts: Record<string, number> = {};

stemFields.forEach(field => {
  fieldCounts[field] = stemAchievementsData.people.filter(person => 
    person.tags.includes(field)
  ).length;
});

Object.entries(fieldCounts).forEach(([field, count]) => {
  if (count > 0) {
    console.log(`${field}: ${count} people`);
  }
});

console.log('\n=== Representation Categories ===');
const categories = {
  'Women in STEM': stemAchievementsData.people.length,
  'African American': stemAchievementsData.people.filter(p => p.tags.includes('african-american')).length,
  'Asian American': stemAchievementsData.people.filter(p => p.tags.includes('asian-american')).length,
  'Indian American': stemAchievementsData.people.filter(p => p.tags.includes('indian-american')).length,
  'British': stemAchievementsData.people.filter(p => p.tags.includes('british')).length,
  'Polish-French': stemAchievementsData.people.filter(p => p.tags.includes('polish-french')).length
};

Object.entries(categories).forEach(([category, count]) => {
  console.log(`${category}: ${count} people`);
});

console.log('\n=== Usage with test-data-api ===');
console.log('To use this data with the test-data-api:');
console.log('1. Import the data: import { stemAchievementsData } from "stem-achievements-data"');
console.log('2. Create a DataFactory: const factory = new DataFactory(stemAchievementsData)');
console.log('3. Use factory methods: factory.getPeople(), factory.getPeopleByTag("physics"), etc.');
console.log('4. The data is fully compatible with the Person, Group, and Event interfaces');
