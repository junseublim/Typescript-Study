export { };
let message = "welcome!";
console.log(message);

let x = 10;

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Jun';
let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

let n: null = null;
let u: undefined = undefined;

let isNews: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//튜플
// 순서 혹은 개수를 임의로 할 수는 없다
let person1: [string, number] = ['Chris', 22];

enum Color { Red = 5, Green, Blue };

let c: Color = Color.Green;

console.log(c);
// => 6


let randomValue: any = 10;
randomValue = true;
randomValue = 'Jun';

let myVaraible: unknown = 10;

function hasName(obj: any): obj is { name: string } {
    return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(myVaraible)) {
    console.log(myVaraible.name);
}

(myVaraible as string).toLowerCase();

let a;
a = 10;
a = true;
let b = 20;
//b = true; <- error:  type is inferred when initialized

let multiType: number | boolean;
multiType = 20;
multiType = true;

function add(num1: number, num2?: number) {
    return num1 + num2;
}
add(5, 10);

add(5); //second parameter is treated as undefined




interface Person {
    firstName: string;
    lastName: string;
}
let p: Person = {
    firstName: "Bruce",
    lastName: 'Wayne'
};
function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}
fullName(p);




class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Jun');
console.log(emp1.employeeName);
emp1.greet();

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

interface BackPack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

declare const backPack: BackPack<string>;

const object = backPack.get();

//backPack.add(23); error


function merge<A, B>(a: A, b: B): A & B {
    return {
        ...a,
        ...b
    }
};

const merged = merge({ foo: 1 }, { bar: 2 });