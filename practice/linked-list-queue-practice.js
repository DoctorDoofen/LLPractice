// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        if (this.head === null) return 0;
        let counter = 1,
            curr = this.head;
        while (curr.next) {
            curr = curr.next;
            counter++
        }
        return counter;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        if (this.head === null) return 0;
        let sum = 0,
            curr = this.head;
        while (curr.next) {
            sum += curr.value;
            curr = curr.next;
        }
        return sum += curr.value;

        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes

        return this.sumOfNodes() / this.listLength()

        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let counter = 0, curr = this.head
        while (curr.next) {
            if (n === counter) return curr
            curr = curr.next
            counter++
        }
        return curr;

        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?

        let mid;
        const size = this.listLength()
        if (size % 2 === 0) mid = size / 2
        else mid = Math.ceil(size / 2)
        return this.findNthNode(--mid)

        // Write your hypothesis on the time complexity of this method here
    }

    addToHead(val) {
        const newNode = new SinglyLinkedNode(val)
        if (this.listLength() === 0) this.head = newNode
        else {
            newNode.next = this.head
            this.head = newNode
        }
    }

    reverse() {
        // Returns a new reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
        // Does the time complexity change? How about space complexity?

        const ll = new SinglyLinkedList()

        let curr = this.head
        while (curr.next) {
            ll.addToHead(curr.value)
            curr = curr.next
        }

        ll.addToHead(curr.value)
        return ll;

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here 

        // Write your hypothesis on the time complexity of this method here
    }

}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?

        // Your code here 

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Your code here 

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here 

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
