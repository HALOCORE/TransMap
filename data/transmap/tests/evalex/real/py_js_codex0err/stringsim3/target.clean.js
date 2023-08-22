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

///// Segment BEGIN SIFT4Options-1 DONE
class SIFT4Options {
    constructor(options) {
        this.options = {
            'maxdistance': 0,
            'tokenizer': x => [...x],
            'tokenmatcher': (t1, t2) => t1 == t2,
            'matchingevaluator': (t1, t2) => 1,
            'locallengthevaluator': x => x,
            'transpositioncostevaluator': (c1, c2) => 1,
            'transpositionsevaluator': (lcss, trans) => lcss - trans
        };
        let otheroptions = {
            'tokenizer': {
                'ngram': this.ngramtokenizer,
                'wordsplit': this.wordsplittokenizer,
                'characterfrequency': this.characterfrequencytokenizer
            },
            'tokematcher': {'sift4tokenmatcher': this.sift4tokenmatcher},
            'matchingevaluator': {'sift4matchingevaluator': this.sift4matchingevaluator},
            'locallengthevaluator': {
                'rewardlengthevaluator': this.rewardlengthevaluator,
                'rewardlengthevaluator2': this.rewardlengthevaluator2
            },
            'transpositioncostevaluator': {'longertranspositionsaremorecostly': this.longertranspositionsaremorecostly},
            'transpositionsevaluator': {}
        };
        if (typeof options === 'object') {
            for (let k in options) {
                if (options.hasOwnProperty(k)) {
                    let v = options[k];
                    if (this.options.hasOwnProperty(k)) {
                        if (k === 'maxdistance') {
                            if (typeof v === 'number') {
                                this.options[k] = v;
                            }
                            else {
                                throw new ValueError("Option maxdistance should be int");
                            }
                        }
                        else {
                            if (typeof v === 'function') {
                                this.options[k] = v;
                            }
                            else {
                                if (otheroptions[k].hasOwnProperty(v)) {
                                    this.options[k] = otheroptions[k][v];
                                }
                                else {
                                    let msg = "Option " + k + " should be callable or one of [" + Object.keys(otheroptions[k]).join(', ') + "]";
                                    throw new ValueError(msg);
                                }
                            }
                        }
                    }
                    else {
                        throw new ValueError("Option " + k + " not recognized.");
                    }
                }
            }
        }
        else if (options !== null) {
            throw new ValueError("options should be a dictionary");
        }
        this.maxdistance = this.options['maxdistance'];
        this.tokenizer = this.options['tokenizer'];
        this.tokenmatcher = this.options['tokenmatcher'];
        this.matchingevaluator = this.options['matchingevaluator'];
        this.locallengthevaluator = this.options['locallengthevaluator'];
        this.transpositioncostevaluator = this.options['transpositioncostevaluator'];
        this.transpositionsevaluator = this.options['transpositionsevaluator'];
    }


///// Segment END

///// Segment BEGIN SIFT4Options-2 DONE

    ngramtokenizer(s, n) {
        var result = [];
        if (!s) {
            return result;
        }
        for (var i = 0; i < s.length - n - 1; i++) {
            result.push(s.slice(i, i + n));
        }
        return result;
    }

    wordsplittokenizer(s) {
        if (!s) {
            return [];
        }
        return s.split();
    }

    characterfrequencytokenizer(s) {
        var letters = Array.from('abcdefghijklmnopqrstuvwxyz');
        return letters.map(x => s.toLowerCase().split(x).length - 1);
    }

    sift4tokenmatcher(t1, t2) {
        var similarity = 1 - SIFT4().distance(t1, t2, 5) / Math.max(t1.length, t2.length);
        return similarity > 0.7;
    }

    sift4matchingevaluator(t1, t2) {
        var similarity = 1 - SIFT4().distance(t1, t2, 5) / Math.max(t1.length, t2.length);
        return similarity;
    }

    rewardlengthevaluator(l) {
        if (l < 1) {
            return l;
        }
        return l - 1 / (l + 1);
    }

    rewardlengthevaluator2(l) {
        return Math.pow(l, 1.5);
    }

    longertranspositionsaremorecostly(c1, c2) {
        return Math.abs(c2 - c1) / 9 + 1;
    }
}

///// Segment END

///// Segment BEGIN SIFT4-1 DONE
class SIFT4 {
    // As described in https://siderite.dev/blog/super-fast-and-accurate-string-distance.html/
    distance(s1, s2, maxoffset = 5, options = null) {
        options = SIFT4Options(options);
        let [t1, t2] = [options.tokenizer(s1), options.tokenizer(s2)];
        let [l1, l2] = [t1.length, t2.length];
        if (l1 == 0) {
            return l2;
        }
        if (l2 == 0) {
            return l1;
        }


///// Segment END

///// Segment BEGIN SIFT4-2 DONE
        var c1 = 0, c2 = 0, lcss = 0, local_cs = 0, trans = 0, offset_arr = [];
        while ((c1 < l1) && (c2 < l2)) {
            if (options.tokenmatcher(t1[c1], t2[c2])) {
                local_cs += options.matchingevaluator(t1[c1], t2[c2]);
                var isTrans = false;
                var i = 0;
                while (i < offset_arr.length) {
                    var ofs = offset_arr[i];
                    if ((c1 <= ofs['c1']) || (c2 <= ofs['c2'])) {
                        isTrans = Math.abs(c2 - c1) >= Math.abs(ofs['c2'] - ofs['c1']);
                        if (isTrans) {
                            trans += options.transpositioncostevaluator(c1, c2);
                        }
                        else {
                            if (!ofs['trans']) {
                                ofs['trans'] = true;
                                trans += options.transpositioncostevaluator(ofs['c1'], ofs['c2']);
                            }
                        }
                        break;
                    }
                    else {
                        if ((c1 > ofs['c2']) && (c2 > ofs['c1'])) {
                            offset_arr.pop(i);
                        }
                        else {
                            i += 1;
                        }
                    }
                }
                offset_arr.push({ 'c1': c1, 'c2': c2, 'trans': isTrans });
            }
            else {
                lcss += options.locallengthevaluator(local_cs);
                local_cs = 0;
                if (c1 != c2) {
                    c1 = c2 = Math.min(c1, c2);
                }
                for (var i = 0; i < maxoffset; i++) {
                    if ((c1 + i < l1) || (c2 + i < l2)) {
                        if ((c1 + i < l1) && options.tokenmatcher(t1[c1 + i], t2[c2])) {
                            c1 += i - 1;
                            c2 -= 1;
                            break;
                        }
                    }
                    if ((c2 + i < l2) && options.tokenmatcher(t1[c1], t2[c2 + i])) {
                        c1 -= 1;
                        c2 += i - 1;
                        break;
                    }
                }
            }
            c1 += 1;
            c2 += 1;
            if (options.maxdistance) {
                var temporarydistance = options.locallengthevaluator(Math.max(c1, c2)) - options.transpositionsevaluator(lcss, trans);
                if (temporarydistance >= options.maxdistance) {
                    return Math.round(temporarydistance);
                }
            }
            if ((c1 >= l1) || (c2 >= l2)) {
                lcss += options.locallengthevaluator(local_cs);
                local_cs = 0;
                c1 = c2 = Math.min(c1, c2);
            }
        }
        lcss += options.locallengthevaluator(local_cs);
        return Math.round(options.locallengthevaluator(Math.max(l1, l2)) - options.transpositionsevaluator(lcss, trans));
    }
}

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
