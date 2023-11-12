class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(elemnt)
    {
        this.items.push(elemnt)
    }
    dequeue(){
        if(this.isEmpty()){
            return "Underflow"
        }
        return this.items.shift();
    }
    front()
    {
        if(this.isEmpty()){
            return "No elements in the queue"
        }
        return this.items[0]
    }
    isEmpty(){
        return this.items.lenght===0;
    }
    printqueue(){
        let str="";
        for(let i=0;i<this.items.length;i++)
        {
            str+=this.items[i]+ "";
        }
        return str;
    }
}


const queue= new Queue();
queue.enqueue(10)