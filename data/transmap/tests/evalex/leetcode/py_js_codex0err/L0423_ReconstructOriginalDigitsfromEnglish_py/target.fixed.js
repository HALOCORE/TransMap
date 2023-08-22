function f_gold(s) {
    var counter = new Map();
    for (var i = 0; i < s.length; i++) {
        if (counter.has(s[i])) {
            counter.set(s[i], counter.get(s[i]) + 1);
        }
        else {
            counter.set(s[i], 1);
        }
    }
    var cnt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    cnt[0] = counter.get('z') ?? 0;
    cnt[2] = counter.get('w') ?? 0;
    cnt[4] = counter.get('u') ?? 0;
    cnt[6] = counter.get('x') ?? 0;
    cnt[8] = counter.get('g') ?? 0;
    cnt[3] = (counter.get('h') ?? 0) - cnt[8];
    cnt[5] = (counter.get('f') ?? 0) - cnt[4];
    cnt[7] = (counter.get('s') ?? 0) - cnt[6];
    cnt[1] = (counter.get('o') ?? 0) - cnt[0] - cnt[2] - cnt[4];
    cnt[9] = (counter.get('i') ?? 0) - cnt[5] - cnt[6] - cnt[8];
    var result = "";
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < cnt[i]; j++) {
            result += i;
        }
    }
    return result;
}

