function f_gold(num, k) {
    var i = num.length - 1;
    var carry = 0;
    var ans = [];
    while (i >= 0 || k || carry) {
        carry += (0 if i < 0 else num[i]) + (k % 10);
        carry = Math.floor(carry / 10);
        var v = carry % 10;
        ans.push(v);
        k = Math.floor(k / 10);
        i -= 1;
    }
    return ans.reverse();
}

