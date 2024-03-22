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
    let slowPointer=this.top;
    let fastPointer=this.top

    while(fastPointer!==null && fastPointer.next!==null && fastPointer.next.next!==null)
    {
        slowPointer=slowPointer.next
        fastPointer=fastPointer.next.next;
    }
    if(fastPointer.next===null)
    {
        slowPointer=slowPointer
    }
    return slowPointer.value
 }
//  reverse(){
//     let prev=null;
//     current=this.top;
//     next=current.next

//     while(current!==null)
//     {
//         next=current.next;
//         current.next=prev;
//         prev=current;
//         current=prev
//     }
//     this.top=prev
// }
reverse() {
    let prev = null;
    let current = this.top;
    let next = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.top = prev;
  }
}

const stack1=new Stack();
stack1.push(1000000000);
stack1.push(50000);
stack1.push(8888888888888);
stack1.push(8);
stack1.push(123);
// stack1.pop()
stack1.display()
console.log("middle elementis    :",stack1.middleelement());
stack1.reverse();
console.log(
    "after reverse"
);
    stack1.display()




