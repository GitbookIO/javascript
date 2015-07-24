# 连接

连接同时涉及两个或以上字符串，创建了一个组合这些原始数据的更长的字符串。在Javascript中使用 **+** 运算符。	

```js
var bigStr = 'Hi ' + 'JS strings are nice ' + 'and ' + 'easy to add';
```

{% exercise %}
连接不同的名字，这样变量 `fullName` 就包含了John的全名。
{% initial %}
var firstName = "John";
var lastName = "Smith";

var fullName =
{% solution %}
var firstName = "John";
var lastName = "Smith";

var fullName = firstName + " " + lastName;
{% validation %}
assert(fullName === 'John Smith');
{% endexercise %}
