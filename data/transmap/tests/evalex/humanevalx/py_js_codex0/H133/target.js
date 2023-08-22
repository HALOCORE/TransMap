function sumSquares(lst) {
    let squared = 0;
    for (let i of lst) {
        squared += Math.ceil(i)**2;
    }
    return squared;
}

