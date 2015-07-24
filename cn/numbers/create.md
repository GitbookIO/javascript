# 创建

创建一个数字很容易，创建任何类型都只需要使用关键词 ```var```。

数字可以被创建来自一个常量：
```
// 这是浮点型:
var a = 1.2;

// 这是整型:
var b = 10;
```

或来自另一个变量：
```
var a = 2;
var b = a;
```

{% exercise %}
创建一个值为 `10` 的变量 `x` ， 创建一个值等于 `a` 的变量 `y`。
{% initial %}
var a = 11;
{% solution %}
var a = 11;

var x = 10;
var y = a;
{% validation %}
assert(x === 10 && y === a);
{% endexercise %}
