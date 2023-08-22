function f_gold(candies, num_people) {
    let ans = new Array(num_people).fill(0);
    let i = 0;
    while (candies > 0) {
        ans[i % num_people] += Math.min(candies, i + 1);
        candies -= Math.min(candies, i + 1);
        i += 1;
    }
    return ans;
}

