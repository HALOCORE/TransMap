function f_gold(word) {
    var ans, n;
    ans = 0;
    n = word.length;
    for (var i = 0; i < n; i++) {
        if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u') {
            ans += (i + 1) * (n - i);
        }
    }
    return ans;
}

