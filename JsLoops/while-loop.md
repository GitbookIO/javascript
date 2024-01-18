# JavaScript While Loop

The JavaScript `while` loop is used to repeatedly execute a block of code as long as a specified condition is true. It is one of the fundamental control flow structures in JavaScript. <br/>
The while loop provides a flexible way to repeat a block of code based on a condition. 

## Syntax

```javascript
while (condition) {
  // code to be executed
}
```
### Example
```javascript
let count = 0;

while (count < 5) {
  console.log(`Current count: ${count}`);
  count++;
}

console.log("Loop finished!");
```
## Infinite Loop
when using while loops to avoid creating infinite loops. An infinite loop occurs when the condition always evaluates to true, leading to continuous execution of the loop.
```javascript
// Caution: Infinite Loop
while (true) {
  console.log("This is an infinite loop!");
}
```