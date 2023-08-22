//
const f_gold = (word) => {
    let nums = word.split(/[a-z]+/);
    return new Set(nums.filter(num => num != '').map(num => parseInt(num))).size;
}

