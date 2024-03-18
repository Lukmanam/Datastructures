// function BinarySearch(a,target,left,right){

//     if(left>right)
//     {
//         return -1
//     }
//     let middle=Math.floor((left+right)/2);
//     if(a[middle]==target)
//     {
//         return middle;
//     }
//     if(target>a[middle])
//     {
//        return BinarySearch(a,target,middle+1,right)
//     }
//     if(a[middle]>target)
//     {
//        return BinarySearch(a,target,left,middle-1)
//     }

// }

// let a=[12,57,3,6,45,98,35]

// console.log(

//     BinarySearch(a,45,0,a.length)
// );



function binarySearch(a,left,right,target)
{

if(left>right)
{

return -1
}

let middle=Math.floor((left+right)/2);

if(a[middle]===target)
{
console.log(middle)
  
return middle
}

if(target>a[middle])
{
 return binarySearch(a,middle+1,right,target)
}

else
{
return binarySearch(a,left,middle-1,target)
}

}

let a=[1,3,5,7,9,10,67];
let left=0;
right=a.length-1;
target=10;



let result=binarySearch(a,left,right,target);