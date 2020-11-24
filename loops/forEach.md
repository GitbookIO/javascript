# FOREACH
```js
var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
  //return or break won't work here
});

// expected output: "a"
// expected output: "b"
// expected output: "c"
```