function f_gold(S, shifts) {
    var mov = 0;
    var ans = S.split("");
    for (var i = S.length - 1; i >= 0; i--) {
        mov += shifts[i];
        ans[i] = String.fromCharCode((S.charCodeAt(i) - 97 + mov % 26) % 26 + 97);
    }
    return ans.join("");
}

