# Indices

So you have your array of data elements, but what if you want to access a specific element? That is where indices come in. An **index** refers to a spot in the array. indices logically progress one by one, but it should be noted that the first index in an array is 0, as it is in most languages. Brackets [] are used to signify you are referring to an index of an array.

```javascript
// This is an array of strings
var fruits = ["apple", "banana", "pineapple", "strawberry"];

// We set the variable banana to the value of the second element of
// the fruits array. Remember that indices start at 0, so 1 is the
// second element. Result: banana = "banana"
var banana = fruits[1];
```

{% exercise %}
Define the variables using the indices of the array
{% initial %}
var cars = ["Mazda", "Honda", "Chevy", "Ford"]
var honda =
var ford =
var chevy =
var mazda =
{% solution %}
var cars = ["Mazda", "Honda", "Chevy", "Ford"]
var honda = cars[1];
var ford = cars[3];
var chevy = cars[2];
var mazda = cars[0];
{% validation %}
assert(honda === "Honda");
assert(ford === "Ford");
assert(chevy === "Chevy");
assert(mazda === "Mazda");
{% endexercise %}
