function mergeSort(a){
    if(a.length<2){
        return a
    }
    let middle= Math.floor(a.length/2)
    let lefta=a.slice(0,middle);
    let righta=a.slice(middle)

    return merge(mergeSort(lefta),mergeSort(righta))

    function merge(lefta,righta){
        let sorteda=[];
        while(lefta.length && righta.length){
            if(lefta[0]<righta[0]){
                sorteda.push(lefta.shift())
            }
            else{
                sorteda.push(righta.shift())
            }
        }
        return [...sorteda,...lefta,...righta]
    }
}

console.log(

    mergeSort([453,8,53,24,21,456,432])
);