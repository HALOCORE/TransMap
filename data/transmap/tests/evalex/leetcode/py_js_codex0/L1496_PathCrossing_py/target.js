function f_gold(path) {
    var x = 0;
    var y = 0;
    var vis = new Set();
    vis.add(x + "," + y);
    for (var i = 0; i < path.length; i++) {
        if (path[i] == 'N') {
            y += 1;
        }
        else if (path[i] == 'S') {
            y -= 1;
        }
        else if (path[i] == 'E') {
            x += 1;
        }
        else {
            x -= 1;
        }
        if (vis.has(x + "," + y)) {
            return true;
        }
        vis.add(x + "," + y);
    }
    return false;
}

