# For Loop

The easiest form of a loop is the for statement. This one has a syntax that is similar to an if statement, but with more options:

```javascript
for (condition; end condition; change) {
    // do it, do it now
}
```

Lets for example see how to execute the same code ten-times using a `for` loop:

```javascript
for (var i = 0; i < 10; i = i + 1) {
  // do this code ten-times
}
```

> **_Note_**: `i = i + 1` can be written `i++`.

{% exercise %}
Using a for-loop, create a variable named `message` that equals the concatenation of integers (0, 1, 2, ...) from 0 to 99.
{% initial %}
var message = "";
{% solution %}
var message = "";

for(var i = 0; i < 100; i++){
message = message + i;
}
{% validation %}
var message2 = ""

for(var i = 0; i < 100; i++){
message2 = message2 + i;
}
assert(message === message2);
{% endexercise %}
