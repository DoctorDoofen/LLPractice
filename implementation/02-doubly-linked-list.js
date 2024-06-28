// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;

        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        if (this.length === 0) return undefined;

        const result = this.head.value
        if (this.length === 1) {
            this.head = null
            this.tail = null

        } else if (this.length === 2) {
            this.tail.prev = null
            this.head = this.tail

        } else if (this.length > 2) {
            this.head = this.head.next
            this.head.prev = null

        }

        this.length--;
        return result
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        let result;
        if(this.length === 0) {
            return undefined;

        } else if(this.length === 1) {
            result = this.tail.value
            this.tail = null
            this.head = null

        } else if(this.length === 2){
            result = this.tail.value
            this.tail = this.tail.prev
            this.prev = null
            this.next = null

        } else if(this.length > 2){
            result = this.tail.value
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.length--;
        return result;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        if(this.length === 0) return undefined;
        return this.head.value;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        if(this.length === 0) return undefined;
        return this.tail.value;
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
