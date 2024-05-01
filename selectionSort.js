// function selectionSort(a)
// {
//     for(let i=0;i<a.length;i++)
//     {
//          let small=i
//          for(let j=i+1;j<a.length;j++)
//          {
//             if(a[j]<a[small])
//             {
//                 small=j
//             }
//          }
//          if(small!==i)
//          {
//             [a[i],a[small]]=[a[small],a[i]]
//          }
//     }
//     console.log(a);
// }
let a=[12,2,45,67,4,68,1999]

// console.log(selectionSort(a));

function selectionSort(a){
    for(let i=0;i<a.length;i++){
        let small=i;
        for(let j=i+1;j<a.length;j++){
            if(a[j]<a[small]){
                small=j
            }
        }
        if(i!==small){
            [a[small],a[i]]=[a[i],a[small]]
        }
    }
    return a
}
console.log(
    selectionSort(a)
);