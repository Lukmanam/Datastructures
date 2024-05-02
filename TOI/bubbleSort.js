function bubbleSort(a){
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a.length;j++){
            if(a[j]>a[j+1]){
                let temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
            }
        }
    }
    return a
}
let a=[34,7,121,56,12,678,6,21]
console.log(
    bubbleSort(a)
);