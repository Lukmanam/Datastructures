function quicksort(a){
    if(a.length<2)
    {
        return a;
    }
    let pivot=a[0];
    let left=[];
    let right=[];
    for(let i=1;i<a.length;i++)
    {
        if(a[i]<pivot)
        {
            left.push(a[i])
        }
        else
        {
            right.push(a[i])
        }

    }
    return [...quicksort(left),pivot,...quicksort(right)]

}

let a=[34,2,67,3,5,12]
console.log(quicksort(a));