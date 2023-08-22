function f_gold(moves) {
    var x = 0;
    var y = 0;
    for (var i = 0; i < moves.length; i++) {
        if (moves[i] == 'R') {
            x += 1;
        }
        else if (moves[i] == 'L') {
            x -= 1;
        }
        else if (moves[i] == 'U') {
            y += 1;
        }
        else if (moves[i] == 'D') {
            y -= 1;
        }
    }
    return x == 0 && y == 0;
}

