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
class Graph{
    constructor(){
        this.list={}
    }
    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex]=new Set() 
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.list[vertex1]){
            // this.list[vertex1]=new Set()
            this.addVertex(vertex1)
        }
        if(!this.list[vertex2]){
            // this.list[vertex2]=new Set()
            this.addVertex(vertex2)
        }

        this.list[vertex1].add(vertex2);
        this.list[vertex2].add(vertex1);



    }
    display(){
        for(let vertex in this.list)
        {
            console.log(vertex + "=>" +[...this.list[vertex]]);
        }
    }
    
}

const graph1=new Graph();
graph1.addVertex(10);
graph1.addVertex(90);
graph1.addVertex(50);
graph1.addVertex(20);
graph1.addEdge(10,90)
graph1.addEdge(50,20)
graph1.addEdge(10,50)
graph1.addEdge(10,100)
graph1.display()
// console.log(graph1);