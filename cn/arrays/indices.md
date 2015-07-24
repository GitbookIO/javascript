# 索引

若你有一个数组，如何访问想要的特定元素？索引出现了。一个 **下标** 指向数组中的一个位置。正如其他大部分语言，索引逻辑上是一个接一个，但要注意第一个数组下标是0。方括号[]被用来表示使用数组下标。

```javascript
// 这是字符串构成的数组
var fruits = ["apple", "banana", "pineapple", "strawberry"];

// 用fruits数组中的第二个元素的值赋值给变量banana
// 记住索引(即下标)是从0开始，下标1即第二个元素
// 结果: banana = "banana"
var banana = fruits[1];
```

{% exercise %}
定义变量使用数组的索引
{% initial %}
var cars = ["Mazda", "Honda", "Chevy", "Ford"]
var honda =
var ford =
var chevy =
var mazda =
{% solution %}
var cars = ["Mazda", "Honda", "Chevy", "Ford"]
var honda = cars[1];
var ford = cars[3];
var chevy = cars[2];
var mazda = cars[0];
{% validation %}
assert(honda === "Honda");
assert(ford === "Ford");
assert(chevy === "Chevy");
assert(mazda === "Mazda");
{% endexercise %}
