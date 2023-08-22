function f_gold(paths) {
    var mp = {};
    for (var i = 0; i < paths.length; i++) {
        mp[paths[i][0]] = paths[i][1];
    }
    var a = paths[0][0];
    while (mp[a]) {
        a = mp[a];
    }
    return a;
}

