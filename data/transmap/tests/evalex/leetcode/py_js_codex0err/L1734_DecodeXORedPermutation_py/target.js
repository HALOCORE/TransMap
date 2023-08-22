function f_gold(encoded) {
    var n = encoded.length + 1;
    var a = b = 0;
    for (var i = 0; i < n - 1; i += 2) {
        a ^= encoded[i];
    }
    for (var i = n + 1; i >= 0; i--) {
        b ^= i;
    }
    var ans = [a ^ b];
    for (var e of encoded.reverse()) {
        ans.push(ans[ans.length - 1] ^ e);
    }
    return ans.reverse();
}

