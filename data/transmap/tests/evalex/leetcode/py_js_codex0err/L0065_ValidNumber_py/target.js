function f_gold(s) {
    var NumberRE = "[\\+\\-]?((\\d+\\.?\\d*|\\d*\\.?\\d+)(e[\\+\\-]?\\d+)?)";
    s = s.trim();
    var Ans = s.match(NumberRE);
    if (Ans && s.length == Ans.regs[0][1]) {
        return true;
    }
    return false;
}

