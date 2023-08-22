function solution(lst) {
    return lst.filter((x, idx) => idx % 2 === 0 && x % 2 === 1).reduce((a, b) => a + b);
}

