### Here is a code without async promises:-
`chooseToppings(function(toppings) {
  placeOrder(toppings, function(order) {
    collectOrder(order, function(pizza) {
      eatPizza(pizza);
    }, failureCallback);
  }, ### failureCallback);
}, failureCallback);`

**Promises make situations like the above much easier to write, parse, and run. If we represented the above pseudo-code using asynchronous promises instead, we'd end up with something like this:**
`chooseToppings()
.then(function(toppings) {
  return placeOrder(toppings);
})
.then(function(order) {
  return collectOrder(order);
})
.then(function(pizza) {
  eatPizza(pizza);
})
.catch(failureCallback);`

** to include the same code in both the .then() and .catch() callbacks**
`myPromise
.then(response => {
  doSomething(response);
  runFinalCode();
})
.catch(e => {
  returnError(e);
  runFinalCode();
});`
