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
