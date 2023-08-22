function digitSum(s) {
    if (s === "") return 0;
    return s.split("").reduce((acc, char) => {
        return acc + (/[A-Z]/.test(char) ? char.charCodeAt(0) : 0);
    }, 0);
}

