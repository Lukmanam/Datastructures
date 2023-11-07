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

a=[12,1,45,67,35,67,3]
insertionsort(a)