// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val)
        // Write your hypothesis on the time complexity of this method here
        if (this.head === null) this.head = newNode
        else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++;
        return this;
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;

        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }

        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    removeFromHead() {
        // Remove node at head
        if (this.length === 0) return undefined;
        this.length--;

        const result = this.head
        this.head = this.head.next

        return result;
        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if (this.length === 0) {
            this.head = null
            return undefined
        }
        this.length--;

        let curr = this.head
        while (curr.next) {
            if (curr.next.next === null) {
                const result = curr.next
                curr.next = null
                return result;
            }
            curr = curr.next
        }
        const result = this.head
        this.head = null
        return result;
        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }

    peekAtHead() {
        // Return the value of head node
        if(this.length === 0) return undefined;
        return this.head.value

        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    print() {
        // Print out the linked list

        // Your code here 

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
