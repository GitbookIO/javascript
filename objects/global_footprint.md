# Global footprint
If you are developing a module runs on a web page and also runs other modules, then you must be aware the variable name overlapping.

Suppose we are developing a counter module:
```js
var myCounter = {
    number : 0,
    plusPlus : function(){
        this.number : this.number + 1;
    },
    isGreaterThanTen : function(){
        return this.number > 10;
    }
}
```
**Note:** this technique is often used with closures, to make the internal state immutable from the outside.

The module now takes only one variable name — `myCounter`. If any other module on the page uses variables like `number` or `isGreaterThanTen`, then it's perfectly safe. Because those variables are within the closures of `myCounter`, we will not override those values.
