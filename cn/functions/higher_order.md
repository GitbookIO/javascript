# 高阶函数

举个例子，一个函数可以将其他函数作为参数和/或产生一个函数作作为它的返回值。
*fancy* 功能技术是非常强大的构造，可在Javascript或其他高级语言比如python，lisp等中使用。 

我们来创建两个简单的函数，`add_2` 和 `double` ，和一个高阶函数 `map` 。`map` 接受两个参数，`func` 和 `list` （它的声明因此为`map(func,list)`），返回一个数组。`func` (第一个参数)作为函数将被应用到每个数组 `list`（第二个参数）的元素中。 

```javascript
// 定义两个简单函数
var add_2 = function(x) {
    return x + 2;
};
var double = function(x) {
    return 2 * x;
};

//  map接受两个参数
//  func    调用函数
//  list    数组中元素值传递给 func 
var map = function(func, list) {
    var output=[];              // 输出 list
    for(idx in list) {
        output.push( func(list[idx]) );
    }
    return output;
}


// 使用map将函数应用于整个输入列表
// 产生相应的输出列表
map(add_2, [5,6,7]) // => [7, 8, 9]
map(double, [5,6,7]) // => [10, 12, 14]
```

上述例子中的函数很简单。然而在作为参数传递给其他函数时，可以使用特殊组合方法构件更复杂的函数。

举个例子，如果注意到在代码中平凡使用调用方法`map(add_2, ...)` 和 `map(double, ...)`，可以创建两个特殊用途的列表运行组合起来的函数。使用函数封装，可以如下操作：

```javascript
process_add_2 = function(list) {
    return map(add_2, list);
}
process_double = function(list) {
    return map(double, list);
}
process_add_2([5,6,7]) // => [7, 8, 9]
process_double([5,6,7]) // => [10, 12, 14]
```

创建一个 `buildProcessor` 函数，它将函数 `func` 作为函数，返回一个 `func`处理程序，这个函数将列表作为输入应用到 `func` 。

```javascript
// 函数产生一系列处理程序
var buildProcessor = function(func) {
    var process_func = function(list) {
        return map(func, list);
    }
    return process_func;
}
// 调用buildProcessor返回一个调用输入列表的函数


// 使用buildProcessor产生 add_2 process_double：
process_add_2 = buildProcessor(add_2);
process_double = buildProcessor(double);

process_add_2([5,6,7]) // => [7, 8, 9]
process_double([5,6,7]) // => [10, 12, 14]
```

看另一个例子。
创建一个 `buildMultiplier` 函数，将 `x` 作为输入，然后一个对其参数 `x` 相乘的函数：

```javascript
var buildMultiplier = function(x) {
    return function(y) {
        return x * y;
    }
}

var double = buildMultiplier(2);
var triple = buildMultiplier(3);

double(3); // => 6
triple(3); // => 9
```

{% exercise %}
定义一个 `negate` 函数将 `add1` 作为参数，返回一个函数,这个函数通过 `add1` 返回值的相反数.(开始有点复杂了)
{% initial %}
var add1 = function (x) {
    return x + 1;
};

var negate = function(func) {
    // TODO
};

// 应该返回 -6
// 因为 (5+1) * -1 = -6
negate(add1)(5);

{% solution %}
var add1 = function (x) {
    return x + 1;
}

var negate = function(func) {
    return function(x) {
        return -1 * func(x);
    }
}

negate(add1)(5);
{% validation %}
assert(negate(add1)(5) === -6);
{% endexercise %}
