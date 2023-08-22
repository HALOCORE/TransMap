function compare(game, guess) {
    return game.map(function (x, i) {
        return Math.abs(x - guess[i]);
    });
}

