# For 循环

for语句是最简单的循环形式。它的语法类似if语句，只是多了些选项：

```javascript
for(condition; end condition; change){
    // do it, do it now
}
```

来看看如何使用for循环执行10次相同的代码：

```
for(var i = 0; i < 10; i = i + 1){
    // 执行这段代码10次
}
```

>***注意***: `i = i + 1` 也可以写成 `i++`.


{% exercise %}
使用for循环，创建一个 `message` 变量，使其值为整数0到99 (0, 1, 2, ...) 之和。
{% initial %}
var message = "";
{% solution %}
var message = "";

for(var i = 0; i < 100; i++){
    message = message + i;
}
{% validation %}
var message2 = ""

for(var i = 0; i < 100; i++){
    message2 = message2 + i;
}
assert(message === message2);
{% endexercise %}
