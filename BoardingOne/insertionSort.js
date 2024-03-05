// //Space complexity = O(1)
// //time Complexity = O(n^2)

function insertionSort(a){
    for(let i=1;i<a.length;i++)
    {
        let temp=a[i];
        j=i-1;
        while(j>=0 && a[j]>temp)
        {
            a[j+1]=a[j];
            j--;
        }
        a[j+1]=temp
    }
    return a
}
// }

let a=[12,1,67,2,8,56,7,57,564]
console.log(insertionSort(a));