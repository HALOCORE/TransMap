
function f_gold(nums, k) {
    var s = [0].concat(nums.map((sum => value => sum += value)(0)));
    var ans = Number.POSITIVE_INFINITY;
    var q = [0];
    for (var i = 1; i < s.length; i++) {
        while (q.length && s[i] - s[q[0]] >= k) {
            ans = Math.min(ans, i - q.shift());
        }
        while (q.length && s[i] <= s[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);
    }
    return (ans == Number.POSITIVE_INFINITY) ? -1 : ans;
}

