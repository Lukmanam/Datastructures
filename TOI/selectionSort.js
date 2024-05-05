function selectionSort(a){
    for(let i=0;i<a.length;i++){
        let small=i;
        for(let j=i+1;j<a.length;j++){
            if(a[j]<a[small]){
                small=j;
            }
        }
        if(i!==small){
            [a[i],a[small]]=[a[small],a[i]]
        }
    }
    return a
}
console.log(selectionSort([1,2,6,3,8,6,398,41,4534]));