
function sumProduct(numbers) {
    let sumValue = 0;
    let prodValue = 1;

    for (let n of numbers) {
        sumValue += n;
        prodValue *= n;
    }
    return [sumValue, prodValue];
}

