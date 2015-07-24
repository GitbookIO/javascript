# 原型
每个对象都与对象原型关联，继承了对象原型的属性。

从文本对象（`{}`）创建的所有对象都自动链接到的Object.prototype，这个对象来自JavaScript标准。

当JavaScript解释器（在浏览器中一个模块），试图找到一个属性，它要检索，如下面的代码：
```js
var adult = {age: 26},
    retrievedProperty = adult.age;
 // 看上一行
```
首先，解释器检查对象有的每个属性。例如，`adult`只有一个自己的属性 - `age`。但是，除此之外，实际上还有几个属性，这是继承自Object.prototype。

```js
var stringRepresentation = adult.toString();
 // 变量的值为 '[object Object]'
```

`toString` 是一个 Object.prototype 的属性, 这是继承。它有一个函数，返回值为一个对象的字符串。如果希望它返回一个更有意义的东西，那么你可以将其覆盖。简单的添加一个属性到adult对象。

```js
adult.toString = function(){
    return "I'm "+this.age;
}
```

如果现在调用 `toString` 函数，解释器将发现一个新的对象中的属性然后停止。

因此，通过深入原型，解释器检索第一个对象本身的属性。

要设置自己的对象为原型而不是默认的Object.prototype，你可以调用以下的`Object.create`：


```js
var child = Object.create(adult);
 /* 通过这种方式创建的对象可以让我们轻松替换默认的Object.prototype成我们想要的。在这里，child的原型是adult对象。
 */
child.age = 8;
 /* 在此之前，child根本没有自己的年龄属性，解释器会寻找child的原型中是否有该属性。现在，当我们设置了child自身年龄，解释器就不深入寻找了。
注意：adult的年龄仍为26。
  */
var stringRepresentation = child.toString();
 // 值为 "I'm 8"。
 /* 注意：我们没覆盖child的toString属性，因此adult类函数不会被调用。如果adult没有toString属性，那么Object.prototype的toString类函数将被调用，我们将得到"[object Object]" 而不是 "I'm 8" 。
 */
```

`child`'的原型是`adult`，其原型为`Object.prototype`。这一系列原型被称为**原型链**。
