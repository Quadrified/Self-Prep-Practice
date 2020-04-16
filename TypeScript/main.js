"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hello, Quadri!";
// console.log(message);
// Variable types - boolean, number, string, null, undefined, tuple, enum, any
var isBeginner = true;
var total = 0;
var name = "Omer";
// name = true; // Error
var sentence = "My name is " + name + "\nI am a beginner in TypeScript";
// console.log(sentence);
// Assigned to boolean or number or string
var n = null;
var u = undefined;
var isNew = null;
var newName = undefined;
var arrayList = [1, 2, 3];
var arrayList2 = [1, 2, 3];
// Tuple
var person1 = ["Omer", 22]; // Fixed number of types and fixed position
// enum - creates data types
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Blue"] = 1] = "Blue";
    color[color["Green"] = 2] = "Green";
})(color || (color = {}));
var c = color.Blue;
// console.log(c);
// any
var randomValue;
randomValue = true;
randomValue = "Quadri";
// console.log(randomValue);
var myVar = 10;
// console.log(myVar.name); // no error because of any type
// myVar();
// (myVar as string).toUpperCase(); // typecasting
// Union types
var multiType;
multiType = true;
multiType = 30;
// functions
function add(n1, n2) {
    return n1 + n2;
}
// console.log(add(1, 5));
// Optional params
function addOne(n1, n2) {
    if (n2) {
        return +n2;
    }
    else
        return n1;
}
addOne(6);
// Default params
function addDef(n1, n2) {
    if (n2 === void 0) { n2 = 16; }
    if (n2) {
        return +n2;
    }
    else
        return n1;
}
addDef(2);
// Interfaces
function fullName(person) {
    // console.log(`${person.fName} ${person.lName}`);
}
var p = {
    fName: "Omer",
    lName: "Quadri"
};
fullName(p);
function fullNameInterface(person) {
    console.log(person.fName + " " + person.lName);
}
var pInterface = {
    fName: "Omer",
    lName: "Quadri"
};
// fullNameInterface(pInterface);
// Classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.eName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Afternoon, " + this.eName);
    };
    return Employee;
}());
var emp1 = new Employee("Omer Quadri");
console.log(emp1.eName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(mName) {
        return _super.call(this, mName) || this;
    }
    Manager.prototype.greetManager = function () {
        console.log("The new Manager is");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Taha");
m1.greetManager();
m1.greet();
console.log(m1.eName);
