
function f_gold(s, queries) {
    let n = s.length;
    let presum = new Array(n + 1).fill(0);
    for (let i = 0; i < s.length; i++) {
        presum[i + 1] = presum[i] + (s[i] == '*');
    }
    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);
    let l = -1;
    let r = -1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '|') {
            l = i;
        }
        left[i] = l;
    }
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == '|') {
            r = i;
        }
        right[i] = r;
    }
    let ans = new Array(queries.length).fill(0);
    for (let k = 0; k < queries.length; k++) {
        let i = right[queries[k][0]];
        let j = left[queries[k][1]];
        if (i >= 0 && j >= 0 && i < j) {
            ans[k] = presum[j] - presum[i + 1];
        }
    }
    return ans;
}

