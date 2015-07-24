# 比较

把焦点放在条件判断部分：

```javascript
if (country === "France") {
    ...
}
```

变量 `country` 后面跟着的三个等号(`===`)是条件判断部分。三个等号测试是否变量 `country` 和 `France` 值与类型(`String`)相同。你也可以用两个等号来测试，比如`if (x == 5)`，在`var x = 5;` 或 `var x = "5";` 情况下都返回真。这很不一样取决于你的程序是做什么。比较推荐你经常去尝试比较三个等号(`===` 和 `!==`)和两个等号(`==` 和 `!=`)的区别。

其他条件判断的测试：

* ```x > a```: is x bigger than a?
* ```x < a```: is x less than a?
* ```x <= a```: is x less than or equal to a?
* ```x >=a```: is x greater than or equal to a?
* ```x != a```: is x not a?
* ```x```: does x exist?


{% exercise %}
添加一种条件判断，如果 `x` 比5大，使变量 `a` 赋值为10。
{% initial %}
var x = 6;
var a = 0;
{% solution %}
var x = 6;
var a = 0;

if (x > 5) {
    a = 10;
}
{% validation %}
assert(a === 10);
{% endexercise %}

##逻辑比较

为了避免if-else麻烦，可以利用一种简单的逻辑比较。

```js
var topper = (marks > 85) ? "YES" : "NO";
```

在上述例子中，`?` 是逻辑运算符。上述源码表示如果marks的值大于85即 `marks > 85` ，则 `topper = YES` ；否则 `topper = NO` 。基本上，如果比较条件为真，赋第一个参数的值，否则赋的二哥参数的值。
