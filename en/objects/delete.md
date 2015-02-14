# Delete
`delete` can be used to **remove a property** from an object. It will remove a property from the
object if it has one. It will not look further in the prototype chain.
Removing a property from an object may allow a property from the prototype chain to shine through:
```js
var adult = {age:26},
    child = Object.create(adult);
    child.age = 8;

delete child.age;
 /* Remove age property from child, revealing the age of the prototype, because then it is not overriden. */
var prototypeAge = child.age;
 // 26, because child does not have its own age property.
```
