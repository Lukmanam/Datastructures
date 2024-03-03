// class Graph{
//     constructor()
//     {
//         this.adjacencyList=new Map();
//     }


//     addVertex(vertex){
//         if(!this.adjacencyList.has(vertex))
//         {
//             this.adjacencyList.set(vertex,[]);
//         }
//     }

//     addEdge(vertex1,vertex2)
//     {
//         if(!this.adjacencyList.has(vertex1))
//         {
//             this.addVertex(vertex1)
            
//         }
//         if(this.adjacencyList.has(vertex2))
//         {
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList.get(vertex1).push(vertex2);
//         this.adjacencyList.get(vertex2).push(vertex1)
//     }
//     display(){
//         for(let[vertex,edges] of this.adjacencyList)
//         {
//             console.log(`${vertex}--->${edges.join(', ')}`);
//         }
//     }
// }


// const graph=new Graph();

// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D')

// graph.addEdge('A','B');
// graph.addEdge('B','C')
// graph.addEdge('C','D')
// graph.addEdge('D','A')


// graph.display()
// let a=[12,45,67,3,67,3,78,7]
// for(let i=0;i<a.length/2;i++)
// {
//     let temp=a[i];
//     a[i]=a[a.length-1-i];
//     a[a.length-1-i]=temp
// }

// console.log(a);

// (()=>{
//     console.log("hai")
// })()

// const promise=new Promise((resolve,reject)=>{
//     let data=false;
//     if(data)
//     {
//         resolve("data")
//     }
//     else
//     {
//         reject("no data")
//     }

// })
// async function datafetch(){
// try{
//     let x=await promise
//     console.log(x)
// }
// catch(error)
// {
//     console.log(error)
// }
// }
// datafetch()
class A{
    constructor()
    {this.x="lukman";
}
         a(){
            
            console.log(this.x)
        }
    
    

    
}

class B extends A{
    call(){
        this.a();
    }
}

const bb=new B()
bb.call()