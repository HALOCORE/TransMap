///// Segment BEGIN basic
///// Segment END

///// Segment BEGIN SoDice
///// Segment END

///// Segment BEGIN WeightedLev
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
