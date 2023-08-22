function f_gold(arr) {
    let n = arr.length;
    let left = new Array(n).fill(-1);
    let right = new Array(n).fill(n);
    let stk = [];
    for (let i = 0; i < arr.length; i++) {
        while (stk.length > 0 && arr[stk[stk.length - 1]] >= arr[i]) {
            stk.pop();
        }
        if (stk.length > 0) {
            left[i] = stk[stk.length - 1];
        }
        stk.push(i);
    }
    stk = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stk.length > 0 && arr[stk[stk.length - 1]] > arr[i]) {
            stk.pop();
        }
        if (stk.length > 0) {
            right[i] = stk[stk.length - 1];
        }
        stk.push(i);
    }
    let mod = Math.pow(10, 9) + 7;
    return arr.reduce((acc, curr, i) => acc + (i - left[i]) * (right[i] - i) * curr, 0) % mod;
}

