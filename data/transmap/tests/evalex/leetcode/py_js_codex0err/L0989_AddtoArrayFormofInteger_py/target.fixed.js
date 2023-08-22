function f_gold(num, k) {
    var i = num.length - 1;
    var carry = 0;
    var ans = [];
    while (i >= 0 || k.length > 0 || carry) {
        carry += (i < 0 ? 0 : num[i]) + (k % 10);
        var v;
        [carry, v] = [Math.floor(carry / 10), carry % 10];
        ans.push(v);
        k = Math.floor(k / 10);
        i -= 1;
    }
    return ans.reverse();
}

