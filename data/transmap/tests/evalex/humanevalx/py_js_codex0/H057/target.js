function monotonic(l) {
    if (l === l.sort() || l === l.sort().reverse()) {
        return true;
    }
    return false;
}

