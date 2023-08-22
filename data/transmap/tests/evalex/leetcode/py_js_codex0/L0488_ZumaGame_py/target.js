
function remove(s) {
    while (s.length) {
        var next = s.replace(/B{3,}|G{3,}|R{3,}|W{3,}|Y{3,}/g, '');
        if (next.length == s.length) {
            break;
        }
        s = next;
    }
    return s;
}

function f_gold(board, hand) {
    var visited = new Set();
    var q = new Array();
    q.push([board, hand]);
    while (q.length) {
        var state = q.shift();
        var balls = state[1];
        if (!state[0]) {
            return hand.length - balls.length;
        }
        for (var ball of new Set(balls)) {
            var b = balls.replace(ball, '', 1);
            for (var i = 1; i < state[0].length + 1; i++) {
                var s = state[0].substring(0, i) + ball + state[0].substring(i);
                s = remove(s);
                if (!visited.has(s)) {
                    visited.add(s);
                    q.push([s, b]);
                }
            }
        }
    }
    return -1;
}

