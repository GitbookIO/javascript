# concat()

Lets say you have two Arrays that you would like combined into a single Array.
there is a simple method we can use called the **concat()** method.

This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.

### Example

**Join two Arrays**

```Javascript
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);

console.log(children);

//output : ["Cecilie", "Lone", "Emil", "Tobias", "Linus"];
```

**Join three Arrays**

```Javascript
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var kai = ["Robin"];
var children = hege.concat(stale, kai);

console.log(children);

//output : ["Cecilie", "Lone", "Emil", "Tobias", "Linus", "Robin"];
```

### Exercise

Define a varible called **exampleArray** and assign it the value of ```fruits``` and ```vegetables``` using the ```concat()``` method:

```Javascript
var fruits = ["Apples", "Mangoes"];
var vegetables = ["Pumpkins", "Gem Squash"];
```

### Solution

```Javascript
var exampleArray = fruits.concat(vegetables);
```