
function f_gold ( board, words ) {
    function check ( word ) {
        cnt = Counter(word);
        return all(counter[c] >= i for c, i in cnt.items());
    }
    function dfs ( i, j, l, word ) {
        if ( l == len(word) ) {
            return true;
        }
        if ( i < 0 || i >= m || j < 0 || j >= n || board[i][j] != word[l] ) {
            return false;
        }
        c = board[i][j];
        board[i][j] = '0';
        ans = false;
        for ( a, b in [[0, -1], [0, 1], [1, 0], [-1, 0]] ) {
            x, y = i + a, j + b;
            ans = ans || dfs(x, y, l + 1, word);
        }
        board[i][j] = c;
        return ans;
    }
    function find ( word ) {
        if ( !check(word) ) {
            return false;
        }
        for ( i = 0; i < m; i++ ) {
            for ( j = 0; j < n; j++ ) {
                if ( dfs(i, j, 0, word) ) {
                    return true;
                }
            }
        }
        return false;
    }
    m, n = len(board), len(board[0]);
    words = set(words);
    counter = Counter(c for b in board for c in b);
    return [word for word in words if find(word)];
}

