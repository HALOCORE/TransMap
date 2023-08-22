function f_gold(sensor1, sensor2) {
    var i = 0;
    var n = sensor1.length;
    while (i < n - 1) {
        if (sensor1[i] != sensor2[i]) break;
        i++;
    }
    while (i < n - 1) {
        if (sensor1[i + 1] != sensor2[i]) return 1;
        if (sensor1[i] != sensor2[i + 1]) return 2;
        i++;
    }
    return -1;
}

