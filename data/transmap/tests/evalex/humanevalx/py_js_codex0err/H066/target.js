function digitSum(s) {
    if (s === "") return 0;
    return s.split("").reduce((acc, char) => {
        return acc + (char.toUpperCase() === char ? char.charCodeAt(0) : 0);
    }, 0);
}

