# 销毁
`销毁` 被用来从一个对象中 **删除一个属性** 。
从一个对象中删除一个属性就是将改属性从原型中移出：
```js
var adult = {age:26},
    child = Object.create(adult);
    child.age = 8;

delete child.age;
 /* 从child中删除age属性，表明这之后该属性不在被覆盖 */
var prototypeAge = child.age;
 // 26，因为该孩子没有自己的age属性。
```
