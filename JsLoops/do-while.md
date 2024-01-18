# JavaScript Do-While Loop

The `do-while` loop in JavaScript is a control flow statement that repeatedly executes a block of code as long as a specified condition is true. The key difference between a `do-while` loop and other loop structures is that it always executes the block of code at least once before checking the condition.

## Syntax

```javascript
do {
  // code block to be executed
} while (condition);
```
## Use Cases
1) When you need to execute a block of code at least once, regardless of the initial condition.<br/>
2) When the loop's condition depends on the result of the code block's execution.

### Example
```javascript
let count = 0;

do {
  console.log(`Count: ${count}`);
  count++;
} while (count < 5);
```