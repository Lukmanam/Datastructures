function binarySearch(a,target,left,right){
    if(left>right)
    {
        return -1
    }
    let middle=Math.floor((left+right)/2)
    {
        if(a[middle]===target)
        {
            return target
        }
        if(target<a[middle])
        {
        return binarySearch(a,target,left,middle-1)
        }
        else{
            return binarySearch(a,target,middle+1,right)
        }
    }

}

let left=0;
let a=[1,2,3,4,5,6,7,8,9];
let right=a.length-1
let target=16
console.log(binarySearch(a,target,left,right))
