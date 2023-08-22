function max_element(l) {
    var m = l[0];
    for (var i = 0; i < l.length; i++) {
        if (l[i] > m) {
            m = l[i];
        }
    }
    return m;
}

