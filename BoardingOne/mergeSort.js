function Mergsort(a){
    if(a.length<2)
    {
        return a
    }
let middle=Math.floor(a.length/2);
let lefta=a.slice(0,middle);
let righta=a.slice(middle)

return merge(Mergsort(lefta),Mergsort(righta));
function merge(lefta,righta)
{
    let sorted=[];
    while (lefta.length && righta.length)
    {
        if(lefta[0]<righta[0])
        {
            sorted.push(lefta.shift())
        }
        else
        {
            sorted.push(righta.shift())
        }
    }
    return [...sorted,...lefta,...righta]
}

}

let a=[3,12,6,90,87,654,2];
console.log(Mergsort(a));
