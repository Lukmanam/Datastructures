// search(root,value)
// {
//     if(root.isEmpty()){
//         return false
//     }
//     if(root.value===value){
//         return true
//     }
//     if(root.left && value<root.value){
//         search(root.left,value)
//     }
//     else if(root.right && root.value<value)
//     {
//         search(root.right,value)
//     }
// }

let a='10111213141516171819'
let b='12356789'
let c='123456789'

function check(a){

    let flag=0
    
    for(let i=0;i<a.length;i++)
    {
                if(a[i]>a[i+1])
                {
                   flag++; 
                }
        for(let j=i;j<a.length;j++){
            let num=a[j]+a[j+1];
        }
    }
    if(flag!==0){
        return false
    }
    else
    {
        return true;
    }
}
console.log(check(c));




