# Slice

You have an array of elements and you want to access or require elements upto a certain index. So rather than looping in down to the whole array, we can use inbuilt **slice** method. This method consists of 2 optional parameters (start and end). Let us consider some examples to understand more. 

**WITH ONE PARAMTER**
```javascript
//An array
var countries = ['India', 'United States of America', 'United Kingdom', 'Canada', 'Australia'];
    
//console.log to see the effect
console.log(countries.slice(2));
    
//Output will be -  ['United Kingdom', 'Canada', 'Australia'];
```

When you provide a single parameter in slice method, it will start picking the elements from that parameter (index starts from zero) and prints till the end.

Now let's see what happend if we pass **BOTH THE PARAMETERS**

```javascript
console.log(countries.slice(1,4));
//Output:  ['United States of America', 'United Kingdom', 'Canada'];
```

When you pass both the paramter (start and end), slice will start picking elements from 'start' index and prints till 'end-1' index. As you can see from above example (it prints countries from index 1 to 3).

As I said, these both parameters are **optional**, what would happen if you do not pass any parameter.
```javascript
console.log(countries.slice());
//Output: ['India', 'United States of America', 'United Kingdom', 'Canada', 'Australia'];
```

In that case, it will print your whole array.

You can assign a new variable to store the results from slice.
```javascript
var newArray = countries.slice(1,4);
console.log(newArray);
//Output: ['United States of America', 'United Kingdom', 'Canada'];
```
