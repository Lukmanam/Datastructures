function BinarySearch(a,target){
    let left=0;
    let right =a.length-1

    while(left<=right)
    {
        let middle=Math.floor((left+right)/2)
        if(a[middle]===target)
        {
            return middle
        }
       if(target>a[middle])
       {
        left=middle+1;
       }
       if(target<a[middle])
       {
        right=middle-1;
       }
        
    }
}
let a=[12,4,3,75,89,353,34]
const result=BinarySearch(a,4);
console.log("found at",result);
