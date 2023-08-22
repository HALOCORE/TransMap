function monotonic(l) {
    if (JSON.stringify(l) === JSON.stringify([...l].sort((a, b) => a-b)) || JSON.stringify(l) === JSON.stringify([...l].sort((a, b) => b-a))) {
        return true;
    }
    return false;
}

