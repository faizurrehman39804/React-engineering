# React Functions — Student Notes

## 1. What Is a Function?

A **function** is a reusable block of code that performs a specific task.

```js
function greet() {
  console.log("Hello");
}

greet();
```

### Why do we use functions?

- Reuse code
- Organize code
- Perform specific tasks
- Receive data through parameters
- Return a result
- Handle user actions

---

# 2. Function Declaration

The traditional way to create a function.

```js
function add(a, b) {
  return a + b;
}

console.log(add(10, 20));
```

### Structure

```js
function functionName(parameters) {
  // code
}
```

---

# 3. Function Expression

A function can be stored inside a variable.

```js
const add = function (a, b) {
  return a + b;
};

console.log(add(10, 20));
```

The function does not have to be named.

```js
const greet = function () {
  console.log("Hello");
};
```

---

# 4. Arrow Function

Arrow functions are very common in modern JavaScript and React.

```js
const add = (a, b) => {
  return a + b;
};
```

### Short form

If there is only one expression:

```js
const add = (a, b) => a + b;
```

### No parameters

```js
const greet = () => {
  console.log("Hello");
};
```

### One parameter

Parentheses can usually be omitted for one parameter:

```js
const greet = (name) => {
  console.log(name);
};
```

---

# 5. Parameters and Arguments

### Parameters

Parameters are the variables defined by the function.

```js
function greet(name) {
  console.log(name);
}
```

`name` is a **parameter**.

### Arguments

Arguments are the actual values passed to the function.

```js
greet("Faiz");
```

`"Faiz"` is an **argument**.

---

# 6. Return

`return` sends a value back from a function.

```js
function add(a, b) {
  return a + b;
}

const result = add(5, 10);

console.log(result);
```

Output:

```text
15
```

### Important

A function can return:

- String
- Number
- Boolean
- Array
- Object
- Another function
- JSX in React

---

# 7. Function Without Return

```js
function greet() {
  console.log("Hello");
}
```

This function performs an action but does not return a value.

---

# 8. Function With Default Parameter

You can provide a default value.

```js
function greet(name = "Student") {
  console.log(`Hello ${name}`);
}

greet();
```

Output:

```text
Hello Student
```

---

# 9. Callback Function

A **callback** is a function passed to another function.

```js
function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function done() {
  console.log("Done");
}

greet("Faiz", done);
```

Callbacks are very important in React.

---

# 10. Array Methods and Functions

Functions are commonly used with array methods.

## map()

```js
const numbers = [1, 2, 3];

const result = numbers.map((number) => number * 2);

console.log(result);
```

## filter()

```js
const numbers = [1, 2, 3, 4];

const result = numbers.filter((number) => number > 2);

console.log(result);
```

## find()

```js
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Faiz" },
];

const user = users.find((user) => user.id === 2);

console.log(user);
```

---

# 11. Functions in React Components

React components are commonly written as functions.

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

This is called a **Functional Component**.

---

# 12. Arrow Function Component

The same component can be written using an arrow function.

```jsx
const App = () => {
  return <h1>Hello React</h1>;
};
```

Short version:

```jsx
const App = () => <h1>Hello React</h1>;
```

---

# 13. Event Handler Function

Functions are used to handle user events.

```jsx
function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Important

Correct:

```jsx
<button onClick={handleClick}>
```

Usually incorrect when you want it to run on click:

```jsx
<button onClick={handleClick()}>
```

`handleClick` passes the function.

`handleClick()` calls the function immediately while rendering.

---

# 14. Event Function With Event Object

React gives event information to the handler.

```jsx
function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return <input onChange={handleChange} />;
}
```

`event.target` refers to the element that triggered the event.

---

# 15. Passing Arguments to an Event Handler

Use an arrow function when you need to pass your own argument.

```jsx
function App() {
  const handleUser = (name) => {
    console.log(name);
  };

  return <button onClick={() => handleUser("Faiz")}>Click</button>;
}
```

---

# 16. Functions With Props

A function can be passed from a parent component to a child component.

### Parent

```jsx
function App() {
  const handleMessage = () => {
    console.log("Hello from parent");
  };

  return <Child onMessage={handleMessage} />;
}
```

### Child

```jsx
function Child({ onMessage }) {
  return <button onClick={onMessage}>Send Message</button>;
}
```

This is called **passing a callback/function through props**.

---

# 17. Passing Data From Child to Parent

The parent can give a function to the child.

```jsx
function Parent() {
  const handleData = (data) => {
    console.log(data);
  };

  return <Child onSend={handleData} />;
}
```

Child:

```jsx
function Child({ onSend }) {
  return <button onClick={() => onSend("Hello Parent")}>Send</button>;
}
```

The child calls the parent's function and sends data to it.

---

# 18. Function With useState

Functions are commonly used to update state.

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
    </>
  );
}
```

---

# 19. Functional State Update

When the new state depends on the previous state, use the functional form.

```jsx
setCount((previousCount) => previousCount + 1);
```

Example:

```jsx
const increase = () => {
  setCount((previousCount) => previousCount + 1);
};
```

---

# 20. Async Function

An `async` function can work with asynchronous operations such as API requests.

```js
async function getUsers() {
  const response = await fetch("/api/users");
  const data = await response.json();

  console.log(data);
}
```

Arrow version:

```js
const getUsers = async () => {
  const response = await fetch("/api/users");
  const data = await response.json();

  console.log(data);
};
```

---

# 21. Function With try/catch

Useful for handling errors in asynchronous code.

```js
const getUsers = async () => {
  try {
    const response = await fetch("/api/users");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
```

---

# 22. Higher-Order Function

A function is called a **higher-order function** when it:

1. Receives another function as an argument, or
2. Returns another function.

Example:

```js
function calculate(a, b, operation) {
  return operation(a, b);
}

const add = (a, b) => a + b;

console.log(calculate(10, 20, add));
```

---

# 23. Function Returning a Function

```js
function multiplyBy(number) {
  return function (value) {
    return value * number;
  };
}

const double = multiplyBy(2);

console.log(double(5));
```

Output:

```text
10
```

---

# 24. Anonymous Function

A function without a name is called an anonymous function.

```js
const greet = function () {
  console.log("Hello");
};
```

Another common example:

```js
setTimeout(function () {
  console.log("Hello");
}, 1000);
```

---

# 25. Named Function

A function has its own name.

```js
function greet() {
  console.log("Hello");
}
```

Named functions can be easier to identify when debugging.

---

# 26. IIFE — Immediately Invoked Function Expression

A function that runs immediately after it is created.

```js
(function () {
  console.log("Runs immediately");
})();
```

Modern React applications rarely need IIFEs.

---

# 27. Function Scope

Variables declared inside a function are normally available inside that function.

```js
function test() {
  const message = "Hello";

  console.log(message);
}

test();
```

This will not work outside the function:

```js
console.log(message);
```

---

# 28. Closure

A closure happens when an inner function remembers variables from its outer function.

```js
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
```

Closures are an important JavaScript concept for understanding React.

---

# 29. Function vs Arrow Function

| Function Declaration     | Arrow Function               |
| ------------------------ | ---------------------------- |
| `function add() {}`      | `const add = () => {}`       |
| Has its own `this`       | Does not have its own `this` |
| Can be hoisted           | Variable rules apply         |
| Common in traditional JS | Very common in modern React  |

---

# 30. Most Important Function Types to Know

### 1. Function Declaration

```js
function greet() {}
```

### 2. Function Expression

```js
const greet = function () {};
```

### 3. Arrow Function

```js
const greet = () => {};
```

### 4. Callback Function

```js
numbers.map((number) => number * 2);
```

### 5. Higher-Order Function

```js
function calculate(operation) {
  return operation();
}
```

### 6. Async Function

```js
const getData = async () => {};
```

### 7. React Functional Component

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

---

# React Function Rules to Remember

## Rule 1

React component names should start with a capital letter.

```jsx
function UserCard() {}
```

Not:

```jsx
function userCard() {}
```

## Rule 2

Event handlers are normally passed without `()`.

```jsx
<button onClick={handleClick}>
```

## Rule 3

Use an arrow function when passing an argument.

```jsx
<button onClick={() => deleteUser(id)}>
```

## Rule 4

Use `return` when you need to send a value back.

```js
const add = (a, b) => {
  return a + b;
};
```

## Rule 5

Remember the difference between a function and calling a function.

```js
handleClick; // function/reference

handleClick(); // calls the function
```

---

# Quick Revision

```text
Function
   ↓
Reusable block of code
   ↓
Can receive data
   ↓
Can perform an action
   ↓
Can return a value
```

### React

```text
Component
   ↓
Function
   ↓
JSX
   ↓
Props
   ↓
Events
   ↓
State
   ↓
Hooks
```

---

# Practice Tasks

## Task 1

Create a function that adds two numbers.

## Task 2

Create an arrow function that checks whether a number is even.

## Task 3

Create a React component with a button that logs `"Hello"`.

## Task 4

Create an input and display its value using an event handler.

## Task 5

Create a parent and child component and pass a function through props.

## Task 6

Create a counter using `useState` and a function to increase the counter.

## Task 7

Create an async function that fetches data from an API.

---

# Final Concept

Before moving deeper into React, make sure you understand:

- Function Declaration
- Function Expression
- Arrow Function
- Parameters
- Arguments
- Return
- Callback Function
- Higher-Order Function
- Async Function
- Event Handler
- Functions as Props
- Functional Components
- Functions with `useState`

# Commonly Used

`Event	Use`
`onClick	Button click`
`onDoubleClick	Double click`
`onChange	Input value change`
`onSubmit	Form submit`
`onFocus	Input focus`
`onBlur	Input se bahar jana`
`onMouseEnter	Mouse element par aana`
`onMouseLeave	Mouse element se bahar jana`
`onKeyDown	Keyboard key press`
`onKeyUp	Keyboard key release`
`onScroll	Page/element scroll`
`onCopy	Copy`
`onPaste	Paste`
