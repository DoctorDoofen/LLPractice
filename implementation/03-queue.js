const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        const newNode = new SinglyLinkedNode(val)

        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode

        } else if (this.length === 1) {
            this.tail = newNode
            this.head.next = newNode

        } else if (this.length > 1) {
            this.tail = newNode
            let currNode = this.head
            while (currNode.next) {
                currNode = currNode.next
                if (currNode.next === null) break
            }
            currNode.next = newNode
        }
        return ++this.length
        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }

    dequeue() {
        let result;
        if (this.length === 0) {
            return null;

        } else if (this.length === 1) {
            result = this.head
            this.head = null
            this.tail = null

        } else if (this.length > 1) {
            result = this.head
            this.head = this.head.next
        }
        this.length--;
        return result.value;
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
