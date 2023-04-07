<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    
  </head>
  <body>
    <h1>Arrow Functions Tutorial</h1>
    <h2> Beginner Level </h2>
    <h3>Concept: <code>Arrow functions</code></h3>
    <p>
      Arrow functions are a shorthand way to write functions in JavaScript. They
      were introduced in ES6 and are often used in modern JavaScript code.
    </p>
    <pre><code class="language-javascript">const greeting = () => {
          console.log("Hello, world!");
}
greeting();</code></pre>
    <p>
      In this example, greeting is an arrow function that takes no arguments and
      logs the message "Hello, world!" to the console. The function is then
      called with greeting().
    </p>
    <h3>Concept: <code>Arrow function syntax</code></h3>
    <p>
      Arrow functions have a concise syntax that can make them easier to read
      and write. They use the => operator instead of the function keyword.
    </p>
    <pre><code class="language-javascript">const add = (a, b) => a + b;
console.log(add(2, 3));</code></pre>
    <p>
      In this example, add is an arrow function that takes two arguments, a and
      b, and returns their sum. The function is then called with add(2, 3) and
      logs the result, 5, to the console.
    </p>
    <h2> Intermediate Level</h2>
    <h3>Concept: <code>Arrow functions and this</code></h3>
    <p>
      Arrow functions have a different behavior for the this keyword compared to
      regular functions. When used inside an object method, arrow functions
      preserve the this context of the surrounding scope.
    </p>
    <pre><code class="language-javascript">const person = {
          name: "Alice",
          greet: function() {
          console.log(`Hello, my name is ${this.name}.`);
      },
greetArrow: () => {
              console.log(`Hello, my name is ${this.name}.`);
          }
      }
person.greet(); // "Hello, my name is Alice."
person.greetArrow(); // "Hello, my name is undefined."</code></pre>
    <p>
      In this example, person is an object with two methods, greet and
      greetArrow. The greet method uses a regular function and correctly logs
      the name property of the person object. The greetArrow method uses an
      arrow function and logs undefined because the this keyword refers to the
      global this value, which does not have a name property.
    </p>
    <h3>Concept: <code>Implicit return in arrow functions</code></h3>
    <p>
      Arrow functions with a single expression can have an implicit return
      statement, meaning that the return keyword is not required.
    </p>
    <pre><code class="language-javascript">const double = (num) => num * 2;
console.log(double(5)); // 10</code></pre>
    <p>
      In this example, double is an arrow function that takes a num argument and
      returns its value multiplied by 2. The function is called with double(5)
      and logs the result, 10, to the console.
    </p>
    <h2> Expert Level </h2>
    <h3><strong>Concept: <code>Arrow functions and higher-order functions</code></strong></h3>
    <p>
      Arrow functions can be used with higher-order functions, such as map,
      filter, and reduce, to perform complex operations on arrays.
    </p>
    <h2><strong>Example:</strong></h2>
    <pre><code class="language-javascript">const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]</code></pre>
    <p>
      In this example, numbers is an array of numbers. The map method is used
      with an arrow function to create a new array doubled that contains each
      number in numbers multiplied by 2. The result, [2, 4, 6, 8, 10], is logged
      to the console.
    </p>
    <h3><strong>Concept: <code>Arrow functions with default parameter values</code></strong></h3>
    <p>
      Arrow functions can use default parameter values, which are used when an
      argument is not provided or is undefined.
    </p>
    <h2><strong>Example:</strong></h2>
    <pre><code class="language-javascript">const greet = (name = "world") => `Hello, ${name}!`;
console.log(greet()); // "Hello, world!"
console.log(greet("Alice")); // "Hello, Alice!"</code></pre>
    <p>
      In this example, greet is an arrow function that takes a name argument
      with a default value of "world". When called without an argument, the
      default value is used. When called with the argument "Alice", that value
      is used instead.
    </p>
    <h3><strong>Concept: <code>Arrow functions and the spread operator</code></strong></h3>
    <p>
      Arrow functions can use the spread operator (...) to pass multiple
      arguments as an array.
    </p>
    <h2><strong>Example:</strong></h2>
    <pre><code class="language-javascript">const add = (...nums) => nums.reduce((total, num) => total + num, 0);
console.log(add(1, 2, 3)); // 6</code></pre>
    <p>
      In this example, add is an arrow function that uses the spread operator to
      accept any number of arguments as an array. The reduce method is used with
      an arrow function to add up all the values in the array. The result, 6, is
      logged to the console.
    </p>
    <h3><strong>Concept: <code>Arrow functions and object literals</code></strong></h3>
    <p>
      Arrow functions can be used inside object literals to create methods with
      concise syntax.
    </p>
    <h2><strong>Example:</strong></h2>
    <pre><code class="language-javascript">const person = {
          name: "Alice",
          greet() {
              console.log(`Hello, my name is ${this.name}.`);
          },
          sayHi: () => {
          console.log("Hi!");
      }
};

person.greet(); // "Hello, my name is Alice."
person.sayHi(); // "Hi!"</code></pre>
    <p>
      In this example, person is an object with two methods, greet and sayHi.
      The greet method uses a regular function and correctly logs the name
      property of the person object. The sayHi method uses an arrow function and
      logs the message "Hi!" without using this. Note that arrow functions are
      not ideal for object methods that require this to refer to the object
      itself.
    </p>
  </body>
</html>
