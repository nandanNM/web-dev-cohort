// closer
// Lexical scope, also known as static scope, refers to the region in the source code where
//  a variable is defined and determines where that variable can be accessed.
//  In JavaScript, lexical scope is established at the time of writing the code,
// based on the physical structure of the code blocks.
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
// what is closer

let counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

let counter1 = createCounter();

console.log(counter1());

// In JavaScript, a "closure" is a function that retains access to its lexical scope, even when the function is executed outside that scope. This means that a closure can remember and access variables from the scope in which it was created, even after that scope has finished executing.

// In your code, the createCounter function demonstrates a closure. Here's how it works:

// createCounter is a function that initializes a variable count to 0.
// It returns an inner function that increments count and returns the new value of count.
// When createCounter is called, it returns the inner function, which retains access to the count variable even after createCounter has finished executing.
function createCounter() {
  let count = 0; // `count` is a variable in the lexical scope of `createCounter`
  return function () {
    // This inner function forms a closure
    count++; // It retains access to `count` even after `createCounter` has finished executing
    return count; // It can modify and return the value of `count`
  };
}

// let counter = createCounter(); // `counter` is now a function that forms a closure over `count`

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// let counter1 = createCounter(); // `counter1` is a new function with its own closure over a new `count` variable

// console.log(counter1()); // 1
// In this example, counter and counter1 are both closures that have their own separate count variables. Each call to createCounter creates a new closure with its own independent state.

// It's important to note that closures are a powerful feature in JavaScript, and they can be used to create complex and dynamic behavior in your code.
