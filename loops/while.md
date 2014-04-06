# While Loop

While Loops can execute a block of code as long as a specified condition is true.

```javascript
while(condition){
    // do it as long as condition is true
}
```

For example, The loop in this example will continue to run as long as the variable i is less than 5:

```javascript
var i = 0, x = "";
while (i < 5) {
    x = x + "The number is " + i;
    i++;
}
```

The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true:

```javascript
do {
    // code block to be executed
} while (condition);
```


**Note**: Be careful to avoid infinite looping if the condition is always true!


---

Create using a while-loop a variable named `message` which equals the concatenation of integers (0, 1, 2, ...) as long as its length (`message.length`) is less than 100.

```js
var message = "";
```

```js
var message = "";
var i = 0;

while (message.length < 100) {
    message = message + i;
    i = i + 1;
}
```

```js
var message2 = "";
var i2 = 0;

while (message2.length < 100) {
    message2 = message2 + i2;
    i2 = i2 + 1;
}
assert(message === message2);
```

---
