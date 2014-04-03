# Else

There is also an `else` clause that will be applied every time the first condition isn’t true. This is very powerful if you want to react to any value, but single out one in particular for special treatment:

```javascript
var umbrellaMandatory;

if(country === 'England'){
    umbrellaMandatory = true;
} else {
    umbrellaMandatory = false;
}
```

The `else` clause can be join with another `if`, lets remake the example from the previous article:

```javascript
if(country === 'England') {
    ...
} else if(country === 'France') {
    ...
} else if(country === 'Germany') {
    ...
}
```


---

Fill up the value of `name` to validate the `else` condition.

```js
var name = 

if (name == "John") {
    
} else if (name == "Aaron") {
    // Valid this condition
}
```

```js
var name = "Aaron";

if (name == "John") {
    
} else if (name == "Aaron") {
    // Valid this condition
}
```

```js
assert(name == "Aaron");
```

---