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

    append = (value) => {
        const newNode = new Node(value) 
        let current = this.head 

        if (!this.head) {
            this.head = newNode 
            return 
        }

        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }
}
