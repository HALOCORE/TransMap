function f_gold(milestones) {
    var mx = Math.max.apply(null, milestones);
    var s = milestones.reduce(function (a, b) { return a + b; }, 0);
    var rest = s - mx;
    return rest * 2 + 1 if mx > rest + 1 else s;
}

