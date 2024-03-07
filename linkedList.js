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
            this.size++;

        }
        else {
            this.tail.next = node
            this.tail = node;
            this.size++;

        }

    }
    Prepend(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
            this.size++;

        }
        else {
            node.next = this.head
            this.head = node;
            this.size++;
        }
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log("error");
        }
        const node = new Node(value)
        let current = this.head
        if (index === 0) {
            this.Prepend(value)
        }
        for (let i = 0; i < index - 1; i++) {
            current = current.next


        }
        node.next = current.next
        current.next = node
        this.size++;
    }

    remove(index) {
        let removenode;
        if (index < 0 || index > this.size) {
            console.log("error");
        }
        if (index === 0) {
            removenode = this.head;
            this.head = this.head.next
            this.size--;
        }
        else {

            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next
            }
            removenode = current.next
            current.next = removenode.next
            this.size--;

        }

    }



    // fetch value from a particular index
    fetch(index) {
        let current = this.head
        let flag = 0;
        for (let i = 1; i <= index; i++) {
            if (i === index) {
                console.log(current.value);
                flag++;

            }
            current = current.next
        }
        if (flag === 0) {
            console.log("Not found");
        }

    }


    // Search value in linked list
    search(value)
    {
        let current=this.head
        let flag=0
        for(let i=1;i<this.size;i++)
        {
            if(current.value===value)
            {
                console.log(`found at ${i} nd node`);
                flag++;
            }
            current=current.next
        }
        if(flag===0){
            console.log("element u r searching for not found");
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


const list = new linkedList()
list.append(9)
list.append(777)
list.Prepend(8888)
list.insert(999, 2)
list.insert(1020, 3)
list.insert(10044, 5)
list.remove(5)
list.fetch(1)
list.search(9)
list.display()