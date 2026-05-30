#### Lexical Scope
* Lexical ==> Besed on where it is written (static)

A function access variables from where the scope was created. 
Function remembers the scope where it was created. This remembered relationship is called lexical scope.


- Scope lives in the Heap
- Scope are cahined

```
function outer() {
  let name = "Rahul";

  function inner() {
    console.log(name);
  }

  inner();
}

outer();
```


```
inner() Scope
    ↓
outer() Scope
    ↓
Global Scope
```



