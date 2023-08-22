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

///// Segment BEGIN Cosine
///// Segment END

///// Segment BEGIN Jaccard
///// Segment END

///// Segment BEGIN JaroWinkler-1
///// Segment END

///// Segment BEGIN JaroWinkler-2
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
