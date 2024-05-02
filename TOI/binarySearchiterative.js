function binarySearch(a,value){
    let left=0;
    let right=a.length
    while(left < right){
        let middle=Math.floor((left+right)/2);
        if(a[middle]===value){
            return middle
        }
        if(value<a[middle])
        {
            right=middle-1
        }
        else if(value>a[middle]){
            left=middle+1;
        }
    }
    return "not found"
    
}

let a=[1,2,3,4,5,6,7,8,9];
console.log(

    binarySearch(a,9)
);