# 属性
对象的属性是一对的`propertyName(属性名)`: `propertyValue(属性值)`，**属性的名字只能是字符串**。如果不是字符串，将会转换为字符串。可以在创建对象或之后初始化属性。
```js
var language = {
    name: 'JavaScript',
    isSupportedByBrowsers: true,
    createdIn: 1995,
    author:{
        firstName: 'Brendan',
        lastName: 'Eich'
    },
 // 是的，对象可以嵌套！
    getAuthorFullName: function(){
        return this.author.firstName + " " + this.author.lastName;
    }
 // 是的，函数可以有值！
};

```

以下代码展示如何 **获取** 属性的值。

```js
var variable = language.name;
 // 变量包含字符串"JavaScript"
    variable = language['name'];
 // 这行代码和上行功能一样。不同之处在于这行代码将书面化的字符串作为属性名，不过缺少可读性。
    variable = language.newProperty; 
 // 变量没定义，因为该属性没赋值。
```

以下代码展示如何**添加**一个新属性或**改变**一个存在的属性。
```js
language.newProperty = 'new value';
 // 现在对象有一个新的属性。如果该属性已经存在，值将会被替换。
language['newProperty'] = 'changed value';
 // 两以上种方法都可以使用，更推荐第一种(使用`.`)。
```
