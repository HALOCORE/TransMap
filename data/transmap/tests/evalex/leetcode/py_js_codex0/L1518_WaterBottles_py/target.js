function f_gold(numBottles, numExchange) {
    var ans = numBottles;
    while (numBottles >= numExchange) {
        numBottles -= numExchange - 1;
        ans += 1;
    }
    return ans;
}

