"use strict";
// Basic Types
//  primitives: number, string, boolean, null, undefined, symbol
//  Array: number[], string[], boolean[]
//  Tuple: [string, number]
//  Enum: enum Color {Red, Green, Blue}
//  Any: any
//  Void: void
//  Never: never
Object.defineProperty(exports, "__esModule", { value: true });
let a = 10;
let arr = [1, 2, 3];
// tuple 
let tupleArr = ["hello", 10];
// enum
var userRole;
(function (userRole) {
    userRole["Admin"] = "admin";
    userRole["User"] = "user";
    userRole["Guest"] = "guest";
})(userRole || (userRole = {}));
// userRole.Admin
// any vs unknown
let value = 10;
value = 12;
value = "hello";
value.toUpperCase(); // no error
// unknown
let value2 = 'heelo';
value2 = 10;
if (typeof value2 === 'string') {
    value2.toUpperCase(); // no error
}
//# sourceMappingURL=app.js.map