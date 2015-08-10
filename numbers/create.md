# Creation

Creating a number is easy, it can be done just like for any other variable type using the ```var``` keyword.

Numbers can be created from a constant value:

```
// This is a float:
var a = 1.2;

// This is an integer:
var b = 10;
```

Or from the value of another variable:

```
var a = 2;
var b = a;
```

{% exercise %}
Create a variable `x` which equals `10` and create a variable `y` which equals `a`.
{% initial %}
var a = 11;
{% solution %}
var a = 11;

var x = 10;
var y = a;
{% validation %}
assert(x === 10 && y === a);
{% endexercise %}
