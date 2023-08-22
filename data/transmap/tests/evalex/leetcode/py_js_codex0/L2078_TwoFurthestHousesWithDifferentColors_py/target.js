function f_gold(colors) {
    var ans = 0;
    var n = colors.length;
    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {
            if (colors[i] != colors[j]) {
                ans = Math.max(ans, Math.abs(i - j));
            }
        }
    }
    return ans;
}

