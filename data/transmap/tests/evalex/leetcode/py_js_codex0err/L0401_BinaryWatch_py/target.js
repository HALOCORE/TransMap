function f_gold(turnedOn) {
    return [
        '{:d}:{:02d}'.format(i, j)
        for (i = 0; i < 12; i++)
        for (j = 0; j < 60; j++)
        if ((bin(i) + bin(j)).count('1') == turnedOn)
    ];
}

