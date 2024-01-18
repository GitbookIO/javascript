# JavaScript For Loop 

## Description

The JavaScript `for` loop is a control flow statement that allows you to execute a block of code repeatedly. It consists of three optional expressions: initialization, condition, and iteration. The loop continues to execute as long as the condition is true. Here's the basic syntax:

```javascript
for (initialization; condition; iteration) {
  // code to be executed
}
```
## Features
Initialization: Declare and initialize a loop variable. <br/>
Condition: Specify the condition to continue the loop. <br/>
Iteration: Define how the loop variable changes after each iteration. <br/>
## Example
  ### Simple Numeric Loop
  ```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

```
This will output:
```
0
1
2
3
4
```
### Looping Through an Array
```javascript
const fruits = ['apple', 'orange', 'banana'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```
This will output:
```
apple
orange
banana
```
### Backward Loop
```javascript
for (let i = 5; i > 0; i--) {
  console.log(i);
}
```
This will output:
```
5
4
3
2
1
```