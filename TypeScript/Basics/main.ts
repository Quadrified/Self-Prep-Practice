/* ------------------------------------
TypeScript Types
TS type assertion or Type casting
Type inference
Union of types - MultiType
Function
Interfaces
Classes and Access Modifiers
------------------------------------*/

/* ------------------------------------
TypeScript Types 
------------------------------------*/
// Types - number, string, boolean, any, null, undefined

let number: number = 10;
let string: string = '10';
let boolean: boolean = true;
let any: any;
let n: null = null;
let u: undefined = undefined;
let numberArray: number[]; // Number array
let anyArray: any[] = [1, true, 'Omer'];
let uknown: unknown; // like any but cannot access unknown value

let sentence: string = `The number is ${number} and string is ${string} and boolean is ${boolean}`;
// console.log(sentence);

// Enums
enum ColorEnum {
    Red = 1,
    Green = 2,
    Blue = 3,
} // enum datatype with explicit values
// console.log(ColorEnum);

// Tuple - The number of elements in array are fixed and also the order of types is fixed
let person: [string, number] = ['Omer', 22];

/* ------------------------------------
TS types assertion or Type casting
------------------------------------*/
let message;
message = 'abc'; // initializing the message varible of type 'any'

let endsWithC = (<string>message).toLowerCase(); // type assertion for a variable declared but not initialized to anything

let endsWithCAlternate = (message as string).toUpperCase(); // alternate type assertion

/* ------------------------------------
TS inference 
------------------------------------*/
// TS infers the type of variable declared bason the value initialized for the variable

let value; // type - any || we can initiate any value to the variable value
value = 10;
value = true;
value = 'Omer';

let initializedValue = 10; // type - number infered by TS and cannot be initialized to value other than number
// initializedValue = true; // error
// initializedValue = 'Omer'; // error

/* ------------------------------------
Union of types
------------------------------------*/
// To use 2 types on a variable

let multiType: string | number;
multiType = 'Omer';
multiType = 22;

/**
 any vs union
 1. union restricts the variable type to only the specified types. || any does not restrict reassigning of variable to other types
 2. intellisense support is available for Union || No intellisense for any type
 */

/* ------------------------------------
Functions
------------------------------------*/

let myMessage = 'Omer';
let log = function (myMessage) {
    // console.log(myMessage);
};

let arrowFunction = (myMessage) => {
    // console.log(myMessage);
};
log(myMessage);
arrowFunction(myMessage);

let a = 10,
    b = 20;

let addFunction = function (a: number, b: number) {
    return a + b;
};

addFunction(1, 5);
// addFunction('O', 'Q'); // error since parameters are of type number
// console.log(addFunction(a, b));

// Optional parameters - the order of optional parameters is important
let add = function (a: number, b?: number) {
    return a + b;
};
add(1);
add(1, 4);

// Default parameters - assigining values explicitly
let addDefault = function (a: number, b: number = 10) {
    return a + b;
};

addDefault(2);
// console.log(addDefault(10, 30)); // Overrrides the variable b = 10 to b = 30

/* ------------------------------------
Interfaces
------------------------------------*/
// Declaring object as a type

// The old way and not much robust
function fullName(person: { firstName: string; lastName: string }) {
    // console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Omer',
    lastName: 'Quadri',
};

fullName(p);

// Defining the interface
interface Person {
    firstName: string;
    lastName: string;
}

// Defining the function that will use the Interface
function fullNameInterface(person: Person) {
    // console.log(`${person.firstName} ${person.lastName}`);
}

// Declaring the object to be passed in as parameter
// The order of variables declared in Interface are importan while writing the object

let personInterfaceObject = {
    firstName: 'Omer',
    lastName: 'Quadri',
};

// Pasing the object as an argument to the function
fullNameInterface(personInterfaceObject);

interface Address {
    street: string;
    city: string;
    country: string;
    zipCode?: number; // optional values for example to use in a form where not all values are mandatory
}

function AddressInterfaceMethod(address: Address) {
    // console.log(`${address.city}, ${address.country}, ${address.street}, ${address.zipCode}`)
}

let AddressInterfaceObject = {
    street: 'Maruti Nagar',
    city: 'Hyderabad',
    country: 'India',
    zipCode: 500059,
};

AddressInterfaceMethod(AddressInterfaceObject);

/* ------------------------------------
Classes and Access Modifiers
------------------------------------*/

class Employee {
    public employeeName: string; // cann be used throughout the program
    // private employeeName: string; // gives error when used outside this class or in a derived class
    // protected employeeName: string; // can be used in derived class and in this class

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Hello, ${this.employeeName}`);
    }
}

let employee1 = new Employee('Omer');

console.log(employee1.employeeName);
employee1.greet();

class Manager extends Employee {

    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);