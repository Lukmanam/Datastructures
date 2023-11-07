function quicksort(a)
{
    if(a.length<2)
    {
        return a
    }
    let pivot=a[0]
    let left=[]
    let right=[]
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


let a=[12,456,86,42,67,24]
let sorted=quicksort(a)
console.log(sorted);