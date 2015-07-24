# 基本运算符

你可以对数字使用一些简单的数学运算符比如：

* **加**: ```c = a + b```
* **减**: ```c = a - b```
* **乘**: ```c = a * b```
* **除**: ```c = a / b```

你可以像在数学中一样，使用括号分隔进行分隔比如：```c = (a / b) + d```

{% exercise %}
创建一个变量 `x` ，它的值为`a` 和 `b` 之和再被 `c` 除，最后乘上 `d`.
{% initial %}
var a = 2034547;
var b = 1.567;
var c = 6758.768;
var d = 45084;

var x =
{% solution %}
var a = 2034547;
var b = 1.567;
var c = 6758.768;
var d = 45084;

var x = ((a + b) / c) * d;
{% validation %}
assert(x === (((a + b) / c) * d));
{% endexercise %}
