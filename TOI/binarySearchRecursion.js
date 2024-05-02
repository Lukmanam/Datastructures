function binarySearch(a,target,left,right){
    if(left>right){
        return -1
    }

    let middle=Math.floor((left+right)/2);
    if(target===a[middle]){
        return middle
    }
    else if(target>a[middle]){
        return binarySearch(a,target,middle+1,right);
    }
    else
    {
        return binarySearch(a,target,left,middle-1)
    }
}

let a=[1,2,3,4,5,6,7,8,9]
let left= 0;
let right=a.length;
console.log(
    binarySearch(a,0,left,right)
);