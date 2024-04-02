class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}
class BST {
    constructor() {
        this.root === null
    }
    isEmpty() {
        return this.root === null
    }

    insert(value)
    {
        const newnode=new Node(value)
        if(this.isEmpty)
        {
            this.root=newnode
        }
        else
        {
            insertNode(this.root,newnode)
        }
  
    }
    insertNode(root,newnode)
    {
        if(newnode.value<root.value)
        {
            
        }
    }

}

const bst1 = new BST();
console.log(bst1.isEmpty());