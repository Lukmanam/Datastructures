class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value) {
        const node = new Node(value);
        if (!this.front) {
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this.size++;
    }

    dequeue() {
        if (!this.front) {
            return "Queue is Empty";
        } else {
            let removedNode = this.front;
            this.front = this.front.next;
            if (!this.front) {
                this.rear = null;
            }
            this.size--;
            return removedNode.value;
        }
    }

    peak() {
        if (!this.front) {
            return "Queue is Empty";
        } else {
            return this.front.value;
        }
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    printQueue() {
        let current = this.front;
        let queueArray = [];
        while (current) {
            queueArray.push(current.value);
            current = current.next;
        }
        console.log("Queue:", queueArray.join(" -> "));
    }
}

// Example usage:
const queue1 = new Queue();
queue1.enqueue(999999);
queue1.enqueue(235);
queue1.enqueue(9876544);
queue1.dequeue()
console.log(queue1.size);
queue1.printQueue();
