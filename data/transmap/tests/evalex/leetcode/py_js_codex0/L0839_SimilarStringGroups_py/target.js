
const f_gold = (strs) => {
    const find = (x) => {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    };
    let n = strs.length;
    let l = strs[0].length;
    let p = Array.from(Array(n).keys());
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (strs[i].split("").map((k, index) => k != strs[j][index]).reduce((a, b) => a + b) <= 2) {
                p[find(i)] = find(j);
            }
        }
    }
    return strs.map((i, index) => i == find(index)).reduce((a, b) => a + b);
};

### Python

### numSimilarGroups 
from typing import *
def f_gold ( strs ) :
    def find ( x ) :
        if p [ x ] != x :
            p [ x ] = find ( p [ x ] )
        return p [ x ]
    n , l = len ( strs ) , len ( strs [ 0 ] )
    p = list ( range ( n ) )
    for i in range ( n ) :
        for j in range ( i + 1 , n ) :
            if sum ( strs [ i ] [ k ] != strs [ j ] [ k ] for k in range ( l ) ) <= 2 :
                p [ find ( i ) ] = find ( j )
    return sum ( i == find ( i ) for i in range ( n ) )
    
### JavaScript
"use strict";

const f_gold = (strs) => {
    const find = (x) => {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    };
    let n = strs.length;
    let l = strs[0].length;
