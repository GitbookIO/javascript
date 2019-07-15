# Immutable
Immutable object values cannot be changed once it's declared.
```js
const obj = {
  prop: 42
};

Object.freeze(obj); // this will freeze the values

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42
```