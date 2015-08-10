# Else

There is also an `else` clause that will be applied when the first condition isn’t true. This is very powerful if you want to react to any value, but single out one in particular for special treatment:

```javascript
var umbrellaMandatory;

if(country === 'England'){
    umbrellaMandatory = true;
} else {
    umbrellaMandatory = false;
}
```

The `else` clause can be joined with another `if`. Lets remake the example from the previous article:

```javascript
if(country === 'England') {
    ...
} else if(country === 'France') {
    ...
} else if(country === 'Germany') {
    ...
}
```


{% exercise %}
Fill up the value of `name` to validate the `else` condition.
{% initial %}
var name =

if (name === "John") {

} else if (name === "Aaron") {
    // Valid this condition
}
{% solution %}
var name = "Aaron";

if (name === "John") {

} else if (name === "Aaron") {
    // Valid this condition
}
{% validation %}
assert(name === "Aaron");
{% endexercise %}
