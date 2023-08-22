function f_gold(n, roads) {
    var deg = Array(n).fill(0);
    for (var i = 0; i < roads.length; i++) {
        deg[roads[i][0]] += 1;
        deg[roads[i][1]] += 1;
    }
    deg.sort();
    var sum = 0;
    for (var i = 0; i < deg.length; i++) {
        sum += i * deg[i];
    }
    return sum;
}

