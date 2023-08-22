
function f_gold(plants, capacityA, capacityB) {
    let i = 0;
    let j = plants.length - 1;
    let ans = 0;
    let a = capacityA;
    let b = capacityB;
    while (i <= j) {
        if (i == j) {
            if (Math.max(capacityA, capacityB) < plants[i]) {
                ans += 1;
            }
            break;
        }
        if (capacityA < plants[i]) {
            capacityA = a - plants[i];
            ans += 1;
        } else {
            capacityA -= plants[i];
        }
        if (capacityB < plants[j]) {
            capacityB = b - plants[j];
            ans += 1;
        } else {
            capacityB -= plants[j];
        }
        i += 1;
        j -= 1;
    }
    return ans;
}

