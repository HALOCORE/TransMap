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

///// Segment BEGIN Basic
///// Segment END

///// Segment BEGIN Levenshtein
///// Segment END

///// Segment BEGIN NormalizedLev
///// Segment END

///// Segment BEGIN OptStrAlign
///// Segment END

///// Segment BEGIN OverlapCoef
///// Segment END

///// Segment BEGIN QGram
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
    assert_equal(Math.round((a.similarity(s2, s3) + Number.EPSILON) * 100) / 100, 1);
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
