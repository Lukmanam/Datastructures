class Queue{
    constructor(){
        this.items=[];
    }


isempty(){
    return this.items.length===0
}    
enqueue(element){
    this.items.push(element)
}

dequeue(){
   if(this.isempty()){
    return "Queue is empty"
   } 
   else{
    this.items.shift();
   }
}
front(){
    if(this.isempty()){
        return "Queue is Empty"
    }
    return this.items[0]
}
printQueue(){
    let str=''
    for(let i=0;i<this.items.length;i++){
        str+=this.items[i]
    }
   console.log(str);
}


}

const Qeueue=new Queue()
Qeueue.enqueue(100);
Qeueue.enqueue(956);
Qeueue.enqueue(100);
Qeueue.enqueue(956);
Qeueue.enqueue(100);
Qeueue.enqueue(956)
console.log(Qeueue.isempty());
console.log(Qeueue.front());
Qeueue.printQueue()
