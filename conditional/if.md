# Condition If

The easiest condition is an if statement and its syntax is `if(condition){ do this … }`. The condition has to be true for the code inside the curly braces to be executed. You can for example test a string and set the value of another string dependent on its value:

```javascript
var country = "France";
var weather;
var food;
var currency;

if (country === "England") {
  weather = "horrible";
  food = "filling";
  currency = "pound sterling";
}

if (country === "France") {
  weather = "nice";
  food = "stunning, but hardly ever vegetarian";
  currency = "funny, small and colourful";
}

if (country === "Germany") {
  weather = "average";
  food = "wurst thing ever";
  currency = "funny, small and colourful";
}

var message =
  "this is " +
  country +
  ", the weather is " +
  weather +
  ", the food is " +
  food +
  " and the " +
  "currency is " +
  currency;
```

**Note:** Conditions can also be nested.

{% exercise %}
Fill up the value of `name` to validate the condition.
{% initial %}
var name =

if (name === "John") {

}
{% solution %}
var name = "John";

if (name === "John") {

}
{% validation %}
assert(name === "John");
{% endexercise %}
