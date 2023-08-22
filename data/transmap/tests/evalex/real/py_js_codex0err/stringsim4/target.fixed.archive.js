///// Segment BEGIN basic DONE

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

class StringSimilarity {
    similarity(s0, s1) {
        throw new Error("Not implemented");
    }
}

class NormalizedStringSimilarity extends StringSimilarity {
    similarity(s0, s1) {
        throw new Error("Not implemented");
    }
}


///// Segment END

///// Segment BEGIN SoDice DONE

class ShingleBased {
    constructor(k = 3) {
        this.k = k;
    }

    get_k() {
        return this.k;
    }

    get_profile(string) {
        let shingles = {};
        let no_space_str = string.replaceAll(/\s+/g, " ");
        for (let i = 0; i < no_space_str.length - this.k + 1; i++) {
            let shingle = no_space_str.substring(i, i + this.k);
            let old = shingles[shingle];
            if (old) {
                shingles[shingle] = parseInt(old + 1);
            } else {
                shingles[shingle] = 1;
            }
        }
        return shingles;
    }
}

class SorensenDice extends ShingleBased {
    constructor(k = 3) {
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
        let union = new Set();
        let profile0 = this.get_profile(s0);
        let profile1 = this.get_profile(s1);
        for (let k of Object.keys(profile0)) {
            union.add(k);
        }
        for (let k of Object.keys(profile1)) {
            union.add(k);
        }
        let inter = parseInt(Object.keys(profile0).length + Object.keys(profile1).length - union.size);
        return 2.0 * inter / (Object.keys(profile0).length + Object.keys(profile1).length);
    }
}


///// Segment END

///// Segment BEGIN WeightedLev DONE

function default_insertion_cost(char) {
    return 1.0;
}

function default_deletion_cost(char) {
    return 1.0;
}

function default_substitution_cost(char_a, char_b) {
    return 1.0;
}

class WeightedLevenshtein {
    constructor(substitution_cost_fn = default_substitution_cost,
                insertion_cost_fn = default_insertion_cost,
                deletion_cost_fn = default_deletion_cost,
                ) {
        this.substitution_cost_fn = substitution_cost_fn;
        this.insertion_cost_fn = insertion_cost_fn;
        this.deletion_cost_fn = deletion_cost_fn;
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
        if (s0.length === 0) {
            return s1.split("").reduce((cost, char) => cost + this.insertion_cost_fn(char), 0);
        }
        if (s1.length === 0) {
            return s0.split("").reduce((cost, char) => cost + this.deletion_cost_fn(char), 0);
        }

        let v0 = [0.0].concat(Array(s1.length).fill(0.0));
        let v1 = [0.0].concat(Array(s1.length).fill(0.0));

        v0[0] = 0;
        for (let i = 1; i < v0.length; i++) {
            v0[i] = v0[i - 1] + this.insertion_cost_fn(s1[i - 1]);
        }

        for (let i = 0; i < s0.length; i++) {
            let s0i = s0[i];
            let deletion_cost = this.deletion_cost_fn(s0i);
            v1[0] = v0[0] + deletion_cost;

            for (let j = 0; j < s1.length; j++) {
                let s1j = s1[j];
                let cost = 0;
                if (s0i !== s1j) {
                    cost = this.substitution_cost_fn(s0i, s1j);
                }
                let insertion_cost = this.insertion_cost_fn(s1j);
                v1[j + 1] = Math.min(v1[j] + insertion_cost, v0[j + 1] + deletion_cost, v0[j] + cost);
            }
            v0 = v1;
            v1 = [0.0].concat(Array(s1.length).fill(0.0));
        }

        return v0[s1.length];
    }
}


///// Segment END

///// Segment IGNORE BEGIN
function assert_equal(a, b) {
    if (a != b) {
        throw Error("MyLogError MISMATCH");
    }
}

function test_sorensen_dice() {
    var a = new SorensenDice(2);
    var s2 = "上海";
    var s3 = "上海市";
    assert_equal(Math.round((a.distance(s2, s3) + Number.EPSILON) * 100) / 100, 0.33);
    assert_equal(Math.round((a.similarity(s2, s3) + Number.EPSILON) * 100) / 100, 0.67);
}

function test_weighted_levenshtein() {
    var a = new WeightedLevenshtein();
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
    test_sorensen_dice();
    test_weighted_levenshtein();
}

test();
///// Segment IGNORE END
