# Comparing the loops

If you have read about the for and while loops, you will discover that a while loop is much the same as a for loop, with some minor differences.
Let's see a sample case and write the for, while and do/while loops for the same case.

Let's consider the following array:

```javascript
var cars = ["BMW", "Volvo", "Saab", "Ford"];
```

- ### For loop
The loop in this example uses a for loop to collect the car `names` from the `cars` array in the `text` string:

```javascript
text = "";

for(var i = 0; i < 4; i = i + 1){       // We use the condition `i<4` as we know `cars` has 4 objects
  text = text + cars[i] + " ";          // Adds the name in the string and a space " " character after every name
}

cout<<text;


// Output will be:
// BMW Volvo Saab Ford
```

- ### While loop
The loop in this example uses a while loop to collect the car `names` from the `cars` array in the `text` string:

```javascript
text = "";
var i = 0;

while(i<4){                             // We use the condition `i<4` as we know `cars` has 4 objects
  text = text + cars[i] + " ";          // Adds the name in the string and a space " " character after every name
  i++;
}

cout<<text;


// Output will be:
// BMW Volvo Saab Ford
```

- ### Do/While loop
The loop in this example uses a while loop to collect the car `names` from the `cars` array in the `text` string:

```javascript
text = "";
var i = 0;

do {                            
  text = text + cars[i] + " ";          // Adds the name in the string and a space " " character after every name
  i++;
} while(i<4)                            // We use the condition `i<4` as we know `cars` has 4 objects

cout<<text;


// Output will be:
// BMW Volvo Saab Ford
```
