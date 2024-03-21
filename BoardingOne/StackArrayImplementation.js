class Stack{
    constructor(){
        this.items=[]
    }


    push(element){
        this.items.push(element)
    }

    pop(element){
        if(this.items.length===0){
            console.log("stack Underflow ")
        }
        else
        {
            this.items.pop(element)
        }
    }
    size(){
        return(this.items.length)
    }
    
    isEmpty(){
        if(this.items.length===0)
        {
            return true
        }
        else
        {
            return false
        }
    }
    reverse(){
        let reversed=[]
        for(let i=0;i<this.items.length;i++)
        {
        reversed.push(this.items[this.items.length-1-i])
        }
        return reversed
    }
}
const stack1=new Stack();
stack1.push(100);
stack1.push(6345);
stack1.push(786);
stack1.push(11199)
stack1.pop();
console.log(stack1)
console.log("checking empty",stack1.isEmpty());
console.log("size of stack",stack1.size());  
console.log("reversed",stack1.reverse());
