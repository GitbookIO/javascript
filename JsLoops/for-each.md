# JavaScript forEach

## Description
The `forEach` method is used to iterate over elements in an array and execute a provided function once for each array element.

## Syntax
```javascript
array.forEach(callback(currentValue [, index [, array]]) {
  // Your code here
}, thisArg);
```
### Parameters
```callback:``` Function to execute for each element. <br/>
```currentValue:``` The current element being processed in the array. <br/>
```index (optional):``` The index of the current element being processed in the array. <br/>
```array (optional):``` The array forEach was called upon. <br/>
```thisArg (optional):``` Object to use as this when executing the callback. <br/>

## Example
```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num, index) {
  console.log(`Element at index ${index}: ${num}`);
});
```
Output :
```
Element at index 0: 1
Element at index 1: 2
Element at index 2: 3
Element at index 3: 4
Element at index 4: 5
```