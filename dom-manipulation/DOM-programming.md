## DOM Programming Interface

### Example

```HTML
<html>
<body>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>

</body>
</html>
```

Here, you can see, in the script tag, we used the `.getelementbyid` function to access `<p>` tag from the `DOM`. Using this, we can manipulate it. Here, we are using `.innerhetml` method to change the text inside it.

---

## Different methods to catch the elements and manipulate them.

---

* document.getElementById(id)
* document.getElementsByTagName(name)
* document.getElementsByClassName(name)	

## Different properties to manipulate elements.

---

* element.innerHTML =  new html content
* element.attribute = new value
* element.style.property = new style

## Adding and Deleting Elements

---

* document.createElement(element)	
* document.removeChild(element)	
* document.appendChild(element)	
* document.appendChild(element)	
* document.write(text)	

## Event handlers

Trigger a particular thing after an event.

```javascript
document.getElementById(id).onclick = function(){code}	
```

### event listener

```javascript
const namelem = document.getElementById("document");

namelem.addEventListener('click', () => {
  // The code goes here
});
```

when `namelem` will be clicked, the following code would execute.

#### Basic events

* click
* onkeypress
* onkeyup
* mouseover
* etc

### You can explore more / use this more in your life while programming in javascript to improve your knowledge in this.