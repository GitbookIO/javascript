# 引用
对象是**不可复制**的。它们的传递靠引用。
```js
 // 假设我有一个匹萨
var myPizza = {slices: 5};
 // 然后我和你分析它
var yourPizza = myPizza;
 // 我吃了一小片
myPizza.slices = myPizza.slices - 1;
var numberOfSlicesLeft = yourPizza.slices;
 // 我们总共有4片
 // 因为我们引用了同一块匹萨
var a = {}, b = {}, c = {};
 // a, b, 和 c 都引用不同的空对象
a = b = c = {};
 // a, b, 和 c 都引用同一个空对象

```
