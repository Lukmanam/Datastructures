class TrieNode{
    constructor(){
        this.children={};
        this.isEndofWord=false
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode()
    }


    insert(word){
        let node=this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new TrieNode()
            }
            node=node.children[char];
        }
        node.isEndofWord=true

    }
}


const trie=new Trie();
trie.insert("L");
trie.insert('u');
trie.insert('k');

console.log(trie);
