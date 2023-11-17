class Graph{
    constructor()
    {
        this.adjacencyList=new Map();
    }


    addVertex(vertex){
        if(!this.adjacencyList.has(vertex))
        {
            this.adjacencyList.set(vertex,[]);
        }
    }

    addEdge(vertex1,vertex2)
    {
        if(!this.adjacencyList.has(vertex1))
        {
            this.addVertex(vertex1)
            
        }
        if(this.adjacencyList.has(vertex2))
        {
            this.addVertex(vertex2)
        }
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1)
    }
    display(){
        for(let[vertex,edges] of this.adjacencyList)
        {
            console.log(`${vertex}--->${edges.join(', ')}`);
        }
    }
}


const graph=new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D')

graph.addEdge('A','B');
graph.addEdge('B','C')
graph.addEdge('C','D')
graph.addEdge('D','A')


graph.display()
