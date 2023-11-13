function insertionsort(a)
{
    for (let i=1;i<a.length;i++)
    {    j=i-1;
        let temp=a[i]
       
        while(j>=0 &&a[j]>temp)
        {
            a[j+1]=a[j]
            j--;
        }
        a[j+1]=temp;
    }

    console.log(a);
}

a=[21,65,78,35,3,79,79]
insertionsort(a)