function f_gold(num) {
    if (num == 0) {
        return '0';
    }
    if (num < 0) {
        return '-' + f_gold(-num);
    }
    var ans = [];
    while (num) {
        ans.push(String(num % 7));
        num = Math.floor(num / 7);
    }
    return ans.reverse().join('');
}

