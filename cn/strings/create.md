# 创建

你可以在Javascript中，通过单引号或双引号定义字符串：

```js
// 可以用单引号
var str = 'Our lovely string';

// 也可以用双引号
var otherStr = "Another nice string";
```

在Javascript中，字符串可以使用UTF-8编码：

```js
"中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어";
```


**注意:** 字符串不能进行减，乘或除的运算。

{% exercise %}
创建一个名为 `str` 的变量，值为 `"abc"` 。
{% solution %}
var str = 'abc';
{% validation %}
assert(str === 'abc');
{% endexercise %}
