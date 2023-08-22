function largest_smallest_integers(lst) {
    let smallest = lst.filter(x => x < 0);
    let largest = lst.filter(x => x > 0);
    return [Math.max(...smallest), Math.min(...largest)];
}

