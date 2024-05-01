// function binarySearch(a, value) {
//     let left = 0
//     right = a.length - 1
//     while (left <= right) {
//         let middle = Math.floor((left + right) / 2)
//         if (value === a[middle]) {
//             console.log("found at", middle);
//             return middle
//         }
//         if (value > a[middle]) {
//             left = middle + 1
//         }
//         else {
//             right = middle - 1
//         }
//     }
//     console.log("not found");
// }

// a =[12,34,56,78,89]

// binarySearch(a, 34)

function binarySearch(a,value){
    let left=0;
    right=a.length-1;
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if(a[middle]===value){
            return middle
        }
        if(a[middle]<value){
           left=middle+1
        }
        else{
            right=middle-1;
        }
    }
}

let a=[1,2,3,4,5,6,7,8,9];
console.log(binarySearch(a,5));
