function change_base(x, base) {
    let ret = "";
    while (x > 0) {
        ret = String(x % base) + ret;
        x = Math.floor(x / base);
    }
    return ret;
}

