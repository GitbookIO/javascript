# Properties

Object's property is a `propertyName`: `propertyValue` pair, where **property name can be only a string**. If it's not a string, it gets casted into a string. You can specify properties **when creating** an object **or later**. There may be zero or more properties separated by commas.

```js
var language = {
  name: "JavaScript",
  isSupportedByBrowsers: true,
  createdIn: 1995,
  author: {
    firstName: "Brendan",
    lastName: "Eich",
  },
  // Yes, objects can be nested!
  getAuthorFullName: function () {
    return this.author.firstName + " " + this.author.lastName;
  },
  // Yes, functions can be values too!
};
```

The following code demonstrates how to **get** a property's value.

```js
var variable = language.name;
// variable now contains "JavaScript" string.
variable = language["name"];
// The lines above do the same thing. The difference is that the second one lets you use litteraly any string as a property name, but it's less readable.
variable = language.newProperty;
// variable is now undefined, because we have not assigned this property yet.
```

The following example shows how to **add** a new property **or change** an existing one.

```js
language.newProperty = "new value";
// Now the object has a new property. If the property already exists, its value will be replaced.
language["newProperty"] = "changed value";
// Once again, you can access properties both ways. The first one (dot notation) is recomended.
```
