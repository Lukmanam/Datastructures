function BinarySearch(a,target,left,right){

    if(left>right)
    {
        return -1
    }
    let middle=Math.floor((left+right)/2);
    if(a[middle]==target)
    {
        return middle;
    }
    if(target>a[middle])
    {
       return BinarySearch(a,target,middle+1,right)
    }
    if(a[middle]>target)
    {
       return BinarySearch(a,target,left,middle-1)
    }

}

let a=[12,57,3,6,45,98,35]

console.log(

    BinarySearch(a,45,0,a.length)
);



