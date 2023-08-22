function f_gold(boxes) {
    let n = boxes.length;
    let res = Array(n).fill(0);
    let total = 0;
    for (let i = 0; i < n; i++) {
        if (boxes[i] == '1') {
            res[0] += i;
            total += 1;
        }
    }
    let left = 0;
    let right = total;
    for (let i = 1; i < n; i++) {
        if (boxes[i - 1] == '1') {
            left += 1;
            right -= 1;
        }
        res[i] = res[i - 1] + left - right;
    }
    return res;
}

