function binarySearch(a,target){
     let left=0;
     let right=a.length-1;
     while(left<right){
         console.log(left,right);
         let middle=Math.floor((left+right)/2)
        if(a[middle]===target){
            return middle
        }
        else if(target<a[middle]){
            right=middle-1
        }
        else{
            left=middle+1
        }
     }   

}
console.log(

    binarySearch([1,2,3,4,5,6,7,8,9,10],9)
);