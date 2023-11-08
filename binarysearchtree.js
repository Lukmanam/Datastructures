class Node{
    constructor(value)
    {
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class BST{
    constructor(){
        this.root=null
    }

    isEmpty()
    {
        return this.root=null
    }

    insert(value)
    {

    const newnode= new Node(value)

        if(this.root===null)
        {
            this.root=newnode
        }
        else
        {
            this.insertnode(this.root,newnode)
        }
    }

    insertnode(root,newnode)
    {
        if(newnode.value<root.value)
        {
            if(root.left===null)
            {
                root.left=newnode
            }
            else
            {
                this.insertnode(root.left,newnode)
            }
        }
        else
        {
            if(root.right===null)
            {
                root.right=newnode
            }
            else
            {
                this.insertnode(root.right,newnode)
            }
        }
    }

    // Travel bst
    inorder(root)
    {
        if(root)
        {
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }

    preorder(root)
    {
        if(root)
        {
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right);

        }
    }

    postorder(root)
    {
        if(root)
        {
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value);
        }
    }

}

const bstt=new BST();
bstt.insert(20)
bstt.insert(25)
bstt.insert(16)
bstt.insert(19)
bstt.insert(12)

bstt.preorder(bstt.root)