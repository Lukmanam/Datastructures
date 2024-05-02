function insertionsort(a){
    for(let i=0;i<a.length;i++){
        let temp=a[i];
        j=i-1;
        while(j>=0 && a[j]>temp){
            a[j+1]=a[j];
            j--;
        }
        a[j+1]=temp
    }
    return a
}
console.log(insertionsort([12,34,6,23,67,3,75,123]));