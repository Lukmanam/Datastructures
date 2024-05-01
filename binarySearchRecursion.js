// function binarySearch(a, value, left, right) {
//     if (left > right) {
//         return -1
//     }
//     let middle = Math.floor((left + right) / 2)
//     if (a[middle] === value) {
//         return middle
//     }
//     if (a[middle] < value) {

//         return binarySearch(a, value, middle + 1, right)
//     }
//     else {
//         return binarySearch(a, value, left, middle - 1)
//     }
// }
// let a = [1, 2, 4, 6, , 68, 24]
// console.log(binarySearch(a, 4, 0, a.length - 1));

function binarySearch(a,target,left,right){
    if(left>right){
        return -1
    }
    let middle=Math.floor((left+right)/2);
    if(a[middle]===target){

        return middle
    }
    else if(a[middle]<target){
     return binarySearch(a,target,middle+1,right)  
    }
    else{
       return binarySearch(a,target,left,middle-1)
    }
}

let a=[1,2,3,5,6,12];
console.log(binarySearch(a,5,0,a.length-1))
