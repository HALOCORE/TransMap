function f_gold(ghosts, target) {
    var flag = Math.abs(target[0]) + Math.abs(target[1]);
    for (var i = 0; i < ghosts.length; i++) {
        if (Math.abs(ghosts[i][0] - target[0]) + Math.abs(ghosts[i][1] - target[1]) <= flag) {
            return false;
        }
    }
    return true;
}

