# While 循环

只要特殊条件为真，While循环就一直执行代码块。

```javascript
while(condition){
    // 只要条件为真就继续执行
}
```

举个例子，以下代码会一直执行，只要变量 i 小于5： 

```javascript
var i = 0, x = "";
while (i < 5) {
    x = x + "The number is " + i;
    i++;
}
```

Do/While循环是while循环的变体。这种循环将先检查条件是否为真，再执行代码块。它将重复循环只要条件为真：

```javascript
do {
    // 代码块被执行
} while (condition);
```


**注意**: 要注意避免如果条件总为真导致的无限循环！


{% exercise %}
使用while循环，创建一个 `message` 变量，保存连接的整数，仅当长度小于100。
{% initial %}
var message = "";
{% solution %}
var message = "";
var i = 0;

while (message.length < 100) {
    message = message + i;
    i = i + 1;
}
{% validation %}
var message2 = "";
var i2 = 0;

while (message2.length < 100) {
    message2 = message2 + i2;
    i2 = i2 + 1;
}
assert(message === message2);
{% endexercise %}
