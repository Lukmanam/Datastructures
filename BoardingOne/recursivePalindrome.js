// let a="MALAYALAM"
// let splitted=a.split("");
// let flag=0;
// for(let i=0;i<splitted.length;i++)
// {
// if(splitted[i]!==splitted[splitted.length-1-i])
// {

//     flag++;
//     break;
// }

// }
// if(flag===0)
// {
//     console.log("palindrome");
// }
// else
// {
//     console.log("not palindrome");
// }
let a = "AHA"
function palindrome(a, i) {
    if (i == (Math.floor(a.length / 2))) {
        console.log("PALINDROME");
        return 0
    }
    if (a[i] !== a[a.length - 1 - i]) {
        console.log("Not a palindrome");
        return false
    }
    palindrome(a, i + 1)
}

palindrome(a, 0)
