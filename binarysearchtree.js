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

    // insertion 
    insert(value) {

        const newnode = new Node(value)

        if (this.root === null) {
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
            }``
        }
    }

    // Travel bst
    inorder(root) {
        if (root) {
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }

    preorder(root) {
        if (root) {
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right)

        }
    }

    postorder(root) {
        if (root) {
            this.postorder(root.left);
            this.postorder(root.right);
            console.log(root.value);
        }
    }




    // validation
    validation(root) {
        if (root == null) {
            return true
        }
        if (root.left && root.left.value > root.value) {
            return false
        }
        if (root.right && root.right.value < root.value) {
            return false
        }
        else {
            return this.validation(root.left) && this.validation(root.right)
        }
    }

    // search

    search(root, value) {
        if (root === null) {
            return false
        }
        if (root.value == value) {
            return true
        }
        if (value < root.value) {
            return this.search(root.left, value)
        }
        else {
            return this.search(root.right, value)
        }
    }

}

const bstt = new BST();
bstt.insert(10)
bstt.insert(20)
bstt.insert(30)
bstt.insert(19)
bstt.insert(12)
console.log(
bstt.validation(bstt.root));
console.log(bstt.isEmpty());
bstt.preorder(bstt.root)
// bstt.postorder(bstt.root)
// bstt.inorder(bstt.root)
// console.log(bstt.search(bstt.root, 2))
// console.log(bstt.validation(bstt.root));