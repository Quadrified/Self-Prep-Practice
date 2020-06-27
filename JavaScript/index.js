console.log('----- BRAD & WES JS TUTORIAL -----');

const x = null;

console.log(typeof x);

const name = 'Omer';
const age = 22;

/* STRINGS */

console.log('----- STRINGS -----');

// Concatenation

console.log('My name is  ' + name + ' and I am ' + age + ' years old');

// Template Literals

console.log(`My name is ${name} and I am ${age} years old`);

// String Properties & Methods

const s = 'Omer Quadri';

console.log(s.length);

console.log(s.toLowerCase());

console.log(s.toUpperCase());

console.log(s.substr(0, 2));

console.log(s.split(''));

// New String methods with ES6

// .startsWith()

console.log(s.startsWith('O')); // -> true
console.log(s.startsWith('o')); // -> false

// .endsWith()

console.log(s.endsWith('i')); // -> true
console.log(s.endsWith('O')); // -> false

// .includes()

console.log(s.includes('i')); // -> true
console.log(s.includes('z')); // -> false

// .repeat()

console.log(s.repeat(10));

/* ARRAYS */

console.log('----- ARRAYS -----');

const fruits = ['Apples', 'Mangoes', 'Oranges'];

console.log(fruits[1]);

fruits[3] = 'Grapes';

fruits.push('Bananas');

fruits.unshift('Berries');

fruits.shift('Berries');

fruits.pop();

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('Mangoes'));

console.log(fruits);

// Array.from() --> Converts array-ish elements like NodeList to actual arrays
// DOM elements are array-ish and belong to NodeList

const people = document.querySelectorAll('p');

console.log(people);

const peopleArray = Array.from(people, (people) => {
  console.log(people); // Gives p tags
  console.log(people.textContent); // Returns Text in the p tags
});

console.log(peopleArray);

// Array.of() --> creates array with anything passed as argument to of();

const nums = Array.of(12, 22, 21, 33);

console.log(nums);

// Array.some() --> condition that satisfies for at least one item in array

const peopleAge = [32, 15, 19, 12];

const adults = peopleAge.some((age) => age > 18);

console.log(adults);

// Array.every() --> condition that satisfies for all items in array

const adult = peopleAge.every((age) => age > 18);

console.log(adult);

const filteredAdults = peopleAge.filter((age) => age > 18);

console.log(filteredAdults);

// Destructuring arrays

const details = ['Omer', 22, '@quadrified'];

const [Fname, id, socialHandle] = details;

console.log(Fname, id, socialHandle);

// Destructuring an Array from a String

const item = 'OreoShake, Shakes, 200';

const [itemName, category, price] = item.split(',');

console.log(itemName, category, price);

// Destructuring when there are more values in the array than you want to destructure : we use rest (...values) operator for remaining values

const team = ['Omer', 'Saboor', 'Farhan', 'Wasay', 'Ibrahim'];

const [Captain, viceCaptain, ...restPlayers] = team;

console.log(Captain, viceCaptain, ...restPlayers);

// Swapping with Destructuring

let onCrease = 'Omer';
let offCrease = 'Quadri';

console.log(onCrease, offCrease);

[onCrease, offCrease] = [offCrease, onCrease];

console.log(onCrease, offCrease);

/* OBJECTS */

console.log('----- OBJECTS -----');

const person = {
  name: 'Omer',
  age: 22,
  hobbies: ['Mobile dev', 'Cooking', 'Eat'],
  address: {
    street: 'Maruthi Nagar',
    city: 'Hyderabad',
  },
  social: {
    github: 'github.com/Quadrified',
    instagram: 'instagram.com/Quadrified',
    facebook: 'facebook.com/Quadrified',
  },
};

console.log(person);

console.log(person.name);

console.log(person.hobbies);

console.log(person.address);

console.log(person.address.city);

console.log(
  `${person.name} is ${person.age} years old with hobbies : ${person.hobbies} and stays at ${person.address.street}, ${person.address.city}.`
);

// Destructuring

const {
  name,
  age,
  address: { city },
  hobbies,
} = person;

console.log(name, age, city);

// Adding new prop in object

person.email = 'omerquadri@gmail.com';

console.log(person);

// Destructuring and renaming the objects to what we want while it is being destructured

const { github: git, instagram: insta, facebook: fb } = person.social;

console.log(git, insta, fb);

// Object destructuring with variable renaming & default values

const { w: width = 100, h: height = 400 } = { w: 800 }; // uses w: 800

console.log(width, height);

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

console.log(currencyConverter(100));

// Converting while destructuring

const { USD, GBP, AUD } = currencyConverter(100); // We get direct converted values

console.log(USD, GBP, AUD);

// Array of Objects

console.log('----- ARRAY OF OBJECTS -----');

const todos = [
  {
    id: 1,
    task: 'Start JS tutorial',
    isCompleted: true,
  },
  {
    id: 2,
    task: 'Complete JS tutorial',
    isCompleted: false,
  },
  {
    id: 3,
    task: 'Complete Wes JS tutorial',
    isCompleted: false,
  },
  {
    id: 4,
    task: 'Complete Array method tutorial',
    isCompleted: false,
  },
];

console.table(todos);

console.log(todos);

console.log(JSON.stringify(todos));

console.log(todos[1].task, todos[1].isCompleted);

/* LOOPS */

console.log('-----LOOPS -----');

// for loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// while loop

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

// Looping arrays

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].task);
}

// for of loop (loops over iterables only i.e. Array, Strings, Maps etc.)

// for an array for of loop returns the values as asked
// Can use break, continue

for (const todo of todos) {
  console.log(todo.task); // returns the tasks
  console.log(todo); // returns the whole object
}

// for of with Object

const pizza = {
  size: 'Medium',
  toppings: ['Jalapeno', 'Olives', 'Tomatoes'],
  cheeseType: 'Mozzarella',
};

console.log(pizza);

// Object to Array

for (const val of Object.entries(pizza)) {
  console.log(val);
}

let arrPizza = Object.keys(pizza);
let arrPizza = Object.values(pizza);
let arrPizza = Object.entries(pizza);
console.log(arrPizza);

const myName = 'Omer Quadri';

// for a string for of loop returns each and every character

for (const char of myName) {
  console.log(char);
}

// forEach loop - takes a function

const ids = todos.forEach(function (todo) {
  console.log(`${todo.id} is ${todo.task}`);
});

// map => returns an array back

const tasks = todos.map(function (todo) {
  return todo.task;
});

console.log(tasks);

// filter =>turns and array back

const completedTasks = todos
  .filter(function (todo) {
    return todo.isCompleted === false;
  })
  .map(function (todo) {
    // tacking on different methods together
    return todo.task;
  });

console.log(completedTasks);

/* FUNCTIONS */

function add(n1, n2) {
  return n1 + n2;
}

console.log(add(1, 3));

// Arrow function

const addNum = (n1, n2) => n1 + n2;

console.log(addNum(1, 3));

const addOne = (n1) => n1 + 100;

console.log(addOne(5));

const names = ['Taha', 'Omer', 'Mohammed'];
const race = '100m dash';

const fullNames = names.map((name) => `${name} Quadri`);

console.log(fullNames);

// Implicit returning an object literal after taking String as an Input

const whoWon = names.map((name, i) => ({
  name,
  race,
  place: i + 1,
}));

console.table(whoWon);

const ages = [23, 84, 96, 78, 23, 11, 12];

const srCitizen = ages.filter((age) => age >= 60);

console.log(srCitizen);

// Array to Object

const arr = ['Omer', 'hello'];
arr.new = 'Quadri';
console.log(arr);

// let arrObj = {...arr};

console.log(arrObj);

// Spread Operator (...item) ---> Concatenates or adds or copies the items, we use it when we need to copy someting in a new variable

const veg = ['Daal', 'Paneer Masala', 'Veg Manchuria'];
const nonveg = ['Chicken Masala', 'Mutton Masala', 'Chicken Manchuria'];

// TO create One unified menu with both the categories

const menu = [...veg, ...nonveg];

console.log(menu);

const splMenu = [...menu];
splMenu.push('Rabdi');

console.log(splMenu);

const comments = [
  { id: 12, text: 'Hello' },
  { id: 123, text: 'Hello World' },
  { id: 1234, text: 'Bye' },
  { id: 12345, text: 'Bye World' },
];

const commentId = 1234;

const index = comments.find((comment) => comment.id === commentId);

console.log(index);

const commentIndex = comments.findIndex((index) => index.id === commentId);

const filterArray = [
  ...comments.slice(0, commentIndex),
  ...comments.slice(commentIndex + 1),
];

const filteredArray = comments.filter((comment) => comment.id !== commentId);

console.log(filteredArray);
console.log(filterArray);

const arrayOne = [1, 2, 3, 4];
const arrayTwo = [5, 6, 7];

arrayOne.push(...arrayTwo);

console.log(arrayOne);

const visitorName = ['Omer', 'Quadri'];

greetMe = (first, last) => {
  // alert(`Hey there, ${first} ${last}!`);
};

greetMe(...visitorName); // Spreading the array

// Rest Operator ---> packs all elements into the array, used in spreading into a function and destructuring

lengthConverter = (stdLength, ...lengths) =>
  // We use map because the (...) rest operator converts all the values passed as arguments into array so we map over the array.

  lengths.map((length) => stdLength * length);

// return stdLength * length; // NaN

console.log(lengthConverter(1000, 2, 4, 5, 6));

const student = ['Omer Quadri', 160315737022, 75, 73, 71];

const [studName, roll, marks] = student; // Normal destructuring

console.log(studName, roll, marks); // Does not give the remaining marks, just returns one

const [studName, roll, ...marks] = student;

console.log(studName, roll, marks); // Returns rest values

/* Promises */

// Creating new promise
const newPromise = new Promise((resolve, reject) => {
  reject('Hello');
});

newPromise
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

const postPromise = fetch('https://jsonplaceholder.typicode.com/posts/');

console.log(postPromise);

postPromise
  .then((response) => response.json())
  .then((response) => {
    const limit = 10;
    const posts = response.filter((response) => response.id <= limit); // Only 10
    console.log(posts);
  })
  .catch((error) => console.error(error));

// Working with multiple Promises

const posts = fetch('https://jsonplaceholder.typicode.com/posts/');
const users = fetch('https://jsonplaceholder.typicode.com/users/');

Promise.all([posts, users])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((res) => {
    console.log(res);
  });

fetch('http://api.github.com/users/quadrified')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

const video = document.querySelector('.video');

navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
  video.srcObject = mediaStream;
  video.load();
  video.play();
});

// Chaining promises

function breathe(amount) {
  return new Promise((resolve, reject) => {
    if (amount < 500) {
      reject('Too low!');
    }
    setTimeout(() => resolve(`Done for ${amount} ms`), amount);
  });
}

breathe(1000)
  .then((res) => {
    console.log(res);
    return breathe(2000);
  })
  .then((res) => {
    console.log(res);
    return breathe(200);
  })
  .then((res) => {
    console.log(res);
    return breathe(200);
  })
  .then((res) => {
    console.log(res);
    return breathe(5000);
  })
  .then((res) => {
    console.log(res);
    return breathe(200);
  })
  .then((res) => {
    console.log(res);
    return breathe(2000);
  })
  .catch((err) => console.log(err));

/* ASYNC/AWAIT */

function breathe(amount) {
  return new Promise((resolve, reject) => {
    if (amount < 500) {
      reject('Too low!');
    }
    setTimeout(() => resolve(`Done for ${amount} ms`), amount);
  });
}

// Catching errors in Async/Await

const go = async () => {
  try {
    console.log('START');
    const res = await breathe(1000);
    console.log(res);
    const res2 = await breathe(2000);
    console.log(res2);
    const res3 = await breathe(500);
    console.log(res3);
    const res4 = await breathe(300);
    console.log(res4);
    const res5 = await breathe(500);
    console.log(res5);
    console.log('END');
  } catch (err) {
    console.error(err);
  }
};

go();

catchError = (fn) => (...args) => fn(...args).catch((err) => console.log(err));

const go = async (name) => {
  console.log(`START for ${name}`);
  const res = await breathe(1000);
  console.log(res);
  const res2 = await breathe(700);
  console.log(res2);
  const res3 = await breathe(500);
  console.log(res3);
  const res4 = await breathe(600);
  console.log(res4);
  const res5 = await breathe(800);
  console.log(res5);
  console.log('END');
};

const wrappedFunction = catchError(go);

wrappedFunction('Omer'); // Passing args in the wrapped higher function

// Waiting for multiple Promises

const getUsers = async () => {
  const posts = fetch('https://jsonplaceholder.typicode.com/posts/');
  const users = fetch('https://jsonplaceholder.typicode.com/users/');

  // waiting for them to come back
  const res = await Promise.all([posts, users]); // returns responses for both
  const data = res.map((res) => res.json());
  const [post, user] = await Promise.all(data);
  console.log(post, user);
};

getUsers();

const getData = async (names) => {
  const promises = names.map((name) =>
    fetch(`http://api.github.com/users/${name}`).then((r) => r.json())
  );
  const [quadrified, abdus] = await Promise.all(promises);
  console.log(quadrified, abdus);
};

getData(['quadrified', 'abdussaboor98']);

// Promisifying callback functions 

const getGeoLocation = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

const getLocation = async () => {
  console.log('Starting');
  const pos = await getGeoLocation();
  console.log(pos);
  console.log('Finishing');
};

getLocation();
