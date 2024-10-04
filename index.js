// Array of people
const people = [
  { name: "Alice", age: 25, occupation: "Engineer" },
  { name: "Bob", age: 30, occupation: "Designer" },
  { name: "Charlie", age: 35, occupation: "Teacher" },
];

// Access and log each person's details
people.forEach((person) => {
  console.log(`${person.name} is a ${person.occupation} and is ${person.age} years old.`);
});

// Modify a person's occupation and age
people[1].occupation = "Senior Designer";
people[1].age = 31;
console.log(people);


// Array of cars
const cars = [
    { make: 'Toyota', model: 'Camry', year: 2005 },
    { make: 'Honda', model: 'Accord', year: 2010 },
    { make: 'Tesla', model: 'Model 3', year: 2020 }
];

// Access and log each car's details
cars.forEach((car) => {
    console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`);
});

// Modify the model and year of a specific car
cars[0].model = 'Corolla';
cars[0].year = 2015;
console.log(cars);

// Delete cars older than 2010
const updatedCars = cars.filter((car) => car.year > 2010);
console.log(updatedCars);

// Delete people older than 30
const remainingPeople = people.filter((person) => person.age <= 30);
console.log(remainingPeople);

// Add a new person to the people array
people.push({ name: 'Diana', age: 22, occupation: 'Artist' });
console.log('After adding new person:', people);

// Sort people by age in ascending order
const sortedPeople = people.sort((a, b) => a.age - b.age);
console.log('Sorted people by age:', sortedPeople);

// Find the newest car (car with the latest year)
const newestCar = cars.reduce((newest, car) => {
  return car.year > newest.year ? car : newest;
}, cars[0]);
console.log('Newest car:', newestCar);


