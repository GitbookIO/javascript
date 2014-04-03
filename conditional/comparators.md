# Comparators

Lets now focus on the conditional part:

```javascript
if (country === "France") {
    ...
}
```

The conditional part is the country followed by the three equal signs (`===`). Three equal signs mean that the condition tests if the variable country has the value you test against but also the correct variable (data)type. You can test conditions with double equal signs, too, but that would mean that `if(x == 5)` would be true for x being 5 and x being “5”. Depending on what your program is doing, this could make quite a difference.

Other conditional test:

* ```x > a```: is x bigger than a?
* ```x < a```: is x less than a?
* ```x <= a```: is x less than or equal to a?
* ```x != a```: is x not a?
* ```x```: does x exist?


---

Add a condition to change the value of `a` to 10 if `x` is bigger than 5.

```js
var x = 6;
var a = 0;


```

```js
var x = 6;
var a = 0;

if (x > 5) {
    a = 10;
}
```

```js
assert(a == 10);
```

---