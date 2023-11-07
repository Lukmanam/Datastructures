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
    Prepend(value)
    {
        const node=new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
            this.size++;
            
        }
        else
        {
            node.next=this.head
            this.head=node;
            this.size++;
        }
    }

    insert(value,index)
    {
        if(index<0 || index>this.size)
        {
            console.log("error");
        }
        const node=new Node(value)
        let current=this.head
        if(index===0)
        {
            this.Prepend(value)
        }
        for (let i=0;i<index-1;i++)
        {
            current=current.next
            

        }
        node.next=current.next
        current.next=node
        this.size++;
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
list.append(9)
list.append(777)
list.Prepend(8888)
list.insert(999,2)

list.insert(1020,3)
list.insert(10044,5)


list.display()