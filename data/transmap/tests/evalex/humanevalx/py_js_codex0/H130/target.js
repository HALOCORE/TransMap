function tri(n) {
    if (n === 0) {
        return [1];
    }
    var my_tri = [1, 3];
    for (var i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            my_tri.push(i / 2 + 1);
        }
        else {
            my_tri.push(my_tri[i - 1] + my_tri[i - 2] + (i + 3) / 2);
        }
    }
    return my_tri;
}

