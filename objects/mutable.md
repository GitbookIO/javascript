# Mutable
The difference between objects and primitive values is that **we can change objects**, whereas primitive values are immutable.
```js
var myPrimitive = "first value";
    myPrimitive = "another value";
 // myPrimitive now points to another string.
var myObject = { key: "first value"};
    myObject.key = "another value";
 // myObject points to the same object.
```
