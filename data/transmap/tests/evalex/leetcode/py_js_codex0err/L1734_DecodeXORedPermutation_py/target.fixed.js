function f_gold(encoded) {
    var n = encoded.length + 1;
    var b = 0;
    var a = b;
    for (var i = 0; i < n - 1; i += 2) {
        a ^= encoded[i];
    }
    for (var i = 0; i < n + 1; i++) {
        b ^= i;
    }
    var ans = [a ^ b];
    for (var e of encoded.reverse()) {
        ans.push(ans[ans.length - 1] ^ e);
    }
    return ans.reverse();
}

