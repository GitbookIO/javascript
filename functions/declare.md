# Declaring Functions

Functions, like variables, must be declared. Let's declare a function `double` that accepts an **argument** called `x` and **returns** the double of x :

```javascript
function double(x) {
    return 2 * x;
}
```

>*Note:* the function above **may** be referenced before it has been defined.

Functions are also values in JavaScript; they can be stored in variables (just like numbers, strings, etc ...) and given to other functions as arguments :

```javascript
var double = function(x) {
    return 2 * x;
};
```

>*Note:* the function above **may not** be referenced before it is defined, just like any other variable.

{% exercise %}
Declare a function named `triple` that takes an argument and returns its triple.
{% solution %}
var triple = function(x) {
    return x * 3;
}
{% validation %}
assert(triple);
assert(triple(4) === 12);
assert(triple(10) === 30);
{% endexercise %}
