///// Segment IGNORE BEGIN
"use strict";
///// Segment IGNORE END
///// Segment BEGIN Basic
///// Segment END

///// Segment BEGIN Levenshtein
///// Segment END

///// Segment BEGIN LongestCommonSub
///// Segment END

///// Segment BEGIN MetricLCS
///// Segment END

///// Segment BEGIN NGram
///// Segment END

///// Segment BEGIN Damerau
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
