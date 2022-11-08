# Pop 


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

    pop = () => {
        let current = this.head 

        while (current.next.next) {
            current = current.next 
        }
        current.next = current.next.next 
    }
}