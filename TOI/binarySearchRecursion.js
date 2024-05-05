function binarySearch(a,target,left,right){

    if(left>right){
        return -1
    }

    let middle=Math.floor((left+right)/2)
    if(a[middle]===target){
        return middle
    }
    else if(target<a[middle]){
        return binarySearch(a,target,left,middle-1)
    }
    else{
        return binarySearch(a,target,left+1,right)
    }
}

let a=[1,2,3,4,5,6,7,8,9,10];
console.log(

    binarySearch(a,1,0,a.length-1)
);