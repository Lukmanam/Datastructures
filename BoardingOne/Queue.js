class Queue{
    constructor(){
    this.items=[]
    }



    enqueue(element){
            this.items.push(element)
    }

    dequeue(){
        if(this.isEmpty()){
            return "stack underflow"
        }
       
           return this.items.shift()
        
    }
    isEmpty(){
        if(this.items.length===0)
        {
            return true
        }
        else{
            return false
        }

    }
    front(){
        if(!this.isEmpty)
        {
            return this.items[0]
        }
        else
        {
            return "queue is Empty"
        }
    }
    display(){
        if(!this.isEmpty){
            return this.items
        }
        else
        {
            let str='';
            for(let i=0;i<this.items.length;i++)
            {
                str+=this.items[i]
            }

            return str
    
        }
    }
}

const queue1=new Queue()

queue1.enqueue(190);
queue1.enqueue(160);
queue1.enqueue(130);
queue1.enqueue(120);
queue1.enqueue(110);
queue1.dequeue()
queue1.dequeue()
console.log(queue1.display()); 
console.log(queue1.display());
