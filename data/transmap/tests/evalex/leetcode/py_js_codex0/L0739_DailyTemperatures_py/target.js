
function f_gold(temperatures) {
    let ans = Array(temperatures.length).fill(0);
    let stk = [];
    for (let i = 0; i < temperatures.length; i++) {
        let t = temperatures[i];
        while (stk.length > 0 && temperatures[stk[stk.length - 1]] < t) {
            let j = stk.pop();
            ans[j] = i - j;
        }
        stk.push(i);
    }
    return ans;
}

