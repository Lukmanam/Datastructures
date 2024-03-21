class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        const node = new Node(value);
        if(this.top===null){
            this.top = node;
            this.size++;
        }
        else{
  
            node.next=this.top;
            this.top=node;
            this.size++
        }

    }
    pop() {
        if(this.size === 0)
        {
            console.log("stack Underflow Occured");
        }
        this.top=this.top.next ;
        this.size--;
    }
    isEmpty() {
        if (this.size <= 0) {
            return true
        }
        else {
            return false
        }
    }
    size() {
        return this.size;
    }
    display() {
        let current = this.top;
       while(current) {
            console.log(current.value)
            current = current.next;
        }
    }
    middleelement(){
        let current=this.top;
        
        console.log(current);
        let middle=Math.floor((this.size)/2)
        console.log(middle,"juhh");
        for(let i=0;i<middle;i++)
        {
            current=current.next
        }
        return current;
        
    }
}

const stack1=new Stack();
stack1.push(1000000000);
stack1.push(50000);
stack1.push(8888888888888);
stack1.pop()
stack1.display()
console.log("middle",stack1.middleelement());



