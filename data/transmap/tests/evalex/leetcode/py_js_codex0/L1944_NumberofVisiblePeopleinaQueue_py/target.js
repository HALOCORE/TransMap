
function f_gold(heights) {
    let n = heights.length;
    let ans = Array(n).fill(0);
    let stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length) {
            ans[i] += 1;
            if (heights[i] > stack[stack.length - 1]) {
                stack.pop();
            } else {
                break;
            }
        }
        stack.push(heights[i]);
    }
    return ans;
}

