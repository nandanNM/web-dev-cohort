// What is hoisting and TDZ?
// The TDZ ensures that variables are accessed only after their declaration,
// const / let  it is also hoist  but it is TDZ
// preventing potential issues. On the other hand,
// hoisting allows variables declared with var to be accessed before their declaration,  var / function and all of is hoisting
// but with the caveat of an initial value of undefined.

x = 30;
console.log(`Value of x 1 is ${x}`); // 30
var x = 10;
console.log(`Value of x 2 is ${x}`); // 10

// Two Phases of Execution Context:
// Memory Phase: In this phase, JavaScript scans the code to allocate memory for variables.
//  All variables declared are initialized to undefined.
// Code Phase: JavaScript executes the code line by line, where the variables are assigned their respective values.

console.log("Global Execution Context starts");
var globalVariable = "I am a global variable";
globalFuncation();
function globalFuncation() {
  // funcation is also part of variable it value not undefined it value shoud be a funcation eith the body
  // every funcation have theare own local execution context and memory Phase and exicution Phase of funcation
  // if any variable is declared inside funcation it is called local variable
  // then the value of local variable is undefinedcin memory phase of a funcation
  // and in code phase the value of local variable is assigned
  console.log("Inside global funcation");
}
console.log(globalVariable);
// i can call the funcation anywhere in the code
// it will not throw any error
//  thats wahy ? because the funcation is part of variable and the variable is part of global execution context
//  so at global execution context the funcation in memory phase are initialized to a funcation with empty body
// so in code phase i call call the funcation at fast of the funcation is declared

globalFuncation();
console.log("Global Execution Context ends");

var globalFuncation = function () {
  // funcation is also part of variable it value not undefined it value shoud be a funcation eith the body
  // so at this point the globalFuncation in memory phase are asin by a undifined value
  // so i dont call this funcation anywhere / before the declaration
  console.log("Inside global funcation");
};

console.log("Global Execution Context starts"); // run fast

setTimeout(() => {
  console.log("This is from the Task Queue (setTimeout)");
}, 0);
console.log("Global Execution Context ends"); // run second

// What Exactly Is a Temporal Dead Zone in JavaScript?
// A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.
