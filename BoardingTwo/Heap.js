
function heap(ar,length,parent){
    let smallest=parent
    let left=2*parent+1
    let right=2*parent+2
  
    if(left<length&&ar[left]>ar[smallest]){
     smallest=left
    }
    if(right<length&&ar[right]>ar[smallest]){
     smallest=right
    }
  
    if(smallest!==parent){
     [ar[parent],ar[smallest]]=[ar[smallest],ar[parent]]
     heap(ar,length,smallest)
    }
  }
  
  let arr = [12, 45, 78, 21, 4, 63, 59, 1, 8, 7];
  
  for(let i=Math.floor(arr.length/2)-1;i>=0;i--){
      heap(arr,arr.length,i)
  }
  
  function sort(ar){
     for(let i=ar.length-1;i>=0;i--){
         [ar[0],ar[i]]=[ar[i],ar[0]]
         heap(ar,i,0)
     }
  }
  sort(arr)
  console.log(arr);