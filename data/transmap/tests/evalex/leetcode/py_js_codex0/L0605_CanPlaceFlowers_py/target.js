
function f_gold(flowerBed, n) {
    var i = 0;
    while (n > 0 && i < flowerBed.length) {
        if (i == 0 && flowerBed[0] == 0) {
            if (flowerBed.length == 1 || flowerBed.length > 1 && flowerBed[1] == 0) {
                n -= 1;
                flowerBed[0] = 1;
            }
        } else if (i == flowerBed.length - 1 && flowerBed[i] == 0 && flowerBed[i - 1] == 0) {
            n -= 1;
            flowerBed[i] = 1;
        } else if (flowerBed[i] == 0 && flowerBed[i - 1] == 0 && flowerBed[i + 1] == 0) {
            n -= 1;
            flowerBed[i] = 1;
        }
        i += 1;
    }
    return n == 0;
}

