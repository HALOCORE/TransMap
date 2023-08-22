function f_gold(maze, start, destination) {
    var m = maze.length;
    var n = maze[0].length;
    var q = [start];
    var rs = start[0];
    var cs = start[1];
    var vis = new Set([[rs, cs]]);
    while (q.length > 0) {
        var i = q[0][0];
        var j = q[0][1];
        q.shift();
        for (var a = 0; a < 4; a++) {
            for (var b = 0; b < 4; b++) {
                var x = i;
                var y = j;
                while (x + a >= 0 && x + a < m && y + b >= 0 && y + b < n && maze[x + a][y + b] == 0) {
                    x = x + a;
                    y = y + b;
                }
                if ([x, y] == destination) {
                    return true;
                }
                if (!vis.has([x, y])) {
                    vis.add([x, y]);
                    q.push([x, y]);
                }
            }
        }
    }
    return false;
}

