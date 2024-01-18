# JavaScript for...of Loop README

## Description

The `for...of` loop in JavaScript is used to iterate over iterable objects, such as arrays, strings, maps, sets, and more. It provides a concise and readable syntax for iterating through the elements of a collection.

## Syntax

```javascript
for (variable of iterable) {
  // code to be executed
}
```
``` variable: ``` A variable to represent the current element of the iterable in each iteration. <br/>
``` iterable: ``` The object or array-like structure to be iterated over.
### Example
#### Iterating over an Array
```javascript
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}

```
