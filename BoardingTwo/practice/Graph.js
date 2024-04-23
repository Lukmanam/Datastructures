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
            this.addVertex(vertex1)
        }
        if(!this.list[vertex2]){
            this.addVertex[vertex2]
        }

        this.list[vertex1].add(vertex2);
        this.list[vertex2].add(vertex1);
    }
    deleteVertex(vertex){
        if(!this.list[vertex])
        {
            console.log("vertex not available");
        }
        else
        {
            for(let neighbour in vertex)
            {
                this.list[neighbour].delete(vertex)
            }
            delete this.list[vertex]

        }
    }
    deleteEdge(vertex1,vertex2){
        this.list[vertex1].delete(vertex2);
        this.list[vertex2].delete(vertex1)
    }

    BFS(start){
        let result=[];
        let queue=[start];
        let visited= new Set();
        console.log(visited,"start val");

        while(queue.length){
            let current=queue.shift();
            
            result.push(current);
            for(let vertex of this.list[current])
            {
                console.log(vertex,"vvvvvvvvvvv");
                if(!visited.has(vertex)){
                    console.log("fdfsdsd");
                    queue.push(vertex)
                    visited.add(vertex)
                }r
            }
        }
    }

    display(){
        console.log(this.list);
        for(let vertex in this.list){
            console.log(vertex +'===>' + [...this.list[vertex]]);
        }
    }
}
const graph=new Graph()
graph.addVertex(100);
graph.addVertex(200);
graph.addEdge(100,200)
graph.addEdge(300,200)
// graph.display()
console.log(
    graph.BFS(100)
);