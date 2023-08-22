function f_gold(asteroids) {
    let ans = [];
    for (let a of asteroids) {
        if (a > 0) {
            ans.push(a);
        } else {
            while (ans.length > 0 && ans[ans.length - 1] > 0 && ans[ans.length - 1] < -a) {
                ans.pop();
            }
            if (ans.length > 0 && ans[ans.length - 1] == -a) {
                ans.pop();
            } else if (ans.length == 0 || ans[ans.length - 1] < -a) {
                ans.push(a);
            }
        }
    }
    return ans;
}

