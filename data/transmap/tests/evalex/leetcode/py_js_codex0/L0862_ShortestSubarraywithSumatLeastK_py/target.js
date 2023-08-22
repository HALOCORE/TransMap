
function f_gold(nums, k) {
    var s = [0].concat(nums.reduce(function (a, b) { return a + b; }));
    var ans = float('inf');
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
    return -1 if ans == float('inf') else ans;
}

