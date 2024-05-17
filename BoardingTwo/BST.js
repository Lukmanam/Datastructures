// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null
//     }
// }

// class BST {
//     constructor() {
//         this.root = null
//     }

//     isEmpty() {
//         return this.root === null
//     }

//     insert(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.root = node
//         }
//         else {
//             this.insertnewNode(this.root, node)
//         }
//     }

//     insertnewNode(root, node) {
//         if (node.value < root.value) {
//             if (root.left === null) {
//                 root.left = node
//             }
//             else {
//                 this.insertnewNode(root.left, node)
//             }
//         }
//         else {
//             if (root.right === null) {

//                 root.right = node
//             }
//             else {
//                 this.insertnewNode(root.right, node)

//             }
//         }

//     }


//     inorder(root) {
//         if (root) {
//             this.inorder(root.left);
//             console.log(root.value);
//             this.inorder(root.right)
//         }
//     }

//     preOrder(root) {
//         if (root) {
//             console.log(root.value);
//             this.preOrder(root.left);
//             this.preOrder(root.right)
//         }
//     }
//     postOrder(root) {
//         if (root) {
//             this.postOrder(root.left);
//             this.postOrder(root.right);
//             console.log(root.value);
//         }
//     }

//     search(root, value) {
//         if (root === null) {
//             return false;
//         }
//         console.log(root, "root");
//         if (root.value === value) {
//             return true
//         }
//         if (value < root.value) {
//             return this.search(root.left, value)
//         }
//         else {
//             return this.search(root.right, value)
//         }



//     }

//     validation(root) {
//         if (root === null) {
//             return true
//         }
//         if (root.left && root.left.value > root.value) {
//             return false
//         }
//         if (root.right && root.right.value < root.value) {
//             return false
//         }
//         else
//         {
//             return this.validation(root.left)&& this.validation(root.right)
//         }

//     }

//     minValueNode(root){
//         let current=root;
//         while(current.left!==null){
//             current=current.left;
//             return current
//         }
//     }

//     deleteNode(root,value){
//         console.log("trying to delete Node",root);
//         if(root===null){
//             return root
//         }
//         if(value<root.value){
//             this.deleteNode(root.left,value)
//         }
//         else if(value>root.value){
//             this.deleteNode(root.right,value)
//         }
//         else{
//             if(root.left===null){
//                 let temp=root.right;
//                 root=null;
//                 return temp
//             }
//             else if(root.right===null){
//                 let temp=root.left;
//                 root=null;
//                 return temp
//             }

//             let temp=this.minValueNode(root.right);
//             root.value=temp.value;
//             root.right=this.deleteNode(root.right,temp.value)
//         }
//         return root
//     }



// }

// const bst = new BST()
// bst.insert(100);
// bst.insert(200);
// bst.insert(300);
// // console.log(bst.search(bst.root, 300));
// console.log("result of validation is",bst.validation(bst.root));
// bst.deleteNode(bst.root,100)
// bst.postOrder(bst.root);

class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;

    }
}
class BST{
    constructor(){
        this.root=null;
    }

    isEmpty(){
        return this.root===null
    }
    insert(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.root=node
        }
        else{
            this.insertnewnode(this.root,node)
        }
    }


    insertnewnode(root,node){
        if(node.value<root.value){
            if(root.left===null)
                root.left=node
            else{
                this.insertnewnode(root.left,node)
            }
        }
        else{
            if(root.right===null){
                root.right=node
            }else{
                this.insertnewnode(root.right,node)
            }
        }
    }

    inorder(root){
        this.inorder(root.left);
        console.log(root.value);
        this.inorder(root.right)
    }
    preorder(root){
        console.log(root.value);
        this.preorder(root.left);
        this.preorder(root.right)
    }
    postorder(root){
        this.postorder(root.left);
        this.postorder(root.right);
        console.log(root.value);
    }

    search(root,value){
        if(root==null){
            return false
        }
       if(root.value===value){
        return true
       }
       else if(value<root.value){
        this.search(root.left,value)
       }
       else{
        this.search(root.right,value)
       }
    }

}

