function f_gold(accounts) {
    return Math.max(...accounts.map(account => account.reduce((a, b) => a + b)));
}

