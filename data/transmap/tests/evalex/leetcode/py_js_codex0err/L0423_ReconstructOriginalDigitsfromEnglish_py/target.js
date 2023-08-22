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
    cnt[0] = counter.get('z');
    cnt[2] = counter.get('w');
    cnt[4] = counter.get('u');
    cnt[6] = counter.get('x');
    cnt[8] = counter.get('g');
    cnt[3] = counter.get('h') - cnt[8];
    cnt[5] = counter.get('f') - cnt[4];
    cnt[7] = counter.get('s') - cnt[6];
    cnt[1] = counter.get('o') - cnt[0] - cnt[2] - cnt[4];
    cnt[9] = counter.get('i') - cnt[5] - cnt[6] - cnt[8];
    var result = "";
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < cnt[i]; j++) {
            result += i;
        }
    }
    return result;
}

