
function isPalindrome(string) {
    return string === string.split('').reverse().join('');
}

function makePalindrome(string) {
    if (!string) {
        return '';
    }

    let beginningOfSuffix = 0;

    while (!isPalindrome(string.slice(beginningOfSuffix))) {
        beginningOfSuffix += 1;
    }

    return string + string.slice(0, beginningOfSuffix).split('').reverse().join('');
}

