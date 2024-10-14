# JavaScript Review

## 1. **Variables & Data Types**

- **Variables**: Declared using `let`, `const`, and `var` (prefer `let` and `const`).
- **Data Types**:
  - **Primitive Types**: `Number`, `String`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`
  - **Reference Types**: `Object`, `Array`, `Function`, etc.

```javascript
let num = 10;
const str = "Hello";
let isActive = true;
let obj = { name: "John", age: 30 };
```

## 2. **Functions**

- **Function Declaration**:

```javascript
function greet(name) {
  return "Hello, " + name;
}
```

- **Arrow Functions**:

```javascript
const greet = (name) => `Hello, ${name}`;
```

## 3. **Control Flow**

- **Conditionals**: `if`, `else if`, `else`, `switch`

```javascript
if (x > 10) {
  console.log("Greater than 10");
} else {
  console.log("10 or less");
}
```

- **Loops**: `for`, `while`, `do...while`, `for...of`, `for...in`

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## 4. **Objects and Arrays**

- **Objects**: Key-value pairs

```javascript
let person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};
person.greet();
```

- **Arrays**: Indexed collections of data

```javascript
let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers[0]); // 1
```

## 5. **ES6 Features**

- **Destructuring**:

```javascript
let { name, age } = person;
let [first, second] = numbers;
```

- **Spread Operator**:

```javascript
let newNumbers = [...numbers, 6, 7];
let newObj = { ...person, gender: "male" };
```

- **Template Literals**:

```javascript
let message = `Hello, ${name}! You are ${age} years old.`;
```

## 6. **Promises & Async/Await**

- **Promises**:

```javascript
let promise = new Promise((resolve, reject) => {
  // Some async task
  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});
```

- **Async/Await**:

```javascript
async function fetchData() {
  try {
    let data = await fetch(url);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

## 7. **Error Handling**

- Use `try...catch` for handling exceptions.

```javascript
try {
  let result = riskyOperation();
} catch (error) {
  console.log("Error occurred: " + error.message);
}
```