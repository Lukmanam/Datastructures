class Node
{
    constructor(value)
{
    this.value=value
    this.left=null;
    this.right=null
}
}

class BST{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }

    insert(value){
        const node=new Node(value);
        if(this.isEmpty)
        {
            this.root=node
        }
        else
        {
            this.insertnewnode(node,this.root)
        }

    }
    insertnewnode(node,root){
        if(node.value<root.value)
        {
            if(root.left===null)
            {
                root.left=node
            }
            else{
                return this.insertnewnode(root.right,node)
            }
        }

    }


    inorder(root){
        if(root)
        {
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
        }

    }
    preorder(root){
if(root)
{
    console.log(root.value);
    this.preorder(root.left)
    this.preorder(root.right)
}
    }
    postorder(root){

    }

    serach(){

    }

    bstValidation(){

    }
}
