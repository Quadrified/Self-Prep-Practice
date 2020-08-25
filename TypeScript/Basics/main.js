/* ------------------------------------
TypeScript Types
TS type assertion or Type casting
Type inference
Union of types - MultiType
Function
Interfaces
Classes and Access Modifiers
------------------------------------*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* ------------------------------------
TypeScript Types
------------------------------------*/
// Types - number, string, boolean, any, null, undefined
var number = 10;
var string = '10';
var boolean = true;
var any;
var n = null;
var u = undefined;
var numberArray; // Number array
var anyArray = [1, true, 'Omer'];
var uknown; // like any but cannot access unknown value
var sentence = "The number is " + number + " and string is " + string + " and boolean is " + boolean;
// console.log(sentence);
// Enums
var ColorEnum;
(function (ColorEnum) {
    ColorEnum[ColorEnum["Red"] = 1] = "Red";
    ColorEnum[ColorEnum["Green"] = 2] = "Green";
    ColorEnum[ColorEnum["Blue"] = 3] = "Blue";
})(ColorEnum || (ColorEnum = {})); // enum datatype with explicit values
// console.log(ColorEnum);
// Tuple - The number of elements in array are fixed and also the order of types is fixed
var person = ['Omer', 22];
/* ------------------------------------
TS types assertion or Type casting
------------------------------------*/
var message;
message = 'abc'; // initializing the message varible of type 'any'
var endsWithC = message.toLowerCase(); // type assertion for a variable declared but not initialized to anything
var endsWithCAlternate = message.toUpperCase(); // alternate type assertion
/* ------------------------------------
TS inference
------------------------------------*/
// TS infers the type of variable declared bason the value initialized for the variable
var value; // type - any || we can initiate any value to the variable value
value = 10;
value = true;
value = 'Omer';
var initializedValue = 10; // type - number infered by TS and cannot be initialized to value other than number
// initializedValue = true; // error
// initializedValue = 'Omer'; // error
/* ------------------------------------
Union of types
------------------------------------*/
// To use 2 types on a variable
var multiType;
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
var myMessage = 'Omer';
var log = function (myMessage) {
    // console.log(myMessage);
};
var arrowFunction = function (myMessage) {
    // console.log(myMessage);
};
log(myMessage);
arrowFunction(myMessage);
var a = 10, b = 20;
var addFunction = function (a, b) {
    return a + b;
};
addFunction(1, 5);
// addFunction('O', 'Q'); // error since parameters are of type number
// console.log(addFunction(a, b));
// Optional parameters - the order of optional parameters is important
var add = function (a, b) {
    return a + b;
};
add(1);
add(1, 4);
// Default parameters - assigining values explicitly
var addDefault = function (a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
};
addDefault(2);
// console.log(addDefault(10, 30)); // Overrrides the variable b = 10 to b = 30
/* ------------------------------------
Interfaces
------------------------------------*/
// Declaring object as a type
// The old way and not much robust
function fullName(person) {
    // console.log(`${person.firstName} ${person.lastName}`);
}
var p = {
    firstName: 'Omer',
    lastName: 'Quadri'
};
fullName(p);
// Defining the function that will use the Interface
function fullNameInterface(person) {
    // console.log(`${person.firstName} ${person.lastName}`);
}
// Declaring the object to be passed in as parameter
// The order of variables declared in Interface are importan while writing the object
var personInterfaceObject = {
    firstName: 'Omer',
    lastName: 'Quadri'
};
// Pasing the object as an argument to the function
fullNameInterface(personInterfaceObject);
function AddressInterfaceMethod(address) {
    // console.log(`${address.city}, ${address.country}, ${address.street}, ${address.zipCode}`)
}
var AddressInterfaceObject = {
    street: 'Maruti Nagar',
    city: 'Hyderabad',
    country: 'India',
    zipCode: 500059
};
AddressInterfaceMethod(AddressInterfaceObject);
/* ------------------------------------
Classes and Access Modifiers
------------------------------------*/
var Employee = /** @class */ (function () {
    // private employeeName: string; // gives error when used outside this class or in a derived class
    // protected employeeName: string; // can be used in derived class and in this class
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Hello, " + this.employeeName);
    };
    return Employee;
}());
var employee1 = new Employee('Omer');
console.log(employee1.employeeName);
employee1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
