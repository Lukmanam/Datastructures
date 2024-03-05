function selectionSort(a){
    for(let i=0;i<a.length;i++)
    {
        let small=i;
        for(j=i+1;j<a.length;j++)
        {
            if(a[j]<a[small])
            {
                small=j;
            }
        }
        if(small!==i)
        {
            [a[i],a[small]]=[a[small],a[i]]
        }
    }
    return a
}

console.log(selectionSort([978,45,896,57,321,65]));