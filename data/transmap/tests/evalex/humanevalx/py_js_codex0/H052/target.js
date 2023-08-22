function belowThreshold(l, t) {
    for (let e of l) {
        if (e >= t) {
            return false;
        }
    }
    return true;
}

