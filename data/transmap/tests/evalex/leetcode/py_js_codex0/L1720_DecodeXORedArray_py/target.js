function f_gold(encoded, first) {
    var ans = [first];
    for (var e of encoded) {
        ans.push(ans[ans.length - 1] ^ e);
    }
    return ans;
}

