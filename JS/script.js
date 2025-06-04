function calculate(arr) {
    let res = 0
    for(let i = 0;i < arr.length; i++) {
        res = res+arr[i];
    }
    return res
}

console.log(calculate([199, 299, 499]))
