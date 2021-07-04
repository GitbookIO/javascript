### Ternary operator
Ternary operator is an alternative way to if/else statement.

**Example**

    var condition = false;
    condition ? alert("True") : alert("False");
    
In this case the output will be "False".

The ternary operator can be used even with nested else if, for example:

    var condition = true;
    condition ? !condition ? alert("Nested true") : alert("Nested false") : alert("External false");
    
In this case the output will be "Nested false".
