class Stack{
    constructor(){
        this.items=[];
    }

    isEmpty(){
        return this.items.length===0
    }

    push(value){
        this.items.push(value)
    }
    pop(){
        if(this.isEmpty()){
            return "Stack underflow"
        }
        else{
            return this.items.pop()
        }
    }
    peek(){
        return this.items[this.items.length-1]
    }
    size(){
        return this.items.length
    }

  

}

const stack1=new Stack();
function reverse(stack){
    const reversedStack=new Stack() ;
    while(!stack1.isEmpty()){
        let data=stack1.pop();
        reversedStack.push(data)
    }
    return reversedStack
}
stack1.push(1);
stack1.push(19780);
stack1.push(90);
stack1.push(180);
stack1.pop()
console.log(stack1.isEmpty());
console.log(
    stack1.peek()
); 
console.log(stack1);
console.log(reverse(stack1));

    