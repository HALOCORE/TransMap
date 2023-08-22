
function f_gold(A, B) {
    var a = A[0];
    var b = B[0];
    var c = b;
    var d = a;
    var counta = 0;
    var countb = 0;
    var countc = 1;
    var countd = 1;
    for (var i = 1; i < A.length; i++) {
        if (A[i] == a) {
        } else if (A[i] != a && B[i] == a) {
            counta++;
        } else {
            counta = -30000;
        }
        if (B[i] == b) {
        } else if (B[i] != b && A[i] == b) {
            countb++;
        } else {
            countb = -30000;
        }
        if (A[i] == c) {
        } else if (A[i] != c && B[i] == c) {
            countc++;
        } else {
            countc = -30000;
        }
        if (B[i] == d) {
        } else if (B[i] != d && A[i] == d) {
            countd++;
        } else {
            countd = -30000;
        }
    }
    if (counta < 0 && countb < 0 && countc < 0 && countd < 0) {
        return -1;
    } else {
        var ans = 30000;
        for (var count of [counta, countb, countc, countd]) {
            if (count >= 0) {
                ans = Math.min(ans, count);
            }
        }
        return ans;
    }
}

