const f_gold = (jug1Capacity, jug2Capacity, targetCapacity) => {
    if (jug1Capacity + jug2Capacity < targetCapacity) {
        return false;
    }
    if (jug1Capacity == 0 || jug2Capacity == 0) {
        return targetCapacity == 0 || jug1Capacity + jug2Capacity == targetCapacity;
    }
    return targetCapacity % gcd(jug1Capacity, jug2Capacity) == 0;
};

