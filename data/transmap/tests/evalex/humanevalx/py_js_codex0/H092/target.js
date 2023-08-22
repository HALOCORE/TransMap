function any_int(x, y, z) {
    if (typeof x === "number" && typeof y === "number" && typeof z === "number") {
        if (x + y === z || x + z === y || y + z === x) {
            return true;
        }
        return false;
    }
    return false;
}

