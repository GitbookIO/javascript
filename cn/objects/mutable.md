# 可变性
对象与原始值不同之处在于**对象可以改变**，而原始值不可改变。
```js
var myPrimitive = "first value";
    myPrimitive = "another value";
 // myPrimitive现在指向另一个字符串
var myObject = { key: "first value"};
    myObject.key = "another value";
 // myObject 指向的还是原来的对象
```
