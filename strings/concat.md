# Concatenation

Concatenation involves adding two or more strings together, creating a larger string containing the combined data of those original strings. This is done in JavaScript using the **+** operator.

```js
var bigStr = "Hi " + "JS strings are nice " + "and " + "easy to add";
```

{% exercise %}
Add up the different names so that the `fullName` variable contains John's complete name.
{% initial %}
var firstName = "John";
var lastName = "Smith";

var fullName =
{% solution %}
var firstName = "John";
var lastName = "Smith";

var fullName = firstName + " " + lastName;
{% validation %}
assert(fullName === 'John Smith');
{% endexercise %}
