Hoisting is JavaScript’s behavior of registering variables and functions in memory before execution starts.

<!-- Misconception -->
- Javascript moves variables to the top --> 


```
console.log(x);

var x = 10;
```



let  
```
let drinkingAge = 18;

if (country=="India") {
    drinkingAge = 18
} else {
    drinkingAge = 21
}
```

``
const TAX = 18;
 TAX = 21 --> Give me an error
```



### Mental Map

```
Creation Phase
      ↓
Variables and functions registered
      ↓
Execution Phase starts
      ↓
Code runs line-by-line
``