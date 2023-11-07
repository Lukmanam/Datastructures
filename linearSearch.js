

function linearSearch(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1;

}


let arr = [2, 4, 1, 68, 68, 35]
const result = linearSearch(arr, 68)
if (result != -1) {
    console.log(`found ${result}`);
}
else {
    console.log("not found");
}



