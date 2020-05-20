console.log("----- BRAD & WES JS TUTORIAL -----");

const x = null;

// console.log(typeof x);

// const name = "Omer";
// const age = 22;

/* STRINGS */

// console.log("----- STRINGS -----");

// Concatenation

// console.log('My name is  ' + name + ' and I am ' + age + ' years old');

// Template Literals

// console.log(`My name is ${name} and I am ${age} years old`)

// String Properties & Methods

const s = "Omer Quadri";

// console.log(s.length);

// console.log(s.toLowerCase());

// console.log(s.toUpperCase());

// console.log(s.substr(0, 2));

// console.log(s.split(''));

// New String methods with ES6

// .startsWith()

// console.log(s.startsWith("O")); // -> true
// console.log(s.startsWith("o")); // -> false

// .endsWith()

// console.log(s.endsWith("i")); // -> true
// console.log(s.endsWith("O")); // -> false

// .includes()

// console.log(s.includes("i")); // -> true
// console.log(s.includes("z")); // -> false

// .repeat()

// console.log(s.repeat(10));

// == vs ===

// let bool = 2;
// console.log(typeof(bool));

// if(bool == 2){
// 	console.log('True')
// }

// if(bool === 2){ // False because condition is false
// 	console.log('Execute when true')
// } else { // True because condition is True
// 	console.log('Execute when false')
// }

// let a = 5, b = '5', c = 6;

// console.log(a + b); // Concatenated

// login, password => string
// 'login success', login = 'Manikanta', password = 'Mani@dsmart'
// 'login failed'

// switch statement

// let color = 'White';

// // case 'Red' === color == 'Red'
// switch (color) {
// 	case 'Red':
// 		// logic
// 		console.log('Red is displayed');
// 		break;
// 	case 'Blue':
// 		console.log('Blue is displayed');
// 		break;
// 	default:
// 		console.log('No color')
// 		break;
// }

/* ARRAYS */

// console.log("----- ARRAYS -----");

const fruits = ["Apples", "Mangoes", "Oranges"];

console.log(fruits);

// console.log(fruits[1]);

fruits[3] = "Grapes";

// fruits.push("Bananas");

// fruits.unshift("Berries");

// fruits.pop();

// console.log(Array.isArray(fruits));

// console.log(fruits.indexOf('Mangoes'));

// console.log(fruits);

// Destructuring arrays

const details = ["Omer", 22, "@quadrified"];

const [Fname, id, socialHandle] = details;

// console.log(Fname, id, socialHandle);

// Destructuring an Array from a String

const item = "OreoShake, Shakes, 200";

const [itemName, category, price] = item.split(",");

// console.log(itemName, category, price);

// Destructuring when there are more values in the array than you want to destructure : we use rest (...values) operator for remaining values

const team = ["Omer", "Saboor", "Farhan", "Wasay", "Ibrahim"];

const [Captain, viceCaptain, ...restPlayers] = team;

// console.log(Captain, viceCaptain, ...restPlayers);

// Swapping with Destructuring

let onCrease = "Omer",
  offCrease = "Quadri";

// console.log(onCrease, offCrease);

[onCrease, offCrease] = [offCrease, onCrease];

// console.log(onCrease, offCrease);

/* OBJECTS */

// console.log("----- OBJECTS -----");

const person = {
  name: "Omer",
  age: 22,
  hobbies: ["Mobile dev", "Cooking", "Eat"],
  address: {
    street: "Maruthi Nagar",
    city: "Hyderabad",
  },
  social: {
    github: "github.com/Quadrified",
    instagram: "instagram.com/Quadrified",
    facebook: "facebook.com/Quadrified",
  },
};

// console.log(person);

// console.log(person.name);

// console.log(person.hobbies);

// console.log(person.address);

// console.log(person.address.city);

// console.log(
// 	`${person.name} is ${person.age} years old with hobbies : ${person.hobbies} and stays at ${person.address.street}, ${person.address.city}.`
// );

// Destructuring

const {
  name,
  age,
  address: { city },
  hobbies,
} = person;

// console.log(name, age, city);

// Adding new prop in object

person.email = "omerquadri@gmail.com";

// console.log(person);

// Destructuring and renaming the objects to what we want while it is being destructured

const { github: git, instagram: insta, facebook: fb } = person.social;

// console.log(git, insta, fb);

// Object destructuring with variable renaming & default values

const { w: width = 100, h: height = 400 } = { w: 800 };

// console.log(width, height);

// Destructuring with functions

function currencyConverter(amt) {
  // Returns an object with converted currencies

  const converted = {
    USD: amt * 0.7,
    GBP: amt * 0.76,
    AUD: amt * 1.01,
  };

  return converted;
}

// console.log(currencyConverter(100));

// Converting while destructuring

const { USD, GBP, AUD } = currencyConverter(100); // We get direct converted values

// console.log(USD, GBP, AUD);

// Array of Objects

// console.log("----- ARRAY OF OBJECTS -----");

const todos = [
  {
    id: 1,
    task: "Start JS tutorial",
    isCompleted: true,
  },
  {
    id: 2,
    task: "Complete JS tutorial",
    isCompleted: false,
  },
  {
    id: 3,
    task: "Complete Wes JS tutorial",
    isCompleted: false,
  },
  {
    id: 4,
    task: "Complete Array method tutorial",
    isCompleted: false,
  },
];

// console.table(todos);

// console.log(todos);

// console.log(JSON.stringify(todos));

// console.log(todos[1].task, todos[1].isCompleted);

/* LOOPS */

// console.log("-----LOOPS -----");

// for loop

for (let i = 0; i < 10; i++) {
  // console.log(i);
}

// while loop

let i = 0;

while (i < 10) {
  // console.log(i);
  i++;
}

// Looping arrays

for (let i = 0; i < todos.length; i++) {
  // console.log(todos[i].task);
}

// for of loop (loops over iterables only i.e. Array, Strings, Maps etc.)

// for an array for of loop returns the values as asked

for (let todo of todos) {
  // console.log(todo.task); // returns the tasks
  // console.log(todo); // returns the whole object
}

const myName = "Omer Quadri";

// for a string for of loop returns each and every character

for (const char of myName) {
  // console.log(char);
}

// forEach loop

const ids = todos.forEach(function (todo) {
  // console.log(todo.id);
});

// map => returns an array back

const tasks = todos.map(function (todo) {
  return todo.task;
});

// console.log(tasks);

// filter => returns and array back

const completedTasks = todos
  .filter(function (todo) {
    return todo.isCompleted === false;
  })
  .map(function (todo) {
    // tacking on different methods together
    return todo.task;
  });

// console.log(completedTasks);

/* FUNCTIONS */

function add(n1, n2) {
  return n1 + n2;
}

// console.log(add(1, 3));

// Arrow function

const addNum = (n1, n2) => n1 + n2;

// console.log(addNum(1, 3));

const addOne = (n1) => n1 + 100;

// console.log(addOne(5));

const names = ["Taha", "Omer", "Mohammed"];
const race = "100m dash";

const fullNames = names.map((name) => `${name} Quadri`);

// console.log(fullNames);

// Implicit returning an object literal after taking String as an Input

const whoWon = names.map((name, i) => ({
  name,
  race,
  place: i + 1,
}));

// console.table(whoWon);

const ages = [23, 84, 96, 78, 23, 11, 12];

const srCitizen = ages.filter((age) => age >= 60);

// console.log(srCitizen);

// console.log("Demo benach for git")
