class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
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
        const node = new Node(value)
        if (this.isEmpty()) {
            this.root = node
        }
        else{
            this.insertnewNode(this.root,node)
        }
    }

    insertnewNode(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node
            }
            else {
                this.insertnewNode(root.left, node)
            }
        }
        else {
            if (root.right === null){

                root.right = node
            }
            else {
                this.insertnewNode(root.right,node)
                
            }
        }

    }


    inorder(root){
        if(root){
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right)
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    search(value){
        
    }



}

const bst =new BST()
bst.insert(100);
bst.insert(200);
bst.insert(300);
bst.postOrder(bst.root)


