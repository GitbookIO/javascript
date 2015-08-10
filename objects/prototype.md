# Prototype
Every object is linked to a prototype object from which it inherits properties.

All objects created from object literals (`{}`) are automatically linked to Object.prototype, which is an object that comes standard with JavaScript.

When a JavaScript interpreter (a module in your browser) tries to find a property, which You want to retrieve, like in the following code:
```js
var adult = {age: 26},
    retrievedProperty = adult.age;
 // The line above
```
First, the interpreter looks through every property the object itself has. For example, `adult` has only one own property — `age`. But besides that one it actually has a few more properties, which were inherited from Object.prototype.
```js
var stringRepresentation = adult.toString();
 // the variable has value of '[object Object]'
```

`toString` is an Object.prototype's property, which was inherited. It has a value of a function, which returns a string representation of the object. If you want it to return a more meaningful representation, then you can override it. Simply add a new property to the adult object.

```js
adult.toString = function(){
    return "I'm "+this.age;
}
```
If you call the `toString` function now, the interpreter will find the new property in the object itself and stop.

Thus the interpreter retrieves the first property it will find on the way from the object itself and further through its prototype.

To set your own object as a prototype instead of the default Object.prototype, you can invoke `Object.create` as follows:

```js
var child = Object.create(adult);
 /* This way of creating objects lets us easily replace the default Object.prototype with the one we want. In this case, the child's prototype is the adult object. */
child.age = 8;
 /* Previously, child didn't have its own age property, and the interpreter had to look further to the child's prototype to find it.
 Now, when we set the child's own age, the interpreter will not go further.
 Note: adult's age is still 26. */
var stringRepresentation = child.toString();
 // The value is "I'm 8".
 /* Note: we have not overridden the child's toString property, thus the adult's method will be invoked. If adult did not have toString property, then Object.prototype's toString method would be invoked, and we would get "[object Object]" instead of "I'm 8" */
```

`child`'s prototype is `adult`, whose prototype is `Object.prototype`. This sequence of prototypes is called **prototype chain**.
