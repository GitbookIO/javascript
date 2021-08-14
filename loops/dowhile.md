# Do...While Loop

The do...while statement creates a loop that executes a specified statement until the test condition evaluates to be false. The condition is evaluated after executing the statement.
Syntax for do... while is

```javascript
do {
  // statement
} while (expression);
```

Lets for example see how to print numbers less than 10 using `do...while` loop:

```javascript
var i = 0;
do {
  document.write(i + " ");
  i++; // incrementing i by 1
} while (i < 10);
```

> **_Note_**: `i = i + 1` can be written `i++`.

{% exercise %}
Using a do...while-loop, print numbers between less than 5.
{% initial %}
var i = 0;
{% solution %}
var i = 0;
do {
i++; // incrementing i by 1
} while (i < 5);
{% endexercise %}
