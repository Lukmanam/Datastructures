
/// Time Complexity O(n^2)
/// Space Complexity O(1)
/// Best Case Complexity O(n)
function bubbleSort(a){
    for(let i=0;i<a.length;i++)
    {
        for(j=i+1;j<a.length;j++)
        {
            if(a[i]>a[j])
            {
                let temp=a[i];
                a[i]=a[j]
                a[j]=temp;
            }
        }
    }
    return a

}

a=[23,4,675,1,88,55]

console.log(bubbleSort(a));

