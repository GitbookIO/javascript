# Shift 

What we will do first is remove the first element of the Linked List. 

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

    shift = () => {
        this.head = this.head.next 
    }
}
