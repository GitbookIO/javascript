# Substrings

substring is used to take a part of a string.
Syntax:  substring(first_index,last_index).

```js
var a = 'Hello world!';
document.write(a.substring(1,6));
```
The preceding code snippet gives ```'ello '``` . Note that the 'w' (index 6) is not part of this substring.

We could also do,
```js
var a = 'Hello world!';
document.write(a.substring(2));
```
This gives the whole string from the character with index 2. ``` 'llo world!'```

##substr

There is also a method substr() that works slightly differently. Instead of the second number being an index number,
it gives the number of characters.
```js
var a = 'Hello world!';
document.write(a.substr(1,6));
```

starts at the character with index 1 ('e') and then gives 6 characters, so the output is ```ello w```
