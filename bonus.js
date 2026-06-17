let myArr = [2, 3, 4, 7, 11]
let K = 5
let myArr2 = [1, 2, 3, 4]
let K2 = 2
const findKthPositive = (arr, k) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] <= k) {
            k++
        } else {
            break;
        }
    }
    return k
}
console.log(findKthPositive(myArr, K));
console.log(findKthPositive(myArr2,K2));
