
function f_gold(deadends, target) {
    function next(s) {
        var res = [];
        s = s.split("");
        for (var i = 0; i < 4; i++) {
            var c = s[i];
            s[i] = (c == '0') ? '9' : String(parseInt(c) - 1);
            res.push(s.join(""));
            s[i] = (c == '9') ? '0' : String(parseInt(c) + 1);
            res.push(s.join(""));
            s[i] = c;
        }
        return res;
    }
    function extend(m1, m2, q) {
        for (var _ = 0; _ < q.length; _++) {
            var p = q.shift();
            var step = m1[p];
            for (var t of next(p)) {
                if (s.has(t) || m1.hasOwnProperty(t)) continue;
                if (m2.hasOwnProperty(t)) return step + 1 + m2[t];
                m1[t] = step + 1;
                q.push(t);
            }
        }
        return -1;
    }
    function bfs() {
        var m1 = { "0000": 0 },
            m2 = {};
        m2[target] = 0;
        var q1 = ["0000"],
            q2 = [target];
        while (q1.length > 0 && q2.length > 0) {
            var t = q1.length <= q2.length ? extend(m1, m2, q1) : extend(m2, m1, q2);
            if (t != -1) return t;
        }
        return -1;
    }
    if (target == '0000') return 0;
    var s = new Set(deadends);
    if (s.has('0000')) return -1;
    return bfs();
}

