# Length

Arrays have a property called length, and it's pretty much exactly as it sounds, it's the length of the array.

```javascript
var array = [1, 2, 3];

// Result: l = 3
var l = array.length;
```

{% exercise %}
Define the variable a to be the number value of the length of the array
{% initial %}
var array = [1, 1, 2, 3, 5, 8];
var l = array.length;
var a =
{% solution %}
var array = [1, 1, 2, 3, 5, 8];
var l = array.length;
var a = 6;
{% validation %}
assert (a === 6)
{% endexercise %}
