# Do...While 循环

do...while语句创建的循环会先执行语句直到条件判断为假。
do... while的语法如下：

```javascript
do{
    // statement
}
while(expression) ; 
```

来看看如何使用 `do...while` 循环答应小于10的数字：

```
var i = 0;
do {
    document.write(i + " ");
    i++; //  i 增加 1 
} while (i < 10);
```

>***注意***: `i = i + 1` 也可以写成 `i++`.


{% exercise %}
使用do...while循环，打印小于5的数字。
{% initial %}
var i = 0;
{% solution %}
var i = 0;
do {
    i++; // i 增加 1 
} while (i < 5);
{% endexercise %}
