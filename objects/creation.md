# Creation
There are multiple ways to create an `object` in JavaScript:

1. Literal

    ```js
    var object = {};
     // Yes, simply a pair of curly braces!

    ```
    > ***Note:*** this is the **recomended** way.

2. Object-oriented

    ```js
    var object = new Object();

    ```
    > ***Note:*** it's almost like Java. **Old school way and not recomended**
    
3. Object.defineProperty - This method accepts three arguments

    1.) Object name you want to create
    
    2.) String containing the name of the property (e.g "language")

    3.) Descriptor object (e.g. value: "JavaScript")
    
    ```js
    var object = {};
    
    Object.defineProperty(object, "language", {
        value: "JavaScript"
    }); 
    ```
     > ***Note:*** ES5 introduced Object.defineProperty & Object.defineProperties. Also supported with older browsers including IE-8
     
4. Object.defineProperties - This accepts two arguments

    1.) Object name you want to create
    
    2.) Another object that contains multiple object descriptors
    ```js
    var object = {};
    
    Object.defineProperties(object, {
        language: {
            value: "JavaScript"
        },
        email: {
            value: "javascript@js.com"
        }
    });
    ```
     > ***Note:*** Object.defineProperties allows you to define multiple properties in an object.
     
5. Object.create
    ```js
    var mynorAlexander = {
        firstName: "Mynor",
        lastName: "Alexander",
        sayName: function () {
            return "My name is " + this.firstName + " " + this.lastName + ",";
        }
    };
    
    // create Samy object from Mynor object
    var samyPesse = Object.create(mynorAlexander, {
        firstName: {
            value: "Samy"
        },
        lastName: {
            value: "Pesse"
        },
        greeter: {
            value: function (person) {
                return "Hello " + person.firstName + "!";
            }
        }
    });

    console.log(samyPesse.sayName() + " " + samyPesse.greeter(mynorAlexander));  // => My name is Samy Pesse, Hello Mynor!

    // create Herman object from Samy object
    var hermanStarikov = Object.create(samyPesse, {
        firstName: {
            value: "Herman"
        },
        lastName: {
            value: "Starikov"
        }
    });

    console.log(hermanStarikov.sayName() + " " + hermanStarikov.greeter(samyPesse));  // => My name is Herman Starikov, Hello Samy!
    ```
