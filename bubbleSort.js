function bubblesort(a) {
    for (let i = 0; i < a.length; i++) {

        for (j = 0; j < a.length; j++) {
            if (a[j] > a[j + 1]) {
                let temp = a[j]
                a[j] = a[j + 1]
                a[j + 1] = temp;
            }
        }


    }
    console.log(a);
}
let a = [12, 45, 6, 24, 54, 32]
bubblesort(a)