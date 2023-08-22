function f_gold(num1, num2) {
    var i = num1.length - 1;
    var j = num2.length - 1;
    var carry = 0;
    var ans = [];
    while (i >= 0 || j >= 0 || carry) {
        carry += (0 if i < 0 else parseInt(num1[i])) + (0 if j < 0 else parseInt(num2[j]));
        carry, v = divmod(carry, 10);
        ans.push(String(v));
        i, j = i - 1, j - 1;
    }
    return ans.reverse().join('');
}

