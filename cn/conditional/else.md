# Else

当第一个条件语句不成立时， `else` 语句将被执行。如果你想要在特殊条件下才返回一个值，这非常有效：

```javascript
var umbrellaMandatory;

if(country === 'England'){
    umbrellaMandatory = true;
} else {
    umbrellaMandatory = false;
}
```

`else` 语句可以和另一个 `if` 语句结合。改造一下上面的例子：

```javascript
if(country === 'England') {
    ...
} else if(country === 'France') {
    ...
} else if(country === 'Germany') {
    ...
}
```

{% exercise %}
填写 `name` 的值，验证 `else` 语句。
{% initial %}
var name =

if (name === "John") {

} else if (name === "Aaron") {
    // Valid this condition
}
{% solution %}
var name = "Aaron";

if (name === "John") {

} else if (name === "Aaron") {
    // Valid this condition
}
{% validation %}
assert(name === "Aaron");
{% endexercise %}
