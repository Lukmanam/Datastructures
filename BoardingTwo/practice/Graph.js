class Graph{
    constructor(){
        this.list={}
    }

    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex]=new Set();
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.list[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.list[vertex2]){
            this.addVertex(vertex2)
        }

        this.list[vertex1].add(vertex2);
        this.list[ vertex2].add(vertex1)
    }
    removeVertex(vertex){
        if(!this.list[vertex]){
            console.log("vertex not available");
        }
        else{
            
            console.log(vertex);
            for(let neighbour of this.list[vertex])
            {

                this.list[neighbour].delete(vertex)
            }
            delete this.list[vertex]
        }
    }
    removeEDdge(vertex1,vertex2){
        this.list[vertex1].delete(vertex2);
        this.list[vertex2].delete(vertex1)
    }

    bfs(start){
        let queue=[start];
        let result=[];
        let visited=new Set()
        visited.add(start)

        while(queue.length){
            let current=queue.shift();
            result.push(current);
            for(let neighbour of this.list[current]){
                if(!visited.has(neighbour)){
                    queue.push(neighbour);
                    visited.add(neighbour)
                }
            }
        }
        return result
    }


    display(){
        for(let vertex in this.list){
            console.log(vertex  +'========>'+[...this.list[vertex]])
        }
    }
}

const graph= new Graph()
graph.addVertex(100);
graph.addVertex(300);
graph.addVertex(500);
graph.addVertex(9999999999);
graph.addVertex(888888888888888888888)
graph.addEdge(500,900);
graph.addEdge(500,2999)
graph.removeEDdge(500,900)
console.log(graph.bfs(100));
graph.display()