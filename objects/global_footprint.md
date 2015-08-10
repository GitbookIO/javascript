# Global footprint
If you are developing a module, which might be running on a web page, which also runs other modules, then you must beware the variable name overlapping.

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
> ***Note:*** this technique is often used with closures, to make the internal state immutable from the outside.

The module now takes only one variable name — `myCounter`. If any other module on the page makes use of such names like `number` or `isGreaterThanTen` then it's perfectly safe, because we will not override each others values;
