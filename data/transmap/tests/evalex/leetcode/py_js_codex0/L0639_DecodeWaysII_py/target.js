
function f_gold(s) {
    let mod = Math.pow(10, 9) + 7;
    let n = s.length;
    let a = 0;
    let b = 1;
    let c = 0;
    for (let i = 1; i < n + 1; i++) {
        if (s[i - 1] == "*") {
            c = 9 * b % mod;
        } else if (s[i - 1] != "0") {
            c = b;
        } else {
            c = 0;
        }
        if (i > 1) {
            if (s[i - 2] == "*" && s[i - 1] == "*") {
                c = (c + 15 * a) % mod;
            } else if (s[i - 2] == "*") {
                if (s[i - 1] > "6") {
                    c = (c + a) % mod;
                } else {
                    c = (c + 2 * a) % mod;
                }
            } else if (s[i - 1] == "*") {
                if (s[i - 2] == "1") {
                    c = (c + 9 * a) % mod;
                } else if (s[i - 2] == "2") {
                    c = (c + 6 * a) % mod;
                }
            } else if (
                s[i - 2] != "0" &&
                (s[i - 2].charCodeAt(0) - "0".charCodeAt(0)) * 10 +
                    s[i - 1].charCodeAt(0) -
                    "0".charCodeAt(0) <=
                    26
            ) {
                c = (c + a) % mod;
            }
        }
        a = b;
        b = c;
    }
    return c;
}

