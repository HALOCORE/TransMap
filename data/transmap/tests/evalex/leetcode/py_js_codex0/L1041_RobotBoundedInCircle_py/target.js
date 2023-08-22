function f_gold(instructions) {
    var cur = 0;
    var direction = [0, 0, 0, 0];
    for (var ins of instructions) {
        if (ins == 'L') {
            cur = (cur + 1) % 4;
        }
        else if (ins == 'R') {
            cur = (cur + 3) % 4;
        }
        else {
            direction[cur] += 1;
        }
    }
    return cur != 0 || (direction[0] == direction[2] && direction[1] == direction[3]);
}

