# Methods

Arrays can be manipulated, searched, and modified using a number of <strong>Methods</strong> that are built in to the javascript language.
  - A Method can be defined as a function that is stored in an object (Each javascript array is, in a deep technical sense, an object.)


ADD & REMOVE <strong>LAST</strong> ELEMENTS FROM AN ARRAY

- The PUSH method adds a new element to the end of any array.  What element? Whatever element you specify as the argument. ::smile::
```javascript
var array1 = [1, 2, 3];
array1.push(4); 
// RESULT: array = [1 , 2, 3, 4]; (The number 4 is PUSHED in)
```

- The POP method removes the last element of an array.  It does not require an argument.
```javascript
var array2 = [1, 2, 3, 4];
array2.pop(); 
// RESULT: array2 = [1 , 2, 3]; (The last item is POPPED off)
```

ADD & REMOVE <strong>FIRST</strong> ELEMENTS FROM AN ARRAY

- The UNSHIFT method adds new elements sequentially to the start, or front of the array.
```javascript
var array3 = [0, 5, 10];
array.unshift(-5); 
// RESULT: array3 = [-5 , 0, 5, 10];
```

- The SHIFT method removes the first element of the array and, as if replacing a vacuum in space, SHIFTS all the other elements to the left.
```javascript
var array4 = [5, 6, 7, 8];
array4.shift(); 
// RESULT: array4 = [6, 7, 8];
```

*BONUS!: You can add more than one element at once, and they will be added sequentially.
```javascript
var array3 = [0, 5, 10]; 
array3.unshift(-10, -5); 
// RESULT: array3 = [-10, -5 , 0, 5, 10];
```
