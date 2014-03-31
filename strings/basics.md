# JavaScript Basics

Here we will cover the basics. How to create new strings and perform common operations on them.

## Creation

```js
// Single quotes can be used
var str = 'Our lovely string';

// Double quotes as well
var otherStr = "Another nice string";
```

## Concatenation

Concatenation involves adding two or more strings together, creating a larger string containing the combined data of those original strings. This is done in JavaScript using the **+** operator.

```js
var bigStr = 'Hi ' + 'JS strings are nice ' + 'and ' + 'easy to add';
```

**Note:** Strings can not be substracted, multiplied or divided.

## Splitting

Splitting a string breaks a string up into an array of smaller strings.

```js
var parts = 'We are separated by spaces'.split(' ');
```

