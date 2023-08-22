function triangle_area(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return -1;
    }
    var s = (a + b + c) / 2;
    var area = Math.pow(s * (s - a) * (s - b) * (s - c), 0.5);
    area = Number(area.toFixed(2));
    return area;
}

