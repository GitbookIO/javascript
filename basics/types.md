# Variable types

Computers are sophisticated and can make use of more complex variables than just numbers. This is where variable types come in. Variables come in several types and different languages support different types.

The most common types are:

- **Numbers**

  - **Float**: a number, like 1.21323, 4, -33.5, 100004 or 0.123
  - **Integer**: a number like 1, 12, -33, 140 but not 1.233

- **String**: a line of text like "boat", "elephant" or "damn, you are tall!"

- **Boolean**: either true or false, but nothing else

- **Arrays**: a collection of values like: 1,2,3,4,'I am bored now'

- **Objects**: a representation of a more complex object

- **null**: a variable that contains null contains no valid Number, String, Boolean, Array, or Object

- **undefined**: the undefined value is obtained when you use an object property that does not exist, or a variable that has been declared, but has no value assigned to it.

JavaScript is a _“loosely typed”_ language, which means that you don't have to explicitly declare what type of data the variables are. You just need to use the `var` keyword to indicate that you are declaring a variable, and the interpreter will work out what data type you are using from the context, and use of quotes.

{% exercise %}
Create a variable named `a` using the keyword `var`.
{% solution %}
var a;
{% validation %}
a;
{% endexercise %}
