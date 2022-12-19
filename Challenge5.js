//Return true if the largest value in the array is equal to the sum of the remaining values, otherwise return false.

function ArraySum(arr) {
    let max = Math.max(...arr)

    let toplam = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < max) {
            toplam = toplam + arr[i]
        }
    }

    if (toplam == max) {
        return true;
    } else {
        return false;
    }
    return arr;
}

console.log(ArraySum([1, 2, 4, 6, 13]));
//returns true 1+2+4+6=13

console.log(ArraySum([1, 2, 4, 34, 22]));
//returns false 1+2+4+22  != 34

