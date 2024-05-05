function insertionSort(a){
    for(let i=0;i<a.length;i++){
        let j=i-1;
        let temp=a[i];
        while(j>=0 &&a[j]>temp){
            a[j+1]=a[j];
            j--;
        }
        a[j+1]=temp;
    }
    return a
}
console.log(

    insertionSort([88,66,999,454,785,21,6764,34])
);