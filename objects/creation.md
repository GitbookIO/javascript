# Creation
There are three ways to create an `object` in JavaScript:

1. literal

    ```js
    var object = {};
     // Yes, simply a pair of curly braces!

    ```
    > ***Note:*** this is the **recomended** way.

2. object-oriented

    ```js
    var object = new Object();

    ```
    > ***Note:*** it's almost like Java.
3. using object.create

    ```js
    var object = Object.create(proto[, propertiesObject]);

    ```
    > ***Note:*** The Object.create() method creates a new object with the specified prototype object and properties.
    