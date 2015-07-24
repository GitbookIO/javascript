# If

最简单的条件判断是if语句，语法是 `if(condition){ do this … }` 。条件判断为真，才执行分支中的代码。举个字符串的例子：
```javascript
var country = 'France';
var weather;
var food;
var currency;

if(country === 'England') {
    weather = 'horrible';
    food = 'filling';
    currency = 'pound sterling';
}

if(country === 'France') {
    weather = 'nice';
    food = 'stunning, but hardly ever vegetarian';
    currency = 'funny, small and colourful';
}

if(country === 'Germany') {
    weather = 'average';
    food = 'wurst thing ever';
    currency = 'funny, small and colourful';
}

var message = 'this is ' + country + ', the weather is ' +
            weather + ', the food is ' + food + ' and the ' +
            'currency is ' + currency;
```

**注意:** 条件判断可以嵌套。

{% exercise %}
填写 `name` 的值，验证条件判断。
{% initial %}
var name =

if (name === "John") {

}
{% solution %}
var name = "John";

if (name === "John") {

}
{% validation %}
assert(name === "John");
{% endexercise %}
