// class Node{
//     constructor(value)
//     {
//         this.value=value;
//         this.next=null
//     }

// }

// class linkedList{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//         this.size=0;
//     }

//     append(value)
//     {
//         const node=new Node(value);
//         if(!this.head)
//         {
//             this.head=node;
//             this.tail=node;
//             this.size++;
//         }
//         else
//         {
//             this.tail.next=node;
//             this.tail=node;
//             this.size ++;
//         }

//     }
//     prepend(value){
//         const node=new Node(value)
//         if(!this.head)
//         {
//             this.head=node;
//             this.tail=node;
//             this.size++
//         }
//         else
//         {
//             node.next=this.head;
//             this.head=node;
//             this.size++;
//         }
//     }
//     insert(value,index)
//     {
//         const node=new Node(value);
//         if(index===0)
//         {
//             this.prepend(value)
//         }
//         else
//         {
//             let current=this.head;
//             for(let i=0;i<index-1;i++)
//             {
//                 current=current.next
//             }
//             node.next=current.next;
//             current.next=node;
//         }
//     }
//     remove(index)
//     {
//         let removenode;
//         if(index===0)
//         {
//            removenode=this.head;
//            this.head=this.head.next;
//            this.size--; 
//         }
//         let current=this.head;
//         for(let i=0;i<index-1;i++)
//         {
//             current=current.next;
//         }
//         removenode=current.next;
//         current.next=removenode.next;
//         this.size--;
//     }
//     fetchindexvalue(index)
//     {
//         if(index===0)
//         {
//             console.log(this.head.value,"value at index",index);
//         }
//         else
//         {
//             let current=this.head
//             for(let i=1 ;i<index-1;i++)
//             {
//                 current=current.next
//             }

//             console.log(current.value,"value in",index);
//         }
//     }
//     search(value){
//         let current=this.head
//         let flag=0;
//         for(let i=0;i<=this.size;i++)
//         {
//             if(current.value===value)
//             {
//                 console.log("found at index",i);
//                 flag++;
//                 break;

                
//             }
//             current=current.next

//         }
//         if(flag===0)
//         {
//            console.log("not found anywhere"); 
//         }
//     }
//     display(){
//         let current=this.head;
//         while(current!==null)
//         {
//             console.log(current.value);
//             current=current.next
//         }
//     }
// }

// const list =new linkedList()
// let a=[12,5,43,8,23,56];
// for(let i=0;i<a.length;i++)
// {
//     list.append(a[i])
// }
// list.append(10);
// list.append(100);
// list.append(1000);
// list.append(10000);
// list.prepend(99999);
// list.prepend(8888);
// list.prepend(777);
// list.insert(88888888888888,1)
// list.remove(4)
// list.search(99999)
// list.fetchindexvalue(3)
// list.display()

class Node {
    constructor(value)
    {
        this.value=value;
        this.next=null;
    }
}

class linkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0
    }

    append(value){
        const node= new Node(value);
        if(!this.head)
        {
            this.head=node;
            this.tail=node;
            this.size ++;
        }
        else
        {
            this.tail.next=node;
            this.tail=node;
            this.size++;
        }
    }
    prepend(value){
        const node=new Node(value)
        if(!this.head)
        {
            this.head=node;
            this.tail=node;
            this.size++;
        }
        else
        {
            node.next=this.head;
            this.head=node;
            this.size++;
            
        }
    }
    insert(value,index)
    {
        const node = new Node(value)
        if(index===0)
        {
            this.head=node;
            this.tail=node;
            this.size++;
        }
        else
        {
            let current=this.head;
            for(let i=0;i<index;i++)
            {
                current=current.next
            }
            node.next=current.next
            current.next=node;
            this.size++;

        }

    }

    

    display(){
        if(this.head!==null)
        {
            let current=this.head;
          for (let i=0;i<this.size;i++)
          {
            console.log (current.value)
            current=current.next
          }

        }
    }

}
const list=new linkedList()

list.append(100);
list.append(600);
list.append(10);
list.append(1560);
list.prepend(607850);
list.prepend(189);
list.display();
