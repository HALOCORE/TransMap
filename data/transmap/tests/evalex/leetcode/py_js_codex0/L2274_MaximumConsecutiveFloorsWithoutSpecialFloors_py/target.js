function f_gold(bottom, top, special) {
    special.sort();
    var ans = Math.max(special[0] - bottom, top - special[special.length - 1]);
    for (var i = 1; i < special.length; i++) {
        ans = Math.max(ans, special[i] - special[i - 1] - 1);
    }
    return ans;
}

