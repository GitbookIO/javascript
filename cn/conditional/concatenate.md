# 条件连接

此外，你可以用 "or” 或 “and” 语句连接不同的条件判断，可以分别的测试是否存在一个为真或同为真。

在Javascript中，“or” 可以被写成 `||` ， “and” 可以被写成 `&&`。

比如你想要测试 x 的值是否在10到20之间，你可以用上述的方法：

```
if(x > 10 && x < 20) {
    ...
}
```

如果你想要确认 country 是 “England” 或 “Germany”：

```
if(country === 'England' || country === 'Germany') {
    ...
}
```

**注意**: 就像对数字的运算符，条件可以用括号来分组，比如： ```if ( (name === "John" || name === "Jennifer") && country === "France")```。

{% exercise %}
填写两个条件让仅当name 为 `"John"` ，country 为 `"England"`，`primaryCategory` 才等于  `"E/J"` ，仅当name 为 `"John"` 或 country 为 `"England"`， `secondaryCategory` 才等于  `"E/J"` 。
{% initial %}
var name = "John";
var country = "England";
var primaryCategory, secondaryCategory;

if ( /* Fill here */ ) {
    primaryCategory = "E/J";
}
if ( /* Fill here */ ) {
    secondaryCategory = "E|J";
}
{% solution %}
var name = "John";
var country = "England";
var primaryCategory, secondaryCategory;

if (name === "John" && country === "England") {
    primaryCategory = "E/J";
}
if (name === "John" || country === "England") {
    secondaryCategory = "E|J";
}
{% validation %}
assert(primaryCategory === "E/J" && secondaryCategory === "E|J");
{% endexercise %}
