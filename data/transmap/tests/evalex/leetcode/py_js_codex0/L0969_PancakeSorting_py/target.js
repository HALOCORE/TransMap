
function f_gold(arr) {
    function reverse(arr, j) {
        let i = 0;
        while (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i, j = i + 1, j - 1;
        }
    }
    let n = arr.length;
    let ans = [];
    for (let i = n - 1; i > 0; i--) {
        let j = i;
        while (j > 0 && arr[j] != i + 1) {
            j -= 1;
        }
        if (j < i) {
            if (j > 0) {
                ans.push(j + 1);
                reverse(arr, j);
            }
            ans.push(i + 1);
            reverse(arr, i);
        }
    }
    return ans;
}

