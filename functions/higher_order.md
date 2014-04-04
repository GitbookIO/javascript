# Higher Order Functions

Higher order functions, are functions that accept other functions as arguments or return a function it generates.

This is a *fancy* and extremely powerful construct available in JavaScript and other high-level languages (python, lisp, ...)

Now lets pass our `double` function as an argument to another function called `transform` :

```javascript
// Our double function
var double = function(x) {
    return 2 * x;
};

// A function that accepts two arguments
// first the function to call
// second the value to call it on
var transform = function(func, value) {
    return func(value);
}

// This does the same as double(3)
transform(double, 3);
```

The above example was intentionally simple, having functions as values grants enormous flexibility and allows for many powerful constructs.

Now lets create a function called `buildMultiplier` that takes a number `x` and returns a function that multiplies it's argument by `x` :

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

Define a function named `negate` that takes `add1` as argument and returns a function, that returns the opposite of the value returned by `add`. (Things get a bit more complicated ;) )

```js
var add1 = function (x) {
    return x + 1;
};

var negate = function(func) {
    // TODO
};

// Should return -6
// Because (5+1) * -1 = -6
negate(add1)(5);

```

```js
var add1 = function (x) {
    return x + 1;
}

var negate = function(func) {
    return function(x) {
        return -1 * func(x);
    }
}

negate(add1)(5);
```

```js
assert(negate(add1)(5) === -6);
```

---
