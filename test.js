const pet = require('./index.js');

console.log('🧪 Running Console Pets Tests...\n');

// Test all pets
console.log('Testing all pets:');
const pets = ['cat', 'dog', 'robot', 'dragon', 'hamster', 'alien'];

pets.forEach(petType => {
  console.log(`\n✅ Testing ${petType}:`);
  pet.happy(petType);
});

console.log('🎉 All tests passed!');