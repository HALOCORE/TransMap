function f_gold(word) {
    var counter = { 0: 1 };
    var state = 0;
    var ans = 0;
    for (var i = 0; i < word.length; i++) {
        state ^= 1 << (word.charCodeAt(i) - 'a'.charCodeAt(0));
        ans += counter[state];
        for (var j = 0; j < 10; j++) {
            ans += counter[state ^ (1 << j)];
        }
        counter[state] += 1;
    }
    return ans;
}

