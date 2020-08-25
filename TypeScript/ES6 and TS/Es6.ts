export {};

// console.log("ES6 basics");

// Symbols - creates unique ID

let s = Symbol("First symbol");

// console.log(typeof s);
// console.log(s.toString());

let s2 = Symbol();
let s3 = Symbol();

console.log(s2 === s3);

let s4 = Symbol.for("RegSymbol");
let s5 = Symbol.for("RegSymbol");

// console.log(s4 === s5);

// Iterators

let iterable = [1, 2, 3];

function createIterator(array) {
	let count = 0;
	return {
		next: function () {
			return count < array.length
				? { value: array[count++], done: false }
				: { value: undefined, done: true };
		},
	};
}

let itr = createIterator(iterable);

// console.log(itr.next());

// Generators

function* gen() {
	yield 1;
	// console.log("After first yield");
	yield 2;
	// console.log("After second yield");
}

// let myGen = gen();

// console.log(myGen.next());
// console.log(myGen.next());
// console.log(myGen.next());

let myArr: any[] = [1, "omer", 234343];

console.log(myArr);
export {};
let message = "Hello, Quadri!";
// console.log(message);

// Declerations, Var types, Arrays, tuple, enums, any, Interfaces, Classes 

// Variable types - boolean, number, string, null, undefined, tuple, enum, any

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Omer";

// name = true; // Error

let sentence: string = `My name is ${name}
I am a beginner in TypeScript`;

// console.log(sentence);

// Assigned to boolean or number or string

let n: null = null;

let u: undefined = undefined;

let isNew: boolean = null;
let newName: string = undefined;

// Array 

let arrayList: number[] = [1, 2, 3];
let arrayList2: Array<number> = [1, 2, 3];

// Tuple

let person1: [string, number] = ["Omer", 22]; // Fixed number of types and fixed position

// enum - creates data types

enum color {
	Red,
	Blue,
	Green,
}

let c: color = color.Blue;

// console.log(c);

// any

let randomValue: any;
randomValue = true;
randomValue = "Quadri";

// console.log(randomValue);

let myVar: any = 10;

// console.log(myVar.name); // no error because of any type
// myVar();
// (myVar as string).toUpperCase(); // typecasting

// Union types

let multiType: number | boolean;

multiType = true;

multiType = 30;

// functions

function add(n1: number, n2: number): number {
	return n1 + n2;
}

// console.log(add(1, 5));

// Optional params

function addOne(n1: number, n2?: number): number {
	if (n2) {
		return +n2;
	} else return n1;
}

addOne(6);

// Default params

function addDef(n1: number, n2: number = 16): number {
	if (n2) {
		return +n2;
	} else return n1;
}

addDef(2);

// Interfaces

function fullName(person: { fName: string; lName: string }) {
	// console.log(`${person.fName} ${person.lName}`);
}

let p = {
	fName: "Omer",
	lName: "Quadri",
};

fullName(p);

interface Person {
	fName: string;
	lName: string;
}

function fullNameInterface(person: Person) {
	console.log(`${person.fName} ${person.lName}`);
}

let pInterface = {
	fName: "Omer",
	lName: "Quadri",
};

// fullNameInterface(pInterface);

// Classes

class Employee {
	eName: string;

	constructor(name: string) {
		this.eName = name;
	}

	greet() {
		console.log(`Good Afternoon, ${this.eName}`);
	}
}

let emp1 = new Employee("Omer Quadri");
console.log(emp1.eName);
emp1.greet();

class Manager extends Employee {
	constructor(mName: string) {
		super(mName);
	}

	greetManager() {
		console.log(`The new Manager is`);
	}
}

let m1 = new Manager("Taha");
m1.greetManager();
m1.greet();

console.log(m1.eName);

