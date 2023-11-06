class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.tail = null
        this.size = 0
    }

    append(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
            
        }
        else {
            this.tail.next = node
            this.tail = node;
            
        }

    }
    prepend(value)
    {
        const node=new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
            
        }
        else
        {
            node.next=this.head
            this.head=node
        }
    }

    display() {
        let current = this.head
        while (current != null) {
            console.log(current.value);
            current = current.next
        }
    }
}
const list=new linkedList()
list.append(100)
list.append(120)
list.display()