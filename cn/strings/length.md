# 长度

在Javascript中通过使用 `.length` 很容易知道字符串中有多少字母。

```js
// 使用 .length
var size = 'Our lovely string'.length;

```

**注意:** 字符串不能进行减，乘或除的运算。

{% exercise %}
在变量 `size` 中储存 `str` 的长度。
{% initial %}
var str = "Hello World";

var size =
{% solution %}
var str = "Hello World";

var size = str.length;
{% validation %}
assert(size === str.length);
{% endexercise %}