# JavaScript For...In Loop

The `for...in` loop in JavaScript is used to iterate over the properties of an object. It is particularly useful when you want to loop through the keys (property names) of an object.

## Syntax

```javascript
for (variable in object) {
  // code to be executed
}
```
```variable:``` A variable that will be assigned the property name on each iteration. <br/>
```object:``` The object whose enumerable properties are iterated.
## Note
The for...in loop iterates over enumerable properties, including inherited ones. <br/>
It is recommended to use caution when using for...in with arrays, as it may iterate over array methods and not just array elements.

### Example
```javascript
// Sample object
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2022
};

// Using for...in loop to iterate over object properties
for (let key in car) {
  console.log(key + ': ' + car[key]);
}

```