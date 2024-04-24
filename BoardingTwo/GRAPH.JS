class Graph {
    constructor() {
        this.list = {}
    }


    //ADD VERTEX
    addVertex(vertex) {
        if (!this.list[vertex]) {
            this.list[vertex] = new Set()
        }

    }

    // ADD EDGE

    addEdge(vertex1, vertex2) {
        if (!this.list[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.list[vertex2]) {
            this.addVertex(vertex2)
        }
        this.list[vertex1].add(vertex2);
        this.list[vertex2].add(vertex1);
    }
    
    
    
    // DELETE VERTEX
    
    deleteVertex(vertex) {
        if (!this.list[vertex]) {
            console.log("vertex not Available");
        }
        else {
            for (let neighbour in this.list) {
                this.list[neighbour].delete(vertex)
            }
            delete this.list[vertex]
        }
    }
    
    
    //DELETE EDGE
    
    deleteEdge(vertex1, vertex2) {
        this.list[vertex1].delete(vertex2);
        this.list[vertex2].delete(vertex1);
    }
    
    
    //DISPLAY    
        display() {
            for (let vertex in this.list) {
                console.log(vertex + '===>' + [...this.list[vertex]])
            }
        }
    
    
        BFS(start){
            let visited=new Set();
             let q=[start];
             let result = []
             visited.add(start)
             while(q.length){
                 let current = q.shift();
                 result.push(current)
                 for(let neighbour of this.list[current])
                 {
                     if(!visited.has(neighbour))
                     {
                         q.push(neighbour);
                         visited.add(neighbour)
                     }
                     
                 }
             }
             return result;
     
         }

        // BFS(start){
        //     let result=[];
        //     let visited=new Set();
        //     let queue=[start]
        //     visited.add(start)
        //     while(queue.length){
        //         let current=queue.shift()
        //         result.push(current);
        //         for(let neighbour of this.list[current])
        //         {
        //             if(!visited.has(neighbour)){
        //                 queue.push(neighbour)
        //                 visited.add(neighbour)
        //             }
        //         }
        //     }
        //     return result
        // }
}


const graph = new Graph()
graph.addVertex(100);
graph.addVertex(123);
graph.addEdge(100, 123);
graph.addEdge(12432, 68534);
graph.addEdge(674, 856)
graph.deleteVertex(123);
graph.deleteVertex(100);
graph.BFS()