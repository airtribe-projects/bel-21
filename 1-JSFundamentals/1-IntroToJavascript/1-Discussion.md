What is Javascript?
JavaScript (JS) is a lightweight *interpreted* (or *just-in-time compiled*) programming language with *first-class functions*. While it is most well-known as the scripting *language for Web* pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a *prototype-based*, *garbage-collected*, *dynamic language*, supporting multiple paradigms such as imperative, functional, and object-oriented.



### Intrepreted Language
Instructions are passed line by line 

#### Advantage 
- Easy to test and modify
- Great for scripting and rapid dev
- No separate builkd process

### Disdvantage
- Errors during runtime
- Slower execution 


### Compiled Language
Instructios are compiled and passed to the Robot.


### JIT
```
for (let i = 0; i < 1000000; i++) {
  sum += i; // This line would be interpreted 1M times // With JIT it would be interpreted once and reused
}
```
<!-- Internal Implementation of JIT -->
sum += i --> //XYZ
Line26 --> XYZ



#### First Class Function

Properties: 
- Can be stored in a variable
```
    const fn = function(a, b) => a+b;
```

- Passed into another function
- returned from another function
- Stored inside objects or arrays

Are Errors first class? Yes
- Arrays are FC
- Objects are first class

Anything that you know is not first class?
- Constructors
- Statments
- Operators
```
let response = if (x> 5) return 5;


```
### Language of Web
1995 (Netscape), Brenden Eich
10 days

- Buttons reacting instanatabneously
- Animations
- Live chats

### prototype - based / protypal inheritence
"Why create a separate class blueprint system at all?" instead objects can directly inherit from other objects. 

You can directly instantiate an object without defining class. 

```
let x = {};

x.toString();
```

Everything by default inherits from `Object.prototype`

### Prototype chain

```
let animal = {
  eats: true
};

let dog = {
  bark: true
};

Object.setPrototype(dog, animal);
```

Now the chain becomes: 
```
null
  ↑
Object.prototype
  ↑
animal
  ↑
dog
``` 

### Garbage Collected

Want to create an array of integers with 10 values 
Integers are 4 bytes

Memory Leak 
OOM kiler

- You never need to worry about Memory allocation and deallocation

Would you never have Memory Leak in JS? 
There would be logical memory Leaks? 

```
let cache = [];

setInterval(() => {
  cache.push(new Array(1000000));
}, 1000);
```

### Dynamic Language

The language is flexible and adaptive while running.

--> Dynamic Typed Language
--> Types are associated with values not associated with variables

let x = 5