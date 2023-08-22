function f_gold(board) {
    var m = 2;
    var n = 3;
    var seq = [];
    var start = "";
    var end = "123450";
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (board[i][j] != 0) {
                seq.push(board[i][j]);
            }
            start += board[i][j];
        }
    }
    function check(seq) {
        var n = seq.length;
        var cnt = 0;
        for (var i = 0; i < n; i++) {
            for (var j = i; j < n; j++) {
                if (seq[i] > seq[j]) {
                    cnt++;
                }
            }
        }
        return cnt % 2 == 0;
    }
    function f(s) {
        var ans = 0;
        for (var i = 0; i < m * n; i++) {
            if (s[i] != '0') {
                var num = s.charCodeAt(i) - '1'.charCodeAt(0);
                ans += Math.abs(Math.floor(i / n) - Math.floor(num / n)) + Math.abs(i % n - num % n);
            }
        }
        return ans;
    }
    if (!check(seq)) {
        return -1;
    }
    var q = [(f(start), start)];
    var dist = {};
    dist[start] = 0;
    while (q.length > 0) {
        var _ = q.shift();
        var state = _[1];
        if (state == end) {
            return dist[state];
        }
        var p1 = state.indexOf('0');
        var i = Math.floor(p1 / n);
        var j = p1 % n;
        var s = state.split("");
        for (var a = 0; a < 2; a++) {
            for (var b = -1; b <