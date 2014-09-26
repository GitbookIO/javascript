# Higher Order Functions

Higher order functions are functions that manipulate other functions.
For example, a function can take other functions as arguments and/or produce a function as its return value.
Such *fancy* functional techniques are powerful constructs available to you in JavaScript and other high-level languages like python, lisp, etc.

We will now create two simple functions, `add_1` and `double`, and a higher order function called `map`. `map` will accept two arguments, `func` and `list` (its declaration will therefore begin `map(func,list)`), and return an array. `func` (the first argument) will be a function that will be applied to each of the elements in the array `list` (the second argument).

//it is better to have add_1 first and than add2 
//just for better understanding
```javascript
// Define two simple functions
var add_1 = function(x) 
{
    return x + 2;
};
var double = function(x) 
{
    return 2 * x;
};

// map is cool function that accepts 2 arguments:
//  func    the function to call
//  list    a array of values to call func on
var map = function(func, list) 
{
    var output=[];              // output list
    for(idx in list) 
    {
        output.push( func(list[idx]) );
    }
    return output;
}


// We use map to apply a function to an entire list
// of inputs to "map" them to a list of corresponding outputs
map(add_1, [5,6,7]) // => [7, 8, 9]
map(double, [5,6,7]) // => [10, 12, 14]
```

The functions in the above example are simple. However, when passed as arguments to other functions, they can be composed in unforeseen ways to build more complex functions.

For example, if we notice that we use the invocations `map(add_1, ...)` and `map(double, ...)` very often in our code, we could decide we want to create two special-purpse list processing functions that have the desired operation baked into them. Using function composition, we could do this as follows:

```javascript
process_add_1 = function(list) {
    return map(add_1, list);
}
process_double = function(list) {
    return map(double, list);
}
process_add_1([5,6,7]) // => [7, 8, 9]
process_double([5,6,7]) // => [10, 12, 14]
```

Now let's create a function called `buildProcessor` that takes a function `func` as input
and returns a `func`-processor, that is, a function that applies `func` to each input in list.

```javascript
// a function that generates a list processor that performs
var buildProcessor = function(func) {
    var process_func = function(list) {
        return map(func, list);
    }
    return process_func;
}
// calling buildProcessor returns a function which is called with a list input


// using buildProcessor we could generate the add_2 and double list processors as follows:
process_add_1 = buildProcessor(add_1);
process_double = buildProcessor(double);

process_add_1([5,6,7]) // => [7, 8, 9]
process_double([5,6,7]) // => [10, 12, 14]
```


Let's look at another example.
We'll create a function called `buildMultiplier` that takes a number `x` as input and returns a function that multiplies its argument by `x` :

```javascript
var buildMultiplier = function(x) {
    return function(y) {
        return x * y;
    }
}

var double = buildMultiplier(2);
var triple = buildMultiplier(3);

double(3); // => 6
triple(3); // => 9
```

---

Define a function named `negate` that takes `add1` as argument and returns a function, that returns the negation of the value returned by `add1`. (Things get a bit more complicated ;) )

```js
var add2 = function (y) {
    return y + 1;
};

var negate = function(func) {
    // TODO
};

// Should return -6
// Because (5+1) * -1 = -6
negate(add2)(5);

```

```js
var add2 = function (x) {
    return x + 1;
}

var negate = function(func) {
    return function(x) {
        return -1 * func(x);
    }
}

negate(add2)(5);
```

```js
assert(negate(add2)(5) === -6);
```

---
