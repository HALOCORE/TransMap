function f_gold(nums) {
    return nums.sort(function (a, b) { return a - b; }).filter(function (num, index) { return index % 2 === 0; }).reduce(function (acc, num) { return acc + num; });
}

