function linearSearch(a,target){
    for(let i=0;i<a.length;i++){
        if(a[i]===target){
            return i
        }
    }

    return -1;

}
let a=[1,2,3,4,5,6,7,8]
const result=linearSearch(a,8);
if(result===-1){
    console.log("Not Found");
}
else{
    console.log(result);
}