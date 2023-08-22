function f_gold(target, position, speed) {
    var car = position.map(function (pos, i) { return [pos, speed[i]]; });
    car.sort(function (a, b) { return b[0] - a[0]; });
    var time = car.map(function (pos, spe) { return (target - pos[0]) / pos[1]; });
    var ls = [];
    for (var i = 0; i < time.length; i++) {
        if (!ls.length) {
            ls.push(time[i]);
        }
        else {
            if (time[i] > ls[ls.length - 1]) {
                ls.push(time[i]);
            }
        }
    }
    return ls.length;
}

