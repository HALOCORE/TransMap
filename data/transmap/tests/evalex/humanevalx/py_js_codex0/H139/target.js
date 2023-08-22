function special_factorial(n) {
    let fact_i = 1;
    let special_fact = 1;
    for (let i = 1; i <= n; i++) {
        fact_i *= i;
        special_fact *= fact_i;
    }
    return special_fact;
}

