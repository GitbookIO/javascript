#push

The push method add one or more elements to the end of the original array and returns the new length of the array.
It mutates the original array.

```javascript
let arr = [45, 96, 73, 58, 23]

// arr: [45, 96, 73, 58, 23, 10]
// Result: len = 6 
let len = arr.push(10)
```

{% exercise %}
Use the push method to insert 23 at the end of the array RMS and calculate new length of RMS.
{% initial %}
let RMS = [ 100, 20, 55, 87, 91]
let len =
{% solution %}
let RMS = [ 100, 20, 55, 87, 91]
let len = RMS.push(23);
{% validation %}
assert (len === 6)
{% endexercise %}

