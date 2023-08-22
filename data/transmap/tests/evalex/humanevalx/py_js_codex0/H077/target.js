function iscube(a) {
    a = Math.abs(a);
    return Math.round(Math.pow(a, 1/3)) ** 3 === a;
}

