function f_gold(l) {
    let leafNodeCount = Math.pow(2, l - 1);
    let sumLastLevel = 0;
    sumLastLevel = ((leafNodeCount * (leafNodeCount + 1)) / 2);
    let sum = sumLastLevel * l;
    return parseInt(sum);
}

