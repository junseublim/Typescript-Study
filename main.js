"use strict";
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
exports.__esModule = true;
var message = "welcome!";
console.log(message);
var x = 10;
var isBeginner = true;
var total = 0;
var name = 'Jun';
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
var n = null;
var u = undefined;
var isNews = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//튜플
// 순서 혹은 개수를 임의로 할 수는 없다
var person1 = ['Chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
// => 6
var randomValue = 10;
randomValue = true;
randomValue = 'Jun';
var myVaraible = 10;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVaraible)) {
    console.log(myVaraible.name);
}
myVaraible.toLowerCase();
var a;
a = 10;
a = true;
var b = 20;
//b = true; <- error:  type is inferred when initialized
var multiType;
multiType = 20;
multiType = true;
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
add(5); //second parameter is treated as undefined
var p = {
    firstName: "Bruce",
    lastName: 'Wayne'
};
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Jun');
console.log(emp1.employeeName);
emp1.greet();
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
var object = backPack.get();
//backPack.add(23); error
