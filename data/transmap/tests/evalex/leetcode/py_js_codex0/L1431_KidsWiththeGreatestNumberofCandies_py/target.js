function f_gold(candies, extraCandies) {
    var mx = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= mx);
}

