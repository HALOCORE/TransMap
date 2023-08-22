function addElements(arr, k) {
    return arr.slice(0, k).filter(elem => elem.toString().length <= 2).reduce((acc, curr) => acc + curr, 0);
}

