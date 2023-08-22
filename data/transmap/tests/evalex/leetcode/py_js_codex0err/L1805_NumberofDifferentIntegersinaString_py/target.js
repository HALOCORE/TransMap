const re = require('re');
const f_gold = (word) => {
    let nums = re.split(r'[a-z]+', word);
    return new Set(nums.filter(num => num != '').map(num => parseInt(num))).size;
}

