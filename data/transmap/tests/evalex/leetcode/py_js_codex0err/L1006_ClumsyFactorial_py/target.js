function f_gold(N) {
    var op = 0;
    var s = [N];
    for (var i = N - 1; i >= 0; i--) {
        if (op == 0) {
            s.push(s.pop() * i);
        }
        else if (op == 1) {
            s.push(Math.floor(s.pop() / i));
        }
        else if (op == 2) {
            s.push(i);
        }
        else {
            s.push(-i);
        }
        op = (op + 1) % 4;
    }
    return s.reduce(function (a, b) { return a + b; });
}

