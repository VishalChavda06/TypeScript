// 🔢 Basic Types in TypeScript
// 📝 Primitives: number, string, boolean, null, undefined, symbol
// 📊 Array: number[], string[], boolean[]
// 🔗 Tuple: [string, number]
// 🎨 Enum: enum Color {Red, Green, Blue}
// ❓ Any: any (allows any type)
// 🚫 Void: void (for functions that don't return anything)
// ❌ Never: never (for functions that never return)

let a: number = 10; // 🔢 Number variable
let arr: number[] = [1, 2, 3]; // 📊 Array of numbers

// 🔗 Tuple: fixed-length array with specific types
let tupleArr: [string, number] = ["hello", 10];

// 🎨 Enum: set of named constants
enum userRole {
    Admin = 'admin',
    User = 'user',
    Guest = 'guest'
}

// Using enum
let role: userRole = userRole.Admin; // 👑 Admin role

// ❓ Any vs Unknown

// Any: allows any type, no type checking
let value: any = 10;
value = 12;
value = "hello";
value.toUpperCase(); // ✅ No error, but risky!

// Unknown: safer alternative to any
let value2: unknown = 'hello';
value2 = 10;
// Need to check type before using
if (typeof value2 === 'string') {
    value2.toUpperCase(); // ✅ Safe!
}

// 🚀 Example: Simple function with TypeScript
function greet(name: string): string {
    return `👋 Hello, ${name}!`;
}

console.log(greet("World")); // Output: 👋 Hello, World!
