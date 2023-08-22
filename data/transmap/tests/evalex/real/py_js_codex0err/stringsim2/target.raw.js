///// Segment IGNORE BEGIN
"use strict";
var classMultiExtend = (baseClass, ...mixins) => {
    class base extends baseClass {
        constructor (...args) {
            super(...args);
            mixins.forEach((mixin) => {
                copyProps(this,(new mixin));
            });
        }
    }
    let copyProps = (target, source) => {  // this function copies all properties and symbols, filtering out some special ones
        Object.getOwnPropertyNames(source)
              .concat(Object.getOwnPropertySymbols(source))
              .forEach((prop) => {
                if (!prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                  Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
              })
    }
    mixins.forEach((mixin) => { // outside contructor() to allow aggregation(A,B,C).staticFunction() to be called etc.
        copyProps(base.prototype, mixin.prototype);
        copyProps(base, mixin);
    });
    return base;
}
///// Segment IGNORE END

///// Segment BEGIN Basic DONE

class ShingleBased {
    constructor(k = 3) {
        this.k = k;
    }

    get_k() {
        return this.k;
    }

    get_profile(string) {
        let shingles = {};
        let no_space_str = string.replace(/\s+/g, " ");
        for (let i = 0; i < no_space_str.length - this.k + 1; i++) {
            let shingle = no_space_str.substring(i, i + this.k);
            let old = shingles[shingle];
            if (old) {
                shingles[shingle] = parseInt(old) + 1;
            } else {
                shingles[shingle] = 1;
            }
        }
        return shingles;
    }
}

class StringDistance {
    distance(s0, s1) {
        throw new Error("NotImplementedError");
    }
}

class NormalizedStringDistance extends StringDistance {
    distance(s0, s1) {
        throw new Error("NotImplementedError");
    }
}

class MetricStringDistance extends StringDistance {
    distance(s0, s1) {
        throw new Error("NotImplementedError");
    }
}

class StringSimilarity {
    similarity(s0, s1) {
        throw new Error("NotImplementedError");
    }
}

class NormalizedStringSimilarity extends StringSimilarity {
    similarity(s0, s1) {
        throw new Error("NotImplementedError");
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

        let v0 = new Array(s1.length + 1);
        let v1 = new Array(s1.length + 1);

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
            v0 = v1;
            v1 = new Array(s1.length + 1);
        }

        return v0[s1.length];
    }
}


///// Segment END

///// Segment BEGIN NormalizedLev DONE
class NormalizedLevenshtein {
    constructor() {
        this.levenshtein = new Levenshtein();
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
        let m_len = Math.max(s0.length, s1.length);
        if (m_len === 0) {
            return 0.0;
        }
        return this.levenshtein.distance(s0, s1) / m_len;
    }
    similarity(s0, s1) {
        return 1.0 - this.distance(s0, s1);
    }
}


///// Segment END

///// Segment BEGIN OptStrAlign DONE

class OptimalStringAlignment extends StringDistance {
    distance(s0, s1) {
        if (s0 === null) {
            throw new TypeError("Argument s0 is null.");
        }
        if (s1 === null) {
            throw new TypeError("Argument s1 is null.");
        }
        if (s0 === s1) {
            return 0.0;
        }

        let n = s0.length;
        let m = s1.length;
        if (n === 0) {
            return 1.0 * n;
        }
        if (m === 0) {
            return 1.0 * m;
        }

        let d = [];
        for (let i = 0; i < n + 2; i++) {
            d.push([]);
            for (let j = 0; j < m + 2; j++) {
                d[i].push(0);
            }
        }
        for (let i = 0; i < n + 1; i++) {
            d[i][0] = i;
        }
        for (let j = 0; j < m + 1; j++) {
            d[0][j] = j;
        }

        for (let i = 1; i < n + 1; i++) {
            for (let j = 1; j < m + 1; j++) {
                let cost = 1;
                if (s0[i - 1] === s1[j - 1]) {
                    cost = 0;
                }
                d[i][j] = Math.min(d[i - 1][j - 1] + cost, d[i][j - 1] + 1, d[i - 1][j] + 1);

                if (i > 1 && j > 1 && s0[i - 1] === s1[j - 2] && s0[i - 2] === s1[j - 1]) {
                    d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
                }
            }
        }

        return d[n][m];
    }
}


///// Segment END

///// Segment BEGIN OverlapCoef DONE
class OverlapCoefficient {
    constructor(k = 3) {
        this.k = k;
    }
    distance(s0, s1) {
        return 1.0 - this.similarity(s0, s1);
    }
    similarity(s0, s1) {
        if (s0 === null) {
            throw new TypeError("Argument s0 is NoneType.");
        }
        if (s1 === null) {
            throw new TypeError("Argument s1 is NoneType.");
        }
        if (s0 === s1) {
            return 1.0;
        }
        let union = new Set();
        let profile0 = this.get_profile(s0);
        let profile1 = this.get_profile(s1);
        for (let k of profile0.keys()) {
            union.add(k);
        }
        for (let k of profile1.keys()) {
            union.add(k);
        }
        let inter = Math.floor(profile0.size + profile1.size - union.size);
        return inter / Math.min(profile0.size, profile1.size);
    }
}


///// Segment END

///// Segment BEGIN QGram DONE
class QGram {
    constructor(k = 3) {
        super();
        this.k = k;
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
        let profile0 = this.get_profile(s0);
        let profile1 = this.get_profile(s1);
        return this.distance_profile(profile0, profile1);
    }
    static distance_profile(profile0, profile1) {
        let union = new Set();
        for (let k of profile0.keys()) {
            union.add(k);
        }
        for (let k of profile1.keys()) {
            union.add(k);
        }
        let agg = 0;
        for (let k of union) {
            let v0 = 0, v1 = 0;
            if (profile0.get(k) !== null) {
                v0 = parseInt(profile0.get(k));
            }
            if (profile1.get(k) !== null) {
                v1 = parseInt(profile1.get(k));
            }
            agg += Math.abs(v0 - v1);
        }
        return agg;
    }
}


///// Segment END

///// Segment IGNORE BEGIN
function assert_equal(a, b) {
    if (a != b) {
        throw Error("MyLogError MISMATCH");
    }
}

function test_normalized_levenshtein() {
    var a = new NormalizedLevenshtein();
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

    assert_equal(a.similarity(s0, s1), 1.0);
    assert_equal(a.similarity(s0, s2), 0.0);
    assert_equal(a.similarity(s0, s3), 0.0);
    assert_equal(a.similarity(s1, s2), 0.0);
    assert_equal(a.similarity(s1, s3), 0.0);
    assert_equal(Math.round((a.similarity(s2, s3) + Number.EPSILON) * 100) / 100, 0.67);
}

function test_optimal_string_alignment() {
    var a = new OptimalStringAlignment();
    var s0 = "";
    var s1 = "";
    var s2 = "上海";
    var s3 = "上海市";
    assert_equal(a.distance(s0, s1), 0.0);
    assert_equal(a.distance(s0, s2), 0.0);
    assert_equal(a.distance(s0, s3), 0.0);
    assert_equal(a.distance(s1, s2), 0.0);
    assert_equal(a.distance(s1, s3), 0.0);
    assert_equal(Math.round((a.distance(s2, s3) + Number.EPSILON) * 100) / 100, 1);
}

function test_overlap_coefficient_onestringissubsetofother_return0() {
    var sim = new OverlapCoefficient(3);
    var s1 = "eat";
    var s2 = "eating";
    var actual = sim.distance(s1, s2);
    assert_equal(0, actual);
}

function test_overlap_coefficient_onestringissubset_return1() {
    var sim = new OverlapCoefficient(3);
    var s1 = "eat";
    var s2 = "eating";
    var actual = sim.similarity(s1, s2);
    assert_equal(1, actual);
}

function test_overlap_coefficient_onestringissubsetofother_return1() {
    var sim = new OverlapCoefficient(3);
    var s1 = "eat";
    var s2 = "eating";
    var actual = sim.similarity(s1, s2);
    assert_equal(1, actual);
}

function test_overlap_coefficient_halfsimilar_return1() {
    var sim = new OverlapCoefficient(2);
    var s1 = "car";
    var s2 = "bar";
    assert_equal(1 / 2, sim.similarity(s1, s2));
    assert_equal(1 / 2, sim.distance(s1, s2));
}

function test_qgram() {
    var a = new QGram(1);
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
    test_normalized_levenshtein();
    test_optimal_string_alignment();
    test_overlap_coefficient_onestringissubsetofother_return0();
    test_overlap_coefficient_onestringissubset_return1();
    test_overlap_coefficient_onestringissubsetofother_return1();
    test_overlap_coefficient_halfsimilar_return1();
    test_qgram();
}

test();
///// Segment IGNORE END
