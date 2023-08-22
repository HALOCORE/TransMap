function f_gold(plants, capacity) {
    var ans = 0;
    var cap = capacity;
    for (var i = 0; i < plants.length; i++) {
        if (cap >= plants[i]) {
            cap -= plants[i];
            ans += 1;
        }
        else {
            cap = capacity - plants[i];
            ans += i * 2 + 1;
        }
    }
    return ans;
}

