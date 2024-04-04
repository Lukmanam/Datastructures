class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}
class BST {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newnode = new Node(value)
        if (this.isEmpty) {
            this.root = newnode
        }
        else {
            this.insertnode(this.root, newnode)
        }
    }
    insertnode(root, newnode) {
        if (newnode.value < root.value) {
            if (root.left === null) {
                root.left = newnode
            }
            else {
                this.insertnode(root.left, newnode)
            }
        }
        else {

            if (root.right === null) {
                root.right = newnode
            }
            else {
                this.insertnode(root.right, newnode)
            }
        }
    }
    
    // TRAVERSAL
    // INOIRDER TRAVERSAL

    inorder(root){
        this.inorder(root.left)
        console.log(root.value);
        this.inorder(root.right)

    }
    preorder(root)
    {
        console.log(root.value);
        this.preorder(root.left);
        this.preorder(root.right)
    }
    postorder(root)
    {
        this.postorder(root.left)
        this.postorder(root.right);
        console.log(root.value);
    }


  
    }




const bst1 = new BST();

console.log(bst1.isEmpty());
bst1.insert(100);
bst1.display()