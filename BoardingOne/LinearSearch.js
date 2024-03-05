function linearSearch(a,target)
{
    for (let i=0;i<a.length;i++)
    {
        if(a[i]===target)
        {
            return i
        }
    }

    return -1
}
let a=[65,2,8,23,56,23424,57,26]
const result=linearSearch(a,57);
if(result!=-1)
{
    console.log("Found at " ,result);
}
else{
    console.log("not found");
}

a=[43,12,67,35,67,32]
linearSearch(a,32)