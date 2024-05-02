function selectioSort(a){
    for(let i=0;i<a.length;i++){
        let small=i;
        for(let j=i+1;j<a.length;j++){
            if(a[j]<a[small])
            {
                small=j
            }
        }
        if(i!==small){
            [a[i],a[small]]=[a[small],a[i]]
        }
    }
    return a
}

let a=[76,23,6,32,8,65,52]
console.log(
    selectioSort(a)
);
