function f_gold(releaseTimes, keysPressed) {
    var ans = keysPressed[0];
    var mx = releaseTimes[0];
    for (var i = 1; i < keysPressed.length; i++) {
        var d = releaseTimes[i] - releaseTimes[i - 1];
        if (d > mx || (d == mx && keysPressed.charCodeAt(i) > keysPressed.charCodeAt(ans))) {
            mx = d;
            ans = keysPressed[i];
        }
    }
    return ans;
}

