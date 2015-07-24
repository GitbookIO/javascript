# 函数声明

如同变量，函数必须被声明。以下是声明一个接受 **参数** `x` **返回** 浮点型x的 `double` 函数： 

```javascript
function double(x) {
    return 2 * x;
}
```

>*注意:* 上述函数**可能**在声明之前被引用。 

函数在Javascript中也是变量；可以储存值（比如数字，字符串等等），将其作为参数传给其他函数：	

```javascript
var double = function(x) {
    return 2 * x;
};
```

>*注意:* 上述函数**可能不可以**在声明之前被引用，就像其他变量。

{% exercise %}
声明一个 `triple` 函数，接受一个参数，返回它的三倍。
{% solution %}
var triple = function(x) {
    return x * 3;
}
{% validation %}
assert(triple);
assert(triple(4) === 12);
assert(triple(10) === 30);
{% endexercise %}
