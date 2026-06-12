### Q21. Every execution context in JavaScript runs in which two phases?
Parsing Phase and Compilation Phase
Creation Phase and Execution Phase
Allocation Phase and Cleanup Phase
Hoisting Phase and Garbage Collection Phase




### Q23. What is the output of the following code, based on how the Call Stack works?
```js
function first() {
  second();
  console.log("first");
}

function second() {
  console.log("second");
}

first();
```

A. `first` then `second`
B. `second` then `first`
C. Only `first`
D. Only `second`



### Q24. What is the output of the following code?
```js
console.log(x);
var x = 10;
```
`10`
`undefined`
`ReferenceError`
`null`










### Q25. What is the output of the following code?
```js
greet();

function greet() {
  console.log("Hello");
}
```
`ReferenceError`
`undefined`
`Hello`
`TypeError`





### Q33. Consider the following  implementation:
```js
function memo(fn) {
  const cache = {};
  return function memoizedResponse(p1, p2, p3) {
    const key = JSON.stringify([p1, p2, p3]);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(p1, p2, p3);
    cache[key] = result;
    return result;
  };
}

const memoAdd = memo((a, b, c) => a + b + c);
memoAdd(2, 3, 4);
memoAdd(2, 3, 4);
```

Which concept makes this memoization possible by allowing `cache` to persist across calls to `memoAdd`?
A. Hoisting of the `cache` variable to the global scope
B. A closure preserving the lexical environment containing `cache`
C. The `this` binding of `memoizedResponse`
D. Garbage collection refusing to clean up `cache`


### Q34. How is the value of `this` determined for a regular (non-arrow) function?
A. Lexically, based on where the function is written in the source code
B. At call time, based on how and by whom the function is called
C. It is always bound to the global object regardless of context
D. It is always bound to the function itself


### Q35. What is the output of the following code (in non-strict mode, browser)?
```js
const obj = {
  name: "Jay",
  greet: function () {
    console.log(this.name);
  },
};

obj.greet();
const grt = obj.greet;
grt();
```
A. `Jay` then `Jay`
B. `Jay` then `undefined` (or empty, since `this` becomes `window`)
C. `undefined` then `Jay`
D. `ReferenceError` on the second call

------------------------------------------------------

### Q36. Which statement about arrow functions and `this` is correct?
A. Arrow functions have their own `this` based on how they are called
B. Arrow functions do not have their own `this`; they capture `this` from the lexical scope where they are defined
C. Arrow functions always bind `this` to the global object
D. Arrow functions always bind `this` to `undefined`


### Q38. What is the output of the following code?
```js
const obj = {
  name: "Jay",
  greet: function () {
    const innerArrow = () => {
      console.log(this.name);
    };
    innerArrow();
  },
};

obj.greet();
```

A. `undefined`
B. `Jay`
C. `ReferenceError`
D. `window`

### Q40. Which statement best summarizes the difference between lexical scope and `this`?
A. Lexical scope and `this` are the same thing in JavaScript
B. Lexical scope defines where a function was written (variable access); `this` defines who called the function at runtime
C. Lexical scope defines who called the function; `this` defines where the function was written
D. Both are determined purely at runtime based on the call site


7. In Semantic Versioning (`major.minor.patch`), which part usually indicates breaking changes?
   - A) Patch
   - B) Minor
   - C) Major
   - D) Build


8. What does a patch version update usually represent?
   - A) Breaking API redesign
   - B) Backward-compatible bug fixes
   - C) New product launch
   - D) Migration to ESM only



9. What is the main role of `package-lock.json`?
   - A) Define project scripts and metadata
   - B) Record exact dependency tree for deterministic installs
   - C) Replace `node_modules`
   - D) Configure ESLint rules



10. Which statement best describes `package.json`?
    - A) It stores only transitive dependency versions
    - B) It is auto-generated and never edited
    - C) It defines project metadata, dependencies, and scripts
    - D) It is required only for frontend projects