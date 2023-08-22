function f_gold(hours) {
    let ans = s = 0;
    let seen = {};
    for (let i = 0; i < hours.length; i++) {
        s += (hours[i] > 8) ? 1 : -1;
        if (s > 0) {
            ans = i + 1;
        }
        else {
            if (!(s in seen)) {
                seen[s] = i;
            }
            if (s - 1 in seen) {
                ans = Math.max(ans, i - seen[s - 1]);
            }
        }
    }
    return ans;
}

