# 全局化

如果想开发一个模块，它可以在网页上运行或也可以运行其他模块，因此你必须注意变量名是否重复。

假设我们正在卡开发一个计数器模块：
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
> ***注意:*** this 技巧通常用在闭包中，以使来自外部的内部状态不变。

模块使用唯一一个变量名 — `myCounter`。如果其他模块使用名字比如`number` 或 `isGreaterThanTen` ，这样就会很安全，因为不会覆盖每个其他的值。
