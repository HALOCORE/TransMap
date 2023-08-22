
function parseMusic(musicString) {
    var noteMap = { 'o': 4, 'o|': 2, '.|': 1 };
    return musicString.split(' ').filter(function (x) { return x; }).map(function (x) { return noteMap[x]; });
}

