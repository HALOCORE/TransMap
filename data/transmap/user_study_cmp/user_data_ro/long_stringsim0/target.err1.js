///// Segment IGNORE BEGIN
"use strict";
///// Segment IGNORE END
///// Segment BEGIN Basic DONE

class StringDistance {
    distance(s0, s1) {
        throw new Error("Not implemented");
    }
}

class NormalizedStringDistance extends StringDistance {
    distance(s0, s1) {
        throw new Error("Not implemented");
    }
}

class MetricStringDistance extends StringDistance {
    distance(s0, s1) {
        throw new Error("Not implemented");
    }
}


///// Segment END

///// Segment BEGIN Levenshtein DONE

class Levenshtein extends MetricStringDistance {
    distance(s0, s1) {
        if (s0 === null) {
            throw new TypeError("Argument s0 is NoneType.");
        }
        if (s1 === null) {
            throw new TypeError("Argument s1 is NoneType.");
        }
        if (s0 === s1) {
            return 0.0;
        }
        if (s0.length === 0) {
            return s1.length;
        }
        if (s1.length === 0) {
            return s0.length;
        }

        let v0 = new Array(s1.length + 1).fill(0);
        let v1 = new Array(s1.length + 1).fill(0);

        for (let i = 0; i < v0.length; i++) {
            v0[i] = i;
        }

        for (let i = 0; i < s0.length; i++) {
            v1[0] = i + 1;
            for (let j = 0; j < s1.length; j++) {
                let cost = 1;
                if (s0[i] === s1[j]) {
                    cost = 0;
                }
                v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
            }
            [v0, v1] = [v1, v0];
            //v1 = new Array(s1.length + 1);
        }

        return v0[s1.length];
    }
}


///// Segment END

///// Segment BEGIN LongestCommonSub DONE
class LongestCommonSubsequence extends StringDistance {
    distance(s0, s1) {
        if (s0 === null) {
            throw new TypeError("Argument s0 is NoneType.");
        }
        if (s1 === null) {
            throw new TypeError("Argument s1 is NoneType.");
        }
        if (s0 === s1) {
            return 0.0;
        }
        return s0.length + s1.length - 2 * this.constructor.length(s0, s1);
    }
    static length(s0, s1) {
        if (s0 === null) {
            throw new TypeError("Argument s0 is NoneType.");
        }
        if (s1 === null) {
            throw new TypeError("Argument s1 is NoneType.");
        }
        let s0_len = s0.length;
        let s1_len = s1.length;
        let x = s0.slice(0);
        let y = s1.slice(0);
        let matrix = Array.from({ length: s0_len + 1 }, () => Array(s1_len + 1).fill(0));
        for (let i = 1; i < s0_len + 1; i++) {
            for (let j = 1; j < s1_len + 1; j++) {
                if (x[i - 1] === y[j - 1]) {
                    matrix[i][j] = matrix[i - 1][j - 1] + 1;
                }
                else {
                    matrix[i][j] = Math.max(matrix[i][j - 1], matrix[i - 1][j]);
                }
            }
        }
        return matrix[s0_len][s1_len];
    }
}


///// Segment END

///// Segment BEGIN MetricLCS DONE
class MetricLCS {
    constructor() {
        this.lcs = new LongestCommonSubsequence();
    }
    distance(s0, s1) {
        if (s0 === null) {
            throw new TypeError("Argument s0 is NoneType.");
        }
        if (s1 === null) {
            throw new TypeError("Argument s1 is NoneType.");
        }
        if (s0 === s1) {
            return 0.0;
        }
        let max_len = Math.max(s0.length, s1.length);
        if (max_len === 0) {
            return 0.0;
        }
        return 1.0 - (1.0 * this.lcs.constructor.length(s0, s1)) / max_len;
    }
}


///// Segment END

///// Segment BEGIN NGram DONE

class NGram {
    constructor(n = 2) {
        this.n = n;
    }

    distance(s0, s1) {
        if (s0 === null) {
            throw new TypeError("Argument s0 is NoneType.");
        }
        if (s1 === null) {
            throw new TypeError("Argument s1 is NoneType.");
        }
        if (s0 === s1) {
            return 0.0;
        }

        const special = '\n';
        const sl = s0.length;
        const tl = s1.length;

        if (sl === 0 || tl === 0) {
            return 1.0;
        }

        let cost = 0;
        if (sl < this.n || tl < this.n) {
            for (let i = 0; i < Math.min(sl, tl); i++) {
                if (s0[i] === s1[i]) {
                    cost += 1;
                }
            }
            return 1.0 - cost / Math.max(sl, tl);
        }

        const sa = new Array(sl + this.n - 1).fill('');

        for (let i = 0; i < sa.length; i++) {
            if (i < this.n - 1) {
                sa[i] = special;
            } else {
                sa[i] = s0[i - this.n + 1];
            }
        }

        let p = new Array(sl + 1).fill(0);
        let d = new Array(sl + 1);
        let t_j = new Array(this.n).fill('');
        for (let i = 0; i < sl + 1; i++) {
            p[i] = 1.0 * i;
        }

        for (let j = 1; j < tl + 1; j++) {
            if (j < this.n) {
                for (let ti = 0; ti < this.n - j; ti++) {
                    t_j[ti] = special;
                }
                for (let ti = this.n - j; ti < this.n; ti++) {
                    t_j[ti] = s1[ti - (this.n - j)];
                }
            } else {
                t_j = s1.slice(j - this.n, j);
            }

            d[0] = 1.0 * j;
            for (let i = 0; i < sl + 1; i++) {
                cost = 0;
                let tn = this.n;
                for (let ni = 0; ni < this.n; ni++) {
                    if (sa.at(i - 1 + ni) !== t_j[ni]) {
                        cost += 1;
                    } else if (sa[i - 1 + ni] === special) {
                        tn -= 1;
                    }
                }
                const ec = cost / tn;
                d[i] = Math.min(d.at(i - 1) + 1, p[i] + 1, p.at(i - 1) + ec);
            }
            [p, d] = [d, p];
        }

        return p[sl] / Math.max(tl, sl);
    }
}


///// Segment END

///// Segment BEGIN Damerau DONE

class Damerau {
    constructor() {
        this.distance = function (s0, s1) {
            if (s0 === null) {
                throw new TypeError("Argument s0 is NoneType.");
            }
            if (s1 === null) {
                throw new TypeError("Argument s1 is NoneType.");
            }
            if (s0 === s1) {
                return 0.0;
            }
            var inf = parseInt(s0.length + s1.length);
            var da = {};
            for (var i = 0; i < s0.length; i++) {
                da[s0[i]] = "0";
            }
            for (var i = 0; i < s1.length; i++) {
                da[s1[i]] = "0";
            }
            var h = [];
            for (var i = 0; i < s0.length + 2; i++) {
                h.push([]);
                for (var j = 0; j < s1.length + 2; j++) {
                    h[i].push(0);
                }
            }
            for (var i = 0; i < s0.length + 1; i++) {
                h[i + 1][0] = inf;
                h[i + 1][1] = i;
            }
            for (var j = 0; j < s1.length + 1; j++) {
                h[0][j + 1] = inf;
                h[1][j + 1] = j;
            }
            for (var i = 1; i < s0.length + 1; i++) {
                var db = 0;
                for (var j = 1; j < s1.length + 1; j++) {
                    var i1 = parseInt(da[s1[j - 1]]);
                    var j1 = db;

                    var cost = 1;
                    if (s0[i - 1] === s1[j - 1]) {
                        cost = 0;
                        db = j;
                    }
                    h[i + 1][j + 1] = Math.min(h[i][j] + cost,
                        h[i + 1][j] + 1,
                        h[i][j + 1] + 1,
                        h[i1][j1] + (i - i1 - 1) + 1 + (j - j1 - 1));
                }
                da[s0[i - 1]] = i.toString();
            }

            return h[s0.length + 1][s1.length + 1];
        }
    }
}


///// Segment END

///// Segment IGNORE BEGIN
function assert_equal(a, b) {
    if (a != b) {
        throw Error("MyLogError MISMATCH");
    }
}

function test_levenshtein() {
    var a = new Levenshtein();
    var s0 = "";
    var s1 = "";
    var s2 = "上海";
    var s3 = "上海市";
    assert_equal(a.distance(s0, s1), 0.0);
    assert_equal(a.distance(s0, s2), 2);
    assert_equal(a.distance(s0, s3), 3);
    assert_equal(a.distance(s1, s2), 2);
    assert_equal(a.distance(s1, s3), 3);
    assert_equal(a.distance(s2, s3), 1);
}

function test_longest_common_subsequence() {
    var a = new LongestCommonSubsequence();
    var s0 = "";
    var s1 = "";
    var s2 = "上海";
    var s3 = "上海市";
    assert_equal(0, a.distance(s0, s1));
    assert_equal(2, a.distance(s0, s2));
    assert_equal(3, a.distance(s0, s3));
    assert_equal(1, a.distance(s2, s3));
    assert_equal(2, a.constructor.length(s2, s3));
    assert_equal(4, a.distance('AGCAT', 'GAC'));
    assert_equal(2, a.constructor.length('AGCAT', 'GAC'));
}

function test_metric_lcs() {
    var a = new MetricLCS();
    var s0 = "";
    var s1 = "";
    var s2 = "上海";
    var s3 = "上海市";
    assert_equal(a.distance(s0, s1), 0.0);
    assert_equal(a.distance(s0, s2), 1.0);
    assert_equal(a.distance(s0, s3), 1.0);
    assert_equal(a.distance(s1, s2), 1.0);
    assert_equal(a.distance(s1, s3), 1.0);
    assert_equal(Math.round((a.distance(s2, s3) + Number.EPSILON) * 100) / 100, 0.33);
}

function test_ngram() {
    var a = new NGram(2);
    var s0 = "";
    var s1 = "";
    var s2 = "上海";
    var s3 = "上海市";
    assert_equal(a.distance(s0, s1), 0.0);
    assert_equal(a.distance(s0, s2), 1.0);
    assert_equal(a.distance(s0, s3), 1.0);
    assert_equal(a.distance(s1, s2), 1.0);
    assert_equal(a.distance(s1, s3), 1.0);
    assert_equal(Math.round((a.distance(s2, s3) + Number.EPSILON) * 100) / 100, 0.33);
}

function test_damerau() {
    var a = new Damerau();
    var s0 = "";
    var s1 = "";
    var s2 = "上海";
    var s3 = "上海市";
    assert_equal(a.distance(s0, s1), 0.0);
    assert_equal(a.distance(s0, s2), 2);
    assert_equal(a.distance(s0, s3), 3);
    assert_equal(a.distance(s1, s2), 2);
    assert_equal(a.distance(s1, s3), 3);
    assert_equal(a.distance(s2, s3), 1);
}

function test() {
    test_levenshtein();
    test_longest_common_subsequence();
    test_metric_lcs();
    test_ngram();
    test_damerau();
}

test();
///// Segment IGNORE END
