# Variables

The first step towards really understanding programming is looking back at algebra. If you remember it from school, algebra starts with writing terms such as the following.

```
3 + 5 = 8
```

You start performing calculations when you introduce an unknown, for example x below:

```
3 + x = 8
```

Shifting those around you can determine x:

```
x = 8 - 3
-> x = 5
```

When you introduce more than one you make your terms more flexible - you are using variables:

```
x + y = 8
```

You can change the values of x and y and the formula can still be true:

```
x = 4
y = 4
```

or

```
x = 3
y = 5
```

The same is true for programming languages. In programming, variables are containers for values that change. Variables can hold all kind of values and also the results of computations. Variables have a name and a value separated by an equals sign (=). Variable names can be any letter or word, but bear in mind that there are restrictions from language to language of what you can use, as some words are reserved for other functionality.

Let's check out how it works in Javascript, The following code defines two variables, computes the result of adding the two and defines this result as a value of a third variable.

```js
var x = 5;
var y = 6;
var result = x + y;
```

In JavaScript, you can declare variables using var, let, or const. Each of these keywords has slightly different behaviors, and their usage depends on the scope and mutability requirements.

- Use `var` if you need function-scoping (though it's less commonly used in modern JavaScript).
```js 
function exampleVar() {
  if (true) {
    var x = 5;
    console.log(x); // Outputs 5
  }
  console.log(x); // Outputs 5
  x = 10; // Reassigns x
  console.log(x); // Outputs 10
}

exampleVar();
```


- Use `let` for variables that need to be reassigned and have block scope.
```js
function exampleLet() {
  if (true) {
    let y = 20;
    console.log(y); // Outputs 20
  }
  // console.log(y); // ReferenceError: y is not defined
  // y = 30; // Error: y is not defined
}

exampleLet();

```

- Use `const` for variables that should not be reassigned and also have block scope.
```js
function exampleConst() {
  const z = 30;
  console.log(z); // Outputs 30
  // z = 40; // Error: Assignment to a constant variable
  // const w; // Error: Missing initializer in const declaration
}

exampleConst();

```