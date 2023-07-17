# Equality

Programmers frequently need to determine the equality of variables in relation to other variables. This is done using an equality operator.

The most basic equality operator is the `==` operator. This operator does everything it can to determine if two variables are equal, even if they are not of the same type.

For example, assume:

```javascript
var foo = 42;
var bar = 42;
var baz = "42";
var qux = "life";

// Another Example of `===`
var abc = 101;
var def = "101";
// CASE 1 :  `==`
```In case 1 output will be true because "==" operator only checks var are equal
Case 2: '===' this operators also check its type(datatype). In our case abc is integer and def is a string so output will be false.```
```

`foo == bar` will evaluate to `true` and `baz == qux` will evaluate to `false`, as one would expect. However, `foo == baz` will _also_ evaluate to `true` despite `foo` and `baz` being different types. Behind the scenes the `==` equality operator attempts to force its operands to the same type before determining their equality. This is in contrast to the `===` equality operator.

The `===` equality operator determines that two variables are equal if they are of the same type _and_ have the same value. With the same assumptions as before, this means that `foo === bar` will still evaluate to `true`, but `foo === baz` will now evaluate to `false`. `baz === qux` will still evaluate to `false`.
