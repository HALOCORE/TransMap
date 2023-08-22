///// Segment BEGIN Basic
///// Segment END

///// Segment BEGIN SIFT4Options-1
///// Segment END

///// Segment BEGIN SIFT4Options-2
///// Segment END

///// Segment BEGIN SIFT4-1
///// Segment END

///// Segment BEGIN SIFT4-2
///// Segment END

///// Segment IGNORE BEGIN
function assert_equal(a, b) {
    if (a != b) {
        throw Error("MyLogError MISMATCH");
    }
}

function testSIFT4() {
    var s = new SIFT4();
    
    var results = [
        ['This is the first string', 'And this is another string', 5, 11.0],
        ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Amet Lorm ispum dolor sit amet, consetetur adixxxpiscing elit.', 10, 12.0]
    ];

    for (var i = 0; i < results.length; i++) {
        var a = results[i][0];
        var b = results[i][1];
        var offset = results[i][2];
        var res = results[i][3];
        assert_equal(res, s.distance(a, b, offset));
    }
}

function test() {
    testSIFT4();
}

test();
///// Segment IGNORE END
