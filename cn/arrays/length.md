# 长度
数组有个属性称为长度，正如字面意思，这就是数组的长度。

```javascript
var array = [1 , 2, 3];

// 结果: l = 3
var l = array.length;
```

{% exercise %}
定义变量a为数组的长度
{% initial %}
var array = [1, 1, 2, 3, 5, 8];
var l = array.length;
var a =
{% solution %}
var array = [1, 1, 2, 3, 5, 8];
var l = array.length;
var a = 6;
{% validation %}
assert (a === 6)
{% endexercise %}
