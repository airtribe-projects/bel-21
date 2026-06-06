

let name = "Rahul";

function greet() {
  let message = "Hello";
  console.log(message);
}

greet();

/* Execution Context: Environment to manage code execution
* memory for variables/function
* information about the current execution
* 2 types of Execution Context: 
    * GEC (Global Execution Context) --> Created once when the program starts
    * FEC (Function Execution Context) --> Created on every function invocation
*/


/* How is the execution context evaluated
    There are 2 phases
    - Creation Phase
        - name 
        - greet -> keep the function in memory
    - Execution Phase
        - Name: Rahul
        - Executing greet()

Mental Model:
Program Starts
    ↓
Global Execution Context Created
    ↓
Creation Phase Happens
    ↓
Execution Phase Happens
    ↓
Function Called
    ↓
New Function Execution Context Created
    ↓
Creation Phase
    ↓
Execution Phase


*/


let name = "Rahul";

function greet() {
  let message = "Hello";
  name = "Ahmed"; 
  console.log(message);
  console.log(name);
  welcome()
}

function order() {
  let message = "Hello";
  console.log(message);
}

function welcome() {
  let message = "Hello";
  console.log(message);
}


greet();
order();