# Indices

So you have your array of numbers and you want to double the values. Intead you use an for/while loop, you can use map to do it.
Let's se:

```javascript
// You have an array of numbers
const numbers = [2, 4, 6, 8];

// Map method returns to you a new array with the results and preserves the old one. So, we need to set another var/let or cost to the new array.
const numbersTimesTwo = numbers.map(number => number * 2);

//console.log(numbersTimesTwo) will return => [4, 8, 12, 16]
```
