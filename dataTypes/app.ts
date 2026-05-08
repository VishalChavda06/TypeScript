// Data Types in TypeScript
 
/*
1. Primitive Data Types: number, string, boolean, null, undefined, symbol, bigint
2. Object Data Types: object, array, date, regexp
3. Special Data Types: void, never
4. Advanced Data Types: union, intersection, tuple, enum
5. Function Types: function

*/

// Primitive Data Types
let numvalue: number = 42;
let strvalue: string = "Hello, TypeScript!";
let boolvalue: boolean = true;
let nullvalue: null = null;
let undefinedvalue: undefined = undefined;
let symbolvalue: symbol = Symbol("unique");
let bigintvalue: bigint = 9007199254740991n;

// Object Data Types
let objvalue: object = { name: "Vishal", age: 30 };
let arrvalue: number[] = [1, 2, 3, 4, 5];
let datevalue: Date = new Date();
let regexpvalue: RegExp = /abc/;

// Special Data Types
function logMessage(message: string): void {
    console.log(message);
}

function throwError(message: string): never {
    throw new Error(message);
}

