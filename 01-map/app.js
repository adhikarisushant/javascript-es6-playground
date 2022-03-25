// MAP Method
const people = [
  {
    name: 'Ram',
    age: 20,
    position: 'developer',
  },
  {
    name: 'Hari',
    age: 25,
    position: 'designer',
  },
  {
    name: 'Sita',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'Gita',
    age: 26,
    position: 'intern',
  },
];
// Quokka.js - Extension
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

const getAges = (person) => person.age * 2;

const ages = people.map(getAges);
console.log(ages);

const newPeople = people.map((item) => {
  return {
    firsName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});
console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector('#result');

result.innerHTML = names.join('');
