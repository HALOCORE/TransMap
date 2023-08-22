
function f_gold(secret, guess) {
    var x = y = 0;
    var cnt1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var cnt2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < secret.length; i++) {
        if (secret[i] == guess[i]) {
            x += 1;
        } else {
            cnt1[parseInt(secret[i])] += 1;
            cnt2[parseInt(guess[i])] += 1;
        }
    }
    for (var i = 0; i < 10; i++) {
        y += Math.min(cnt1[i], cnt2[i]);
    }
    return x + "A" + y + "B";
}

