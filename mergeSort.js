// function mergesort(a)
// {
//     if(a.length<2)
//     {
//         return a
//     }
//     let middle=Math.floor(a.length/2)
//     let lefta=a.slice(0,middle);
//     let righta=a.slice(middle);


//    return merge(mergesort(lefta),mergesort(righta))


// function merge(lefta,righta)
// {
//     let sorteda=[]
//     while(lefta.length && righta.length )
//     {
//         if(lefta[0]<righta[0])
//         {
//             sorteda.push(lefta.shift())
//         }
//         else
//         {
//             sorteda.push(righta.shift())
//         }
//     }
//     return [...sorteda,...lefta,...righta]


// } 
// }
// let a=[12,34,56,13,33,99,22]
// console.log(mergesort(a));


const mergesorted = ((a) => {

    if (a.length < 2) {
        return a
    }
    let middle = Math.floor(a.length / 2)
    let lefta = a.slice(0, middle)
    let righta = a.slice(middle)
    return merge(mergesorted(lefta), mergesorted(righta))
})

const merge = ((lefta, righta) => {
    let sorteda = []
    while (lefta.length && righta.length) {
        if (lefta[0] < righta[0]) {
            sorteda.push(lefta.shift())
        }
        else {
            sorteda.push(righta.shift())
        }
    }
    return [...sorteda, ...lefta, ...righta]
})

let a = [12, 45, 2, 67, 34, 68, 32]
console.log(mergesorted(a));

