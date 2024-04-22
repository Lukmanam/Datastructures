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
        const node = new Node(value);
        if (this.isEmpty()) {
            this.root = node
        }
        else {
            this.insertnewNode(this.root, node)

        }
    }
    insertnewNode(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node
            }
            else {
                return this.insertnewNode(root.left, node)
            }
        }
        else {
            if (node.value > root.value) {
                if (root.right === null) {
                    root.right = node
                }
                else {
                    return this.insertnewNode(root.right, node)
                }
            }
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right)
        }
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
    validate(root){
        if(root===null){
            return true
        }
        if(root.left && root.left.value>root.value)
        {
            return false
        }
        if(root.right && root.right.value<root.value){
            return false
        }
        else{
            return this.validate(root.left) && this.validate(root.right)
        }
    }
    search(root,target){
        
    }

}

const bst = new BST()

console.log( bst.isEmpty());
bst.insert(100);
bst.insert(200);
bst.insert(300);
bst.insert(456);
bst.insert(1);
bst.insert(10);
// bst.inOrder(bst.root);
// bst.preOrder(bst.root);
bst.postOrder(bst.root)
console.log(

    bst.validate(bst.root)
);

