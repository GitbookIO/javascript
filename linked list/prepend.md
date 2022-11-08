# Add 

What we will do first is add a value to a Linked List. 

```js 
class Node {
    constructor(data) {
        this.data = data
        this.next = null 
    }
}

class LinkedList {
    constructor(head) {
        this.head = head 
    }

    prepend = (value) => {
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode 
        }
        else {
            newNode.next = this.head 
            this.head = newNode 
        }
    }
}