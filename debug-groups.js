import { stemAchievementsData } from './dist/index.js';

// Collect all referenced group IDs
const referencedGroups = new Set();
stemAchievementsData.people.forEach(person => {
  person.groupMemberships.forEach(groupId => {
    referencedGroups.add(groupId);
  });
});

// Collect all existing group IDs
const existingGroups = new Set(stemAchievementsData.groups.map(g => g.id));

// Find missing groups
const missingGroups = [];
referencedGroups.forEach(groupId => {
  if (!existingGroups.has(groupId)) {
    missingGroups.push(groupId);
  }
});

console.log('Missing group IDs:', missingGroups);

// Show which people reference missing groups
missingGroups.forEach(missingGroupId => {
  const peopleWithMissingGroup = stemAchievementsData.people.filter(person => 
    person.groupMemberships.includes(missingGroupId)
  );
  console.log(`Missing group ID: ${missingGroupId} for people:`, peopleWithMissingGroup.map(p => p.fullName || p.preferredName));
});