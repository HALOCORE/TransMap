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

///// Segment BEGIN Cosine DONE

class Cosine {
    constructor(k) {
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
        if (s0.length < this.get_k() || s1.length < this.get_k()) {
            return 0.0;
        }
        let profile0 = this.get_profile(s0);
        let profile1 = this.get_profile(s1);
        return this._dot_product(profile0, profile1) / (this._norm(profile0) * this._norm(profile1));
    }

    similarity_profiles(profile0, profile1) {
        return this._dot_product(profile0, profile1) / (this._norm(profile0) * this._norm(profile1));
    }

    static _dot_product(profile0, profile1) {
        let small = profile1;
        let large = profile0;
        if (profile0.length < profile1.length) {
            small = profile0;
            large = profile1;
        }
        let agg = 0.0;
        for (let k in small) {
            let v = small[k];
            let i = large[k];
            if (!i) {
                continue;
            }
            agg += 1.0 * v * i;
        }
        return agg;
    }

    static _norm(profile) {
        let agg = 0.0;
        for (let k in profile) {
            let v = profile[k];
            agg += 1.0 * v * v;
        }
        return Math.sqrt(agg);
    }
}


///// Segment END

///// Segment BEGIN Jaccard DONE
class Jaccard extends ShingleBased, MetricStringDistance, NormalizedStringDistance, NormalizedStringSimilarity {
    constructor(k) {
        super(k);
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
        if (s0.length < this.get_k() || s1.length < this.get_k()) {
            return 0.0;
        }
        let profile0 = this.get_profile(s0);
        let profile1 = this.get_profile(s1);
        let union = new Set();
        for (let ite of profile0.keys()) {
            union.add(ite);
        }
        for (let ite of profile1.keys()) {
            union.add(ite);
        }
        let inter = parseInt(profile0.keys().length + profile1.keys().length - union.size());
        return 1.0 * inter / union.size();
    }
}


///// Segment END

///// Segment BEGIN JaroWinkler-1 DONE

class JaroWinkler {
    constructor(threshold = 0.7) {
        this.threshold = threshold;
        this.three = 3;
        this.jw_coef = 0.1;
    }

    get_threshold() {
        return this.threshold;
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
        let mtp = this.matches(s0, s1);
        let m = mtp[0];
        if (m === 0) {
            return 0.0;
        }
        let j = (m / s0.length + m / s1.length + (m - mtp[1]) / m) / this.three;
        let jw = j;
        if (j > this.get_threshold()) {
            jw = j + Math.min(this.jw_coef, 1.0 / mtp[this.three]) * mtp[2] * (1 - j);
        }
        return jw;
    }

    distance(s0, s1) {
        return 1.0 - this.similarity(s0, s1);
    }
}


///// Segment END

///// Segment BEGIN JaroWinkler-2 DONE

function matches(s0, s1) {
    var max_str, min_str;
    if (s0.length > s1.length) {
        max_str = s0;
        min_str = s1;
    } else {
        max_str = s1;
        min_str = s0;
    }
    var ran = Math.max(Math.floor(max_str.length / 2 - 1), 0);
    var match_indexes = new Array(min_str.length).fill(-1);
    var match_flags = new Array(max_str.length).fill(false);
    var matches = 0;
    for (var mi = 0; mi < min_str.length; mi++) {
        var c1 = min_str[mi];
        for (var xi = Math.max(mi - ran, 0); xi < Math.min(mi + ran + 1, max_str.length); xi++) {
            if (!match_flags[xi] && c1 == max_str[xi]) {
                match_indexes[mi] = xi;
                match_flags[xi] = true;
                matches += 1;
                break;
            }
        }
    }
    var ms0 = new Array(matches).fill(0);
    var ms1 = new Array(matches).fill(0);
    var si = 0;
    for (var i = 0; i < min_str.length; i++) {
        if (match_indexes[i] != -1) {
            ms0[si] = min_str[i];
            si += 1;
        }
    }
    si = 0;
    for (var j = 0; j < max_str.length; j++) {
        if (match_flags[j]) {
            ms1[si] = max_str[j];
            si += 1;
        }
    }
    var transpositions = 0;
    for (var mi = 0; mi < ms0.length; mi++) {
        if (ms0[mi] != ms1[mi]) {
            transpositions += 1;
        }
    }
    var prefix = 0;
    for (var mi = 0; mi < min_str.length; mi++) {
        if (s0[mi] == s1[mi]) {
            prefix += 1;
        } else {
            break;
        }
    }
    return [matches, Math.floor(transpositions / 2), prefix, max_str.length];
}


///// Segment END

///// Segment IGNORE BEGIN
function assert_equal(a, b) {
    if (a !== b) {
        throw Error("MyLogError MISMATCH");
    }
}

function test_cosine() {
    var cos = new Cosine(1);
    var s = ['', ' ', 'Shanghai', 'ShangHai', 'Shang Hai'];
    assert_equal(0.0000, Math.round((cos.distance(s[0], s[0]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((cos.similarity(s[0], s[0]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((cos.distance(s[0], s[1]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.0000, Math.round((cos.similarity(s[0], s[1]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((cos.distance(s[0], s[2]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.0000, Math.round((cos.similarity(s[0], s[2]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((cos.distance(s[0], s[3]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.0000, Math.round((cos.similarity(s[0], s[3]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((cos.distance(s[0], s[4]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.0000, Math.round((cos.similarity(s[0], s[4]) + Number.EPSILON) * 10000) / 10000);
    
    assert_equal(0.0000, Math.round((cos.distance(s[1], s[1]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((cos.similarity(s[1], s[1]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((cos.distance(s[1], s[2]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.0000, Math.round((cos.similarity(s[1], s[2]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((cos.distance(s[1], s[3]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.0000, Math.round((cos.similarity(s[1], s[3]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.6985, Math.round((cos.distance(s[1], s[4]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.3015, Math.round((cos.similarity(s[1], s[4]) + Number.EPSILON) * 10000) / 10000);
    
    assert_equal(0.0000, Math.round((cos.distance(s[2], s[2]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((cos.similarity(s[2], s[2]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.0871, Math.round((cos.distance(s[2], s[3]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.9129, Math.round((cos.similarity(s[2], s[3]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.1296, Math.round((cos.distance(s[2], s[4]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.8704, Math.round((cos.similarity(s[2], s[4]) + Number.EPSILON) * 10000) / 10000);
    
    assert_equal(0.0000, Math.round((cos.distance(s[3], s[3]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((cos.similarity(s[3], s[3]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.0465, Math.round((cos.distance(s[3], s[4]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.9535, Math.round((cos.similarity(s[3], s[4]) + Number.EPSILON) * 10000) / 10000);
    
    assert_equal(0.0000, Math.round((cos.distance(s[4], s[4]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((cos.similarity(s[4], s[4]) + Number.EPSILON) * 10000) / 10000);
      
}

function test_jaccard() {
    var jaccard = new Jaccard(1);
    var s = ['', ' ', 'Shanghai', 'ShangHai', 'Shang Hai'];
    assert_equal(0.0000, Math.round((jaccard.distance(s[0], s[0]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((jaccard.similarity(s[0], s[0]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((jaccard.distance(s[0], s[1]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.0000, Math.round((jaccard.similarity(s[0], s[1]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((jaccard.distance(s[0], s[2]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.0000, Math.round((jaccard.similarity(s[0], s[2]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((jaccard.distance(s[0], s[3]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.0000, Math.round((jaccard.similarity(s[0], s[3]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((jaccard.distance(s[0], s[4]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.0000, Math.round((jaccard.similarity(s[0], s[4]) + Number.EPSILON) * 10000) / 10000);
    
    assert_equal(0.0000, Math.round((jaccard.distance(s[1], s[1]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((jaccard.similarity(s[1], s[1]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((jaccard.distance(s[1], s[2]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.0000, Math.round((jaccard.similarity(s[1], s[2]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((jaccard.distance(s[1], s[3]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.0000, Math.round((jaccard.similarity(s[1], s[3]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.8750, Math.round((jaccard.distance(s[1], s[4]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.1250, Math.round((jaccard.similarity(s[1], s[4]) + Number.EPSILON) * 10000) / 10000);
    
    assert_equal(0.0000, Math.round((jaccard.distance(s[2], s[2]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((jaccard.similarity(s[2], s[2]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.1429, Math.round((jaccard.distance(s[2], s[3]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.8571, Math.round((jaccard.similarity(s[2], s[3]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.2500, Math.round((jaccard.distance(s[2], s[4]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.7500, Math.round((jaccard.similarity(s[2], s[4]) + Number.EPSILON) * 10000) / 10000);
    
    assert_equal(0.0000, Math.round((jaccard.distance(s[3], s[3]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((jaccard.similarity(s[3], s[3]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.1250, Math.round((jaccard.distance(s[3], s[4]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(0.8750, Math.round((jaccard.similarity(s[3], s[4]) + Number.EPSILON) * 10000) / 10000);
    
    assert_equal(0.0000, Math.round((jaccard.distance(s[4], s[4]) + Number.EPSILON) * 10000) / 10000);
    assert_equal(1.0000, Math.round((jaccard.similarity(s[4], s[4]) + Number.EPSILON) * 10000) / 10000);  
}

function test_jarowinkler() {
    var a = new JaroWinkler();
    var s0 = "";
    var s1 = "";
    var s2 = "上海";
    var s3 = "上海市";
    assert_equal(a.distance(s0, s1), 0.0);
    assert_equal(a.distance(s0, s2), 1.0);
    assert_equal(a.distance(s0, s3), 1.0);
    assert_equal(a.distance(s1, s2), 1.0);
    assert_equal(a.distance(s1, s3), 1.0);
    assert_equal(Math.round((a.distance(s2, s3) + Number.EPSILON) * 10000) / 10000, 0.0889);
    
    assert_equal(a.similarity(s0, s1), 1.0);
    assert_equal(a.similarity(s0, s2), 0.0);
    assert_equal(a.similarity(s0, s3), 0.0);
    assert_equal(a.similarity(s1, s2), 0.0);
    assert_equal(a.similarity(s1, s3), 0.0);
    assert_equal(Math.round((a.similarity(s2, s3) + Number.EPSILON) * 10000) / 10000, 0.9111);

}

function test() {
    test_cosine();
    test_jaccard();
    test_jarowinkler();
}

test();
///// Segment IGNORE END
