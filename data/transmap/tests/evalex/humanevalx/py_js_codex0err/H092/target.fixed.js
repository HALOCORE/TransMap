function any_int(x, y, z) {
    if (Number.isInteger(x) && Number.isInteger(y) && Number.isInteger(z)) {
        if (x + y === z || x + z === y || y + z === x) {
            return true;
        }
        return false;
    }
    return false;
}

