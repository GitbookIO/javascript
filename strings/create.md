# Creation

You can define strings in JavaScript by enclosing the text in single quotes or double quotes:

```js
// Single quotes can be used
var str = 'Our lovely string';

// Double quotes as well
var otherStr = "Another nice string";
```

In Javascript, Strings can contain UTF-8 characters:

```js
"中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어";
```


**Note:** Strings can not be subtracted, multiplied or divided.

{% exercise %}
Create a variable named `str` set to the value `"abc"`.
{% solution %}
var str = 'abc';
{% validation %}
assert(str === 'abc');
{% endexercise %}
