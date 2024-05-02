function linearSearch(a,target){
    for(let i=0;i<a.length;i++){
        if(a[i]===target){
            return i
        }
    }
    return -1
}

let a=[12,34,6,12,57,21,32]
const result=linearSearch(a,3);
if(result!=-1){
    console.log('found at',result);
}
else{
    console.log("Not found");
}