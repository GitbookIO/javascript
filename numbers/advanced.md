# Advanced Operators

Some advanced operators can be used, such as:

- **Modulus (division remainder)**: `x = y % 2`
- **Increment**: Given a = 5
  - `c = a++`, Results: c = 5 and a = 6
  - `c = ++a`, Results: c = 6 and a = 6
- **Decrement**: Given a = 5
  - `c = a--`, Results: c = 5 and a = 4
  - `c = --a`, Results: c = 4 and a = 4

{% exercise %}
Define a variable `c` as the modulus of the decremented value of `x` by 3.
{% initial %}
var x = 10;

var c =
{% solution %}
var x = 10;

var c = (--x) % 3;
{% validation %}
assert(c === 0);
{% endexercise %}
