// Event Bubbling and Capturing
//when you have a nested elements in the dom and when you add a event to the last child it will follow pattern
// as that child to till the parent
// whereas in capturing the process is reverse

// The process of propagating from nearest element to farthest element in the dom is called "EVENT BUBBLING"
// The process of propagating from farthest element to nearest element in the dom is called "EVENT CAPTURING"
// EVENT CAPTURING is also called as "TRICKLING"
// stopPropagation() will stop the propagation either in event bubbling or in event capturing.


const grandParent = document.getElementById('grand-parent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');


grandParent.addEventListener('click',() => {
    console.log("Grand-Parent")
},true)
// The true argument refers to the event capturing and true says that implement capturing.

parent.addEventListener('click',() => {
    console.log("parent")
},true)

child.addEventListener('click',() => {
    console.log("child")
},true)

// In the above example  in the case of false argument the event bubbling will occur and if you click on 
//child div all the three log statements will appear because of the effect of event bubbling