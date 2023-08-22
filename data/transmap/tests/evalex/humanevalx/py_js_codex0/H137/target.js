function compare_one(a, b) {
    let temp_a = a, temp_b = b;
    if (typeof temp_a === "string") temp_a = temp_a.replace(",", ".");
    if (typeof temp_b === "string") temp_b = temp_b.replace(",", ".");
    if (parseFloat(temp_a) === parseFloat(temp_b)) return null;
    return parseFloat(temp_a) > parseFloat(temp_b) ? a : b;
}

