function quickSort(a){
    if(a.length<2){
        return a
    }
    let pivot=a[0];
    let left=[];
    let right=[];

    for(let i=1;i<a.length;i++){
        if(pivot>a[i]){
            left.push(a[i]);
        }
        else{
            right.push(a[i])
        }    
    }
    return [...quickSort(left),pivot,...quickSort(right)]
    
}


console.log(quickSort([1,876,4,76,32,79,32,54]));