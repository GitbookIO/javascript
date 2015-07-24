# 循环

循环是一种变量在其中不断改变的重复状。如果您希望一遍又一遍地运行相同的代码，并且每次的值都不同，那么使用循环是很方便的。

与其用：

```javascript
doThing(cars[0]);
doThing(cars[1]);
doThing(cars[2]);
doThing(cars[3]);
doThing(cars[4]);
```

不如用：

```javascript
for (var i=0; i < cars.length; i++) { 
    doThing(cars[i]);
}
```