## Question 1
JavaScript executes synchronous code in which order?

A. Random order based on memory usage  
B. Line by line in order 
C. In reverse order  
D. Based on callback priority  

Correct Option: B

## Question 2
What is true about `setTimeout(fn, 0)`?

A. It runs `fn` immediately before all sync code  
B. It blocks the call stack for 0 ms  
C. It queues `fn` to run after the call stack is empty  
D. It guarantees execution at exactly 0 ms  

Correct Option: C

## Question 3
In this flow, what prints first?
`console.log('Start'); setTimeout(...); console.log('End');`

A. In Between  
B. End  
C. Start  
D. Timer ID  

Correct Option: C


## Question 4
The delay value in `setTimeout(fn, 1000)` represents:

A. Exact execution time after 1000 ms  
B. Minimum wait time before callback is eligible  
C. Maximum wait time  
D. CPU lock duration  

Correct Answer: B

## Question 5
Why does `await` not work as expected on a function that only uses `setTimeout` but does not return a Promise?

A. `await` works only in classes  
B. `setTimeout` returns resolved data directly  
C. There is no Promise for `await` to wait on  
D. `await` requires callbacks only  

## Question 6
What is a callback?

A. A function passed into another function to run later  
B. A synchronous loop construct  
C. A type of Promise state  
D. A built-in event loop API  

Correct Answer: A

## Question 7
When a callback is passed to an async function, it is usually executed:

A. Before the async task starts  
B. After the async task finishes  
C. During parsing  
D. Only if code is synchronous  

Correct Answer: B


## Question 8
Can a callback be called multiple times?

A. No, JavaScript prevents it at runtime  
B. Yes, if function logic invokes it multiple times  
C. Only in strict mode  
D. Only in browser JavaScript  

Correct Answer: B

## Question 9
What is a major risk of calling callbacks multiple times?

A. Faster memory allocation  
B. Duplicate side effects (e.g., multiple DB writes)  
C. Automatic Promise rejection  
D. Guaranteed deadlock  

Correct Answer: B

## Question 10
What best describes callback hell?

A. Flat and readable async structure  
B. Deeply nested callbacks that reduce readability and control  
C. Using `Promise.all` with many APIs  
D. Calling one synchronous function many times  

Correct Option: B

## Question 11
In callback hell, what is meant by inversion of control?

A. Main function fully controls all timing  
B. Called async functions control when next steps run  
C. Event loop gets disabled  
D. Functions become synchronous  

Correct Option: B


## Question 12
Which Promise state is valid?

A. WAITING  
B. BLOCKED  
C. FULFILLED  
D. EXECUTED  

Correct Option: C


## Question 13
What does a Promise represent?

A. A guaranteed immediate value  
B. A value that may be available now, later, or never  
C. A callback that always runs twice  
D. A synchronous operation wrapper only

Correct Option: B


## Question 14
What does `.then()` handle?

A. Rejected promise values only  
B. Resolved (fulfilled) promise values  
C. Syntax errors only  
D. Event loop scheduling only  

Correct Option: B


## Question 15
What is true about multiple `resolve()` calls inside the same Promise executor?

A. All resolve values are emitted  
B. Only the first settlement is used  
C. The last resolve wins  
D. Promise becomes pending again  

Correct Option: B



## Question 16
What does `Promise.all([...])` return immediately?

A. An array of final values  
B. A single Promise  
C. A callback function  
D. The first fulfilled value  

Correct Option: B


## Question 17
`Promise.all` behavior when one Promise rejects:

A. Ignores rejection and continues  
B. Resolves with partial success values  
C. Rejects immediately (fail-fast)  
D. Converts rejection to fulfillment  


Promise.all([P1, P2, P3]) --> Return P
P --> Resolve (If all P1, P2, P3 resolves)
  --> Reject (If any of them gets rejected)

Correct Option: C

What does `Promise.allSettled()` provide?

A. Only fulfilled values  
B. First settled value only  
C. Status/result for all input promises  
D. Only rejected reasons  
