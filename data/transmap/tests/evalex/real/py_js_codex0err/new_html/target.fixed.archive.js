///// Segment IGNORE BEGIN
"use strict";

let startsWithString = "";
function startsWith(prefix, startIndex = 0) {
    const slicedString = [...startsWithString].slice(startIndex, startIndex + prefix.length);
    return slicedString.join('') == prefix;
}

function assert(condition, message) {
    if (!condition) {
      throw new Error(message || "Assertion failed");
    }
}  

const name2codepoint = {
    'AElig':    0x00c6, // latin capital letter AE = latin capital ligature AE, U+00C6 ISOlat1
    // omitted
}

// maps the HTML5 named character references to the equivalent Unicode character(s)
const html5 = new Proxy({
        'Aacute': '\xc1', 'aacute': '\xe1', 'Aacute;': '\xc1', 'aacute;': '\xe1', 'Abreve;': '\u0102', 'abreve;': '\u0103', 'ac;': '\u223e', 'acd;': '\u223f', 'acE;': '\u223e\u0333', 'Acirc': '\xc2', 'acirc': '\xe2', 'Acirc;': '\xc2', 'acirc;': '\xe2', 'acute': '\xb4', 'acute;': '\xb4', 'Acy;': '\u0410', 'acy;': '\u0430', 'AElig': '\xc6', 'aelig': '\xe6', 'AElig;': '\xc6', 'aelig;': '\xe6', 'af;': '\u2061', 'Afr;': '\U0001d504', 'afr;': '\U0001d51e', 'Agrave': '\xc0', 'agrave': '\xe0', 'Agrave;': '\xc0', 'agrave;': '\xe0', 'alefsym;': '\u2135', 'aleph;': '\u2135', 'Alpha;': '\u0391', 'alpha;': '\u03b1', 'Amacr;': '\u0100', 'amacr;': '\u0101', 'amalg;': '\u2a3f', 'AMP': '&', 'amp': '&', 'AMP;': '&', 'amp;': '&', 'And;': '\u2a53', 'and;': '\u2227', 'andand;': '\u2a55', 'andd;': '\u2a5c', 'andslope;': '\u2a58', 'andv;': '\u2a5a', 'ang;': '\u2220', 'ange;': '\u29a4', 'angle;': '\u2220', 'angmsd;': '\u2221', 'angmsdaa;': '\u29a8', 'angmsdab;': '\u29a9', 'angmsdac;': '\u29aa', 'angmsdad;': '\u29ab', 'angmsdae;': '\u29ac', 'angmsdaf;': '\u29ad', 'angmsdag;': '\u29ae', 'angmsdah;': '\u29af', 'angrt;': '\u221f', 'angrtvb;': '\u22be', 'angrtvbd;': '\u299d', 'angsph;': '\u2222', 'angst;': '\xc5', 'angzarr;': '\u237c', 'Aogon;': '\u0104', 'aogon;': '\u0105', 'Aopf;': '\U0001d538', 'aopf;': '\U0001d552', 'ap;': '\u2248', 'apacir;': '\u2a6f', 'apE;': '\u2a70', 'ape;': '\u224a', 'apid;': '\u224b', 'apos;': "'", 'ApplyFunction;': '\u2061', 'approx;': '\u2248', 'approxeq;': '\u224a', 'Aring': '\xc5', 'aring': '\xe5', 'Aring;': '\xc5', 'aring;': '\xe5', 'Ascr;': '\U0001d49c', 'ascr;': '\U0001d4b6', 'Assign;': '\u2254', 'ast;': '*', 'asymp;': '\u2248', 'asympeq;': '\u224d', 'Atilde': '\xc3', 'atilde': '\xe3', 'Atilde;': '\xc3', 'atilde;': '\xe3', 'Auml': '\xc4', 'auml': '\xe4', 'Auml;': '\xc4', 'auml;': '\xe4', 'awconint;': '\u2233', 'awint;': '\u2a11', 'backcong;': '\u224c', 'backepsilon;': '\u03f6', 'backprime;': '\u2035', 'backsim;': '\u223d', 'backsimeq;': '\u22cd', 'Backslash;': '\u2216', 'Barv;': '\u2ae7', 'barvee;': '\u22bd', 'Barwed;': '\u2306', 'barwed;': '\u2305', 'barwedge;': '\u2305', 'bbrk;': '\u23b5', 'bbrktbrk;': '\u23b6', 'bcong;': '\u224c', 'Bcy;': '\u0411', 'bcy;': '\u0431', 'bdquo;': '\u201e', 'becaus;': '\u2235', 'Because;': '\u2235', 'because;': '\u2235', 'bemptyv;': '\u29b0', 'bepsi;': '\u03f6', 'bernou;': '\u212c', 'Bernoullis;': '\u212c', 'Beta;': '\u0392', 'beta;': '\u03b2', 'beth;': '\u2136', 'between;': '\u226c', 'Bfr;': '\U0001d505', 'bfr;': '\U0001d51f', 'bigcap;': '\u22c2', 'bigcirc;': '\u25ef', 'bigcup;': '\u22c3', 'bigodot;': '\u2a00', 'bigoplus;': '\u2a01', 'bigotimes;': '\u2a02', 'bigsqcup;': '\u2a06', 'bigstar;': '\u2605', 'bigtriangledown;': '\u25bd', 'bigtriangleup;': '\u25b3', 'biguplus;': '\u2a04', 'bigvee;': '\u22c1', 'bigwedge;': '\u22c0', 'bkarow;': '\u290d', 'blacklozenge;': '\u29eb', 'blacksquare;': '\u25aa', 'blacktriangle;': '\u25b4', 'blacktriangledown;': '\u25be', 'blacktriangleleft;': '\u25c2', 'blacktriangleright;': '\u25b8', 'blank;': '\u2423', 'blk12;': '\u2592', 'blk14;': '\u2591', 'blk34;': '\u2593', 'block;': '\u2588', 'bne;': '=\u20e5', 'bnequiv;': '\u2261\u20e5', 'bNot;': '\u2aed', 'bnot;': '\u2310', 'Bopf;': '\U0001d539', 'bopf;': '\U0001d553', 'bot;': '\u22a5', 'bottom;': '\u22a5', 'bowtie;': '\u22c8', 'boxbox;': '\u29c9', 'boxDL;': '\u2557', 'boxDl;': '\u2556', 'boxdL;': '\u2555', 'boxdl;': '\u2510', 'boxDR;': '\u2554', 'boxDr;': '\u2553', 'boxdR;': '\u2552', 'boxdr;': '\u250c', 'boxH;': '\u2550', 'boxh;': '\u2500', 'boxHD;': '\u2566', 'boxHd;': '\u2564', 'boxhD;': '\u2565', 'boxhd;': '\u252c', 'boxHU;': '\u2569', 'boxHu;': '\u2567', 'boxhU;': '\u2568', 'boxhu;': '\u2534', 'boxminus;': '\u229f', 'boxplus;': '\u229e', 'boxtimes;': '\u22a0', 'boxUL;': '\u255d', 'boxUl;': '\u255c', 'boxuL;': '\u255b', 'boxul;': '\u2518', 'boxUR;': '\u255a', 'boxUr;': '\u2559', 'boxuR;': '\u2558', 'boxur;': '\u2514', 'boxV;': '\u2551', 'boxv;': '\u2502', 'boxVH;': '\u256c', 'boxVh;': '\u256b', 'boxvH;': '\u256a', 'boxvh;': '\u253c', 'boxVL;': '\u2563', 'boxVl;': '\u2562', 'boxvL;': '\u2561', 'boxvl;': '\u2524', 'boxVR;': '\u2560', 'boxVr;': '\u255f', 'boxvR;': '\u255e', 'boxvr;': '\u251c', 'bprime;': '\u2035', 'Breve;': '\u02d8', 'breve;': '\u02d8', 'brvbar': '\xa6', 'brvbar;': '\xa6', 'Bscr;': '\u212c', 'bscr;': '\U0001d4b7', 'bsemi;': '\u204f', 'bsim;': '\u223d', 'bsime;': '\u22cd', 'bsol;': '\\', 'bsolb;': '\u29c5', 'bsolhsub;': '\u27c8', 'bull;': '\u2022', 'bullet;': '\u2022', 'bump;': '\u224e', 'bumpE;': '\u2aae', 'bumpe;': '\u224f', 'Bumpeq;': '\u224e', 'bumpeq;': '\u224f', 'Cacute;': '\u0106', 'cacute;': '\u0107', 'Cap;': '\u22d2', 'cap;': '\u2229', 'capand;': '\u2a44', 'capbrcup;': '\u2a49', 'capcap;': '\u2a4b', 'capcup;': '\u2a47', 'capdot;': '\u2a40', 'CapitalDifferentialD;': '\u2145', 'caps;': '\u2229\ufe00', 'caret;': '\u2041', 'caron;': '\u02c7', 'Cayleys;': '\u212d', 'ccaps;': '\u2a4d', 'Ccaron;': '\u010c', 'ccaron;': '\u010d', 'Ccedil': '\xc7', 'ccedil': '\xe7', 'Ccedil;': '\xc7', 'ccedil;': '\xe7', 'Ccirc;': '\u0108', 'ccirc;': '\u0109', 'Cconint;': '\u2230', 'ccups;': '\u2a4c', 'ccupssm;': '\u2a50', 'Cdot;': '\u010a', 'cdot;': '\u010b', 'cedil': '\xb8', 'cedil;': '\xb8', 'Cedilla;': '\xb8', 'cemptyv;': '\u29b2', 'cent': '\xa2', 'cent;': '\xa2', 'CenterDot;': '\xb7', 'centerdot;': '\xb7', 'Cfr;': '\u212d', 'cfr;': '\U0001d520', 'CHcy;': '\u0427', 'chcy;': '\u0447', 'check;': '\u2713', 'checkmark;': '\u2713', 'Chi;': '\u03a7', 'chi;': '\u03c7', 'cir;': '\u25cb', 'circ;': '\u02c6', 'circeq;': '\u2257', 'circlearrowleft;': '\u21ba', 'circlearrowright;': '\u21bb', 'circledast;': '\u229b', 'circledcirc;': '\u229a', 'circleddash;': '\u229d', 'CircleDot;': '\u2299', 'circledR;': '\xae', 'circledS;': '\u24c8', 'CircleMinus;': '\u2296', 'CirclePlus;': '\u2295', 'CircleTimes;': '\u2297', 'cirE;': '\u29c3', 'cire;': '\u2257', 'cirfnint;': '\u2a10', 'cirmid;': '\u2aef', 'cirscir;': '\u29c2', 'ClockwiseContourIntegral;': '\u2232', 'CloseCurlyDoubleQuote;': '\u201d', 'CloseCurlyQuote;': '\u2019', 'clubs;': '\u2663', 'clubsuit;': '\u2663', 'Colon;': '\u2237', 'colon;': ':', 'Colone;': '\u2a74', 'colone;': '\u2254', 'coloneq;': '\u2254', 'comma;': ',', 'commat;': '@', 'comp;': '\u2201', 'compfn;': '\u2218', 'complement;': '\u2201', 'complexes;': '\u2102', 'cong;': '\u2245', 'congdot;': '\u2a6d', 'Congruent;': '\u2261', 'Conint;': '\u222f', 'conint;': '\u222e', 'ContourIntegral;': '\u222e', 'Copf;': '\u2102', 'copf;': '\U0001d554', 'coprod;': '\u2210', 'Coproduct;': '\u2210', 'COPY': '\xa9', 'copy': '\xa9', 'COPY;': '\xa9', 'copy;': '\xa9', 'copysr;': '\u2117', 'CounterClockwiseContourIntegral;': '\u2233', 'crarr;': '\u21b5', 'Cross;': '\u2a2f', 'cross;': '\u2717', 'Cscr;': '\U0001d49e', 'cscr;': '\U0001d4b8', 'csub;': '\u2acf', 'csube;': '\u2ad1', 'csup;': '\u2ad0', 'csupe;': '\u2ad2', 'ctdot;': '\u22ef', 'cudarrl;': '\u2938', 'cudarrr;': '\u2935', 'cuepr;': '\u22de', 'cuesc;': '\u22df', 'cularr;': '\u21b6', 'cularrp;': '\u293d', 'Cup;': '\u22d3', 'cup;': '\u222a', 'cupbrcap;': '\u2a48', 'CupCap;': '\u224d', 'cupcap;': '\u2a46', 'cupcup;': '\u2a4a', 'cupdot;': '\u228d', 'cupor;': '\u2a45', 'cups;': '\u222a\ufe00', 'curarr;': '\u21b7', 'curarrm;': '\u293c', 'curlyeqprec;': '\u22de', 'curlyeqsucc;': '\u22df', 'curlyvee;': '\u22ce', 'curlywedge;': '\u22cf', 'curren': '\xa4', 'curren;': '\xa4', 'curvearrowleft;': '\u21b6', 'curvearrowright;': '\u21b7', 'cuvee;': '\u22ce', 'cuwed;': '\u22cf', 'cwconint;': '\u2232', 'cwint;': '\u2231', 'cylcty;': '\u232d', 'Dagger;': '\u2021', 'dagger;': '\u2020', 'daleth;': '\u2138', 'Darr;': '\u21a1', 'dArr;': '\u21d3', 'darr;': '\u2193', 'dash;': '\u2010', 'Dashv;': '\u2ae4', 'dashv;': '\u22a3', 'dbkarow;': '\u290f', 'dblac;': '\u02dd', 'Dcaron;': '\u010e', 'dcaron;': '\u010f', 'Dcy;': '\u0414', 'dcy;': '\u0434', 'DD;': '\u2145', 'dd;': '\u2146', 'ddagger;': '\u2021', 'ddarr;': '\u21ca', 'DDotrahd;': '\u2911', 'ddotseq;': '\u2a77', 'deg': '\xb0', 'deg;': '\xb0', 'Del;': '\u2207', 'Delta;': '\u0394', 'delta;': '\u03b4', 'demptyv;': '\u29b1', 'dfisht;': '\u297f', 'Dfr;': '\U0001d507', 'dfr;': '\U0001d521', 'dHar;': '\u2965', 'dharl;': '\u21c3', 'dharr;': '\u21c2', 'DiacriticalAcute;': '\xb4', 'DiacriticalDot;': '\u02d9', 'DiacriticalDoubleAcute;': '\u02dd', 'DiacriticalGrave;': '`', 'DiacriticalTilde;': '\u02dc', 'diam;': '\u22c4', 'Diamond;': '\u22c4', 'diamond;': '\u22c4', 'diamondsuit;': '\u2666', 'diams;': '\u2666', 'die;': '\xa8', 'DifferentialD;': '\u2146', 'digamma;': '\u03dd', 'disin;': '\u22f2', 'div;': '\xf7', 'divide': '\xf7', 'divide;': '\xf7', 'divideontimes;': '\u22c7', 'divonx;': '\u22c7', 'DJcy;': '\u0402', 'djcy;': '\u0452', 'dlcorn;': '\u231e', 'dlcrop;': '\u230d', 'dollar;': '$', 'Dopf;': '\U0001d53b', 'dopf;': '\U0001d555', 'Dot;': '\xa8', 'dot;': '\u02d9', 'DotDot;': '\u20dc', 'doteq;': '\u2250', 'doteqdot;': '\u2251', 'DotEqual;': '\u2250', 'dotminus;': '\u2238', 'dotplus;': '\u2214', 'dotsquare;': '\u22a1', 'doublebarwedge;': '\u2306', 'DoubleContourIntegral;': '\u222f', 'DoubleDot;': '\xa8', 'DoubleDownArrow;': '\u21d3', 'DoubleLeftArrow;': '\u21d0', 'DoubleLeftRightArrow;': '\u21d4', 'DoubleLeftTee;': '\u2ae4', 'DoubleLongLeftArrow;': '\u27f8', 'DoubleLongLeftRightArrow;': '\u27fa', 'DoubleLongRightArrow;': '\u27f9', 'DoubleRightArrow;': '\u21d2', 'DoubleRightTee;': '\u22a8', 'DoubleUpArrow;': '\u21d1', 'DoubleUpDownArrow;': '\u21d5', 'DoubleVerticalBar;': '\u2225', 'DownArrow;': '\u2193', 'Downarrow;': '\u21d3', 'downarrow;': '\u2193', 'DownArrowBar;': '\u2913', 'DownArrowUpArrow;': '\u21f5', 'DownBreve;': '\u0311', 'downdownarrows;': '\u21ca', 'downharpoonleft;': '\u21c3', 'downharpoonright;': '\u21c2', 'DownLeftRightVector;': '\u2950', 'DownLeftTeeVector;': '\u295e', 'DownLeftVector;': '\u21bd', 'DownLeftVectorBar;': '\u2956', 'DownRightTeeVector;': '\u295f', 'DownRightVector;': '\u21c1', 'DownRightVectorBar;': '\u2957', 'DownTee;': '\u22a4', 'DownTeeArrow;': '\u21a7', 'drbkarow;': '\u2910', 'drcorn;': '\u231f', 'drcrop;': '\u230c', 'Dscr;': '\U0001d49f', 'dscr;': '\U0001d4b9', 'DScy;': '\u0405', 'dscy;': '\u0455', 'dsol;': '\u29f6', 'Dstrok;': '\u0110', 'dstrok;': '\u0111', 'dtdot;': '\u22f1', 'dtri;': '\u25bf', 'dtrif;': '\u25be', 'duarr;': '\u21f5', 'duhar;': '\u296f', 'dwangle;': '\u29a6', 'DZcy;': '\u040f', 'dzcy;': '\u045f', 'dzigrarr;': '\u27ff', 'Eacute': '\xc9', 'eacute': '\xe9', 'Eacute;': '\xc9', 'eacute;': '\xe9', 'easter;': '\u2a6e', 'Ecaron;': '\u011a', 'ecaron;': '\u011b', 'ecir;': '\u2256', 'Ecirc': '\xca', 'ecirc': '\xea', 'Ecirc;': '\xca', 'ecirc;': '\xea', 'ecolon;': '\u2255', 'Ecy;': '\u042d', 'ecy;': '\u044d', 'eDDot;': '\u2a77', 'Edot;': '\u0116', 'eDot;': '\u2251', 'edot;': '\u0117', 'ee;': '\u2147', 'efDot;': '\u2252', 'Efr;': '\U0001d508', 'efr;': '\U0001d522', 'eg;': '\u2a9a', 'Egrave': '\xc8', 'egrave': '\xe8', 'Egrave;': '\xc8', 'egrave;': '\xe8', 'egs;': '\u2a96', 'egsdot;': '\u2a98', 'el;': '\u2a99', 'Element;': '\u2208', 'elinters;': '\u23e7', 'ell;': '\u2113', 'els;': '\u2a95', 'elsdot;': '\u2a97', 'Emacr;': '\u0112', 'emacr;': '\u0113', 'empty;': '\u2205', 'emptyset;': '\u2205', 'EmptySmallSquare;': '\u25fb', 'emptyv;': '\u2205', 'EmptyVerySmallSquare;': '\u25ab', 'emsp13;': '\u2004', 'emsp14;': '\u2005', 'emsp;': '\u2003', 'ENG;': '\u014a', 'eng;': '\u014b', 'ensp;': '\u2002', 'Eogon;': '\u0118', 'eogon;': '\u0119', 'Eopf;': '\U0001d53c', 'eopf;': '\U0001d556', 'epar;': '\u22d5', 'eparsl;': '\u29e3', 'eplus;': '\u2a71', 'epsi;': '\u03b5', 'Epsilon;': '\u0395', 'epsilon;': '\u03b5', 'epsiv;': '\u03f5', 'eqcirc;': '\u2256', 'eqcolon;': '\u2255', 'eqsim;': '\u2242', 'eqslantgtr;': '\u2a96', 'eqslantless;': '\u2a95', 'Equal;': '\u2a75', 'equals;': '=', 'EqualTilde;': '\u2242', 'equest;': '\u225f', 'Equilibrium;': '\u21cc', 'equiv;': '\u2261', 'equivDD;': '\u2a78', 'eqvparsl;': '\u29e5', 'erarr;': '\u2971', 'erDot;': '\u2253', 'Escr;': '\u2130', 'escr;': '\u212f', 'esdot;': '\u2250', 'Esim;': '\u2a73', 'esim;': '\u2242', 'Eta;': '\u0397', 'eta;': '\u03b7', 'ETH': '\xd0', 'eth': '\xf0', 'ETH;': '\xd0', 'eth;': '\xf0', 'Euml': '\xcb', 'euml': '\xeb', 'Euml;': '\xcb', 'euml;': '\xeb', 'euro;': '\u20ac', 'excl;': '!', 'exist;': '\u2203', 'Exists;': '\u2203', 'expectation;': '\u2130', 'ExponentialE;': '\u2147', 'exponentiale;': '\u2147', 'fallingdotseq;': '\u2252', 'Fcy;': '\u0424', 'fcy;': '\u0444', 'female;': '\u2640', 'ffilig;': '\ufb03', 'fflig;': '\ufb00', 'ffllig;': '\ufb04', 'Ffr;': '\U0001d509', 'ffr;': '\U0001d523', 'filig;': '\ufb01', 'FilledSmallSquare;': '\u25fc', 'FilledVerySmallSquare;': '\u25aa', 'fjlig;': 'fj', 'flat;': '\u266d', 'fllig;': '\ufb02', 'fltns;': '\u25b1', 'fnof;': '\u0192', 'Fopf;': '\U0001d53d', 'fopf;': '\U0001d557', 'ForAll;': '\u2200', 'forall;': '\u2200', 'fork;': '\u22d4', 'forkv;': '\u2ad9', 'Fouriertrf;': '\u2131', 'fpartint;': '\u2a0d', 'frac12': '\xbd', 'frac12;': '\xbd', 'frac13;': '\u2153', 'frac14': '\xbc', 'frac14;': '\xbc', 'frac15;': '\u2155', 'frac16;': '\u2159', 'frac18;': '\u215b', 'frac23;': '\u2154', 'frac25;': '\u2156', 'frac34': '\xbe', 'frac34;': '\xbe', 'frac35;': '\u2157', 'frac38;': '\u215c', 'frac45;': '\u2158', 'frac56;': '\u215a', 'frac58;': '\u215d', 'frac78;': '\u215e', 'frasl;': '\u2044', 'frown;': '\u2322', 'Fscr;': '\u2131', 'fscr;': '\U0001d4bb', 'gacute;': '\u01f5', 'Gamma;': '\u0393', 'gamma;': '\u03b3', 'Gammad;': '\u03dc', 'gammad;': '\u03dd', 'gap;': '\u2a86', 'Gbreve;': '\u011e', 'gbreve;': '\u011f', 'Gcedil;': '\u0122', 'Gcirc;': '\u011c', 'gcirc;': '\u011d', 'Gcy;': '\u0413', 'gcy;': '\u0433', 'Gdot;': '\u0120', 'gdot;': '\u0121', 'gE;': '\u2267', 'ge;': '\u2265', 'gEl;': '\u2a8c', 'gel;': '\u22db', 'geq;': '\u2265', 'geqq;': '\u2267', 'geqslant;': '\u2a7e', 'ges;': '\u2a7e', 'gescc;': '\u2aa9', 'gesdot;': '\u2a80', 'gesdoto;': '\u2a82', 'gesdotol;': '\u2a84', 'gesl;': '\u22db\ufe00', 'gesles;': '\u2a94', 'Gfr;': '\U0001d50a', 'gfr;': '\U0001d524', 'Gg;': '\u22d9', 'gg;': '\u226b', 'ggg;': '\u22d9', 'gimel;': '\u2137', 'GJcy;': '\u0403', 'gjcy;': '\u0453', 'gl;': '\u2277', 'gla;': '\u2aa5', 'glE;': '\u2a92', 'glj;': '\u2aa4', 'gnap;': '\u2a8a', 'gnapprox;': '\u2a8a', 'gnE;': '\u2269', 'gne;': '\u2a88', 'gneq;': '\u2a88', 'gneqq;': '\u2269', 'gnsim;': '\u22e7', 'Gopf;': '\U0001d53e', 'gopf;': '\U0001d558', 'grave;': '`', 'GreaterEqual;': '\u2265', 'GreaterEqualLess;': '\u22db', 'GreaterFullEqual;': '\u2267', 'GreaterGreater;': '\u2aa2', 'GreaterLess;': '\u2277', 'GreaterSlantEqual;': '\u2a7e', 'GreaterTilde;': '\u2273', 'Gscr;': '\U0001d4a2', 'gscr;': '\u210a', 'gsim;': '\u2273', 'gsime;': '\u2a8e', 'gsiml;': '\u2a90', 'GT': '>', 'gt': '>', 'GT;': '>', 'Gt;': '\u226b', 'gt;': '>', 'gtcc;': '\u2aa7', 'gtcir;': '\u2a7a', 'gtdot;': '\u22d7', 'gtlPar;': '\u2995', 'gtquest;': '\u2a7c', 'gtrapprox;': '\u2a86', 'gtrarr;': '\u2978', 'gtrdot;': '\u22d7', 'gtreqless;': '\u22db', 'gtreqqless;': '\u2a8c', 'gtrless;': '\u2277', 'gtrsim;': '\u2273', 'gvertneqq;': '\u2269\ufe00', 'gvnE;': '\u2269\ufe00', 'Hacek;': '\u02c7', 'hairsp;': '\u200a', 'half;': '\xbd', 'hamilt;': '\u210b', 'HARDcy;': '\u042a', 'hardcy;': '\u044a', 'hArr;': '\u21d4', 'harr;': '\u2194', 'harrcir;': '\u2948', 'harrw;': '\u21ad', 'Hat;': '^', 'hbar;': '\u210f', 'Hcirc;': '\u0124', 'hcirc;': '\u0125', 'hearts;': '\u2665', 'heartsuit;': '\u2665', 'hellip;': '\u2026', 'hercon;': '\u22b9', 'Hfr;': '\u210c', 'hfr;': '\U0001d525', 'HilbertSpace;': '\u210b', 'hksearow;': '\u2925', 'hkswarow;': '\u2926', 'hoarr;': '\u21ff', 'homtht;': '\u223b', 'hookleftarrow;': '\u21a9', 'hookrightarrow;': '\u21aa', 'Hopf;': '\u210d', 'hopf;': '\U0001d559', 'horbar;': '\u2015', 'HorizontalLine;': '\u2500', 'Hscr;': '\u210b', 'hscr;': '\U0001d4bd', 'hslash;': '\u210f', 'Hstrok;': '\u0126', 'hstrok;': '\u0127', 'HumpDownHump;': '\u224e', 'HumpEqual;': '\u224f', 'hybull;': '\u2043', 'hyphen;': '\u2010', 'Iacute': '\xcd', 'iacute': '\xed', 'Iacute;': '\xcd', 'iacute;': '\xed', 'ic;': '\u2063', 'Icirc': '\xce', 'icirc': '\xee', 'Icirc;': '\xce', 'icirc;': '\xee', 'Icy;': '\u0418', 'icy;': '\u0438', 'Idot;': '\u0130', 'IEcy;': '\u0415', 'iecy;': '\u0435', 'iexcl': '\xa1', 'iexcl;': '\xa1', 'iff;': '\u21d4', 'Ifr;': '\u2111', 'ifr;': '\U0001d526', 'Igrave': '\xcc', 'igrave': '\xec', 'Igrave;': '\xcc', 'igrave;': '\xec', 'ii;': '\u2148', 'iiiint;': '\u2a0c', 'iiint;': '\u222d', 'iinfin;': '\u29dc', 'iiota;': '\u2129', 'IJlig;': '\u0132', 'ijlig;': '\u0133', 'Im;': '\u2111', 'Imacr;': '\u012a', 'imacr;': '\u012b', 'image;': '\u2111', 'ImaginaryI;': '\u2148', 'imagline;': '\u2110', 'imagpart;': '\u2111', 'imath;': '\u0131', 'imof;': '\u22b7', 'imped;': '\u01b5', 'Implies;': '\u21d2', 'in;': '\u2208', 'incare;': '\u2105', 'infin;': '\u221e', 'infintie;': '\u29dd', 'inodot;': '\u0131', 'Int;': '\u222c', 'int;': '\u222b', 'intcal;': '\u22ba', 'integers;': '\u2124', 'Integral;': '\u222b', 'intercal;': '\u22ba', 'Intersection;': '\u22c2', 'intlarhk;': '\u2a17', 'intprod;': '\u2a3c', 'InvisibleComma;': '\u2063', 'InvisibleTimes;': '\u2062', 'IOcy;': '\u0401', 'iocy;': '\u0451', 'Iogon;': '\u012e', 'iogon;': '\u012f', 'Iopf;': '\U0001d540', 'iopf;': '\U0001d55a', 'Iota;': '\u0399', 'iota;': '\u03b9', 'iprod;': '\u2a3c', 'iquest': '\xbf', 'iquest;': '\xbf', 'Iscr;': '\u2110', 'iscr;': '\U0001d4be', 'isin;': '\u2208', 'isindot;': '\u22f5', 'isinE;': '\u22f9', 'isins;': '\u22f4', 'isinsv;': '\u22f3', 'isinv;': '\u2208', 'it;': '\u2062', 'Itilde;': '\u0128', 'itilde;': '\u0129', 'Iukcy;': '\u0406', 'iukcy;': '\u0456', 'Iuml': '\xcf', 'iuml': '\xef', 'Iuml;': '\xcf', 'iuml;': '\xef', 'Jcirc;': '\u0134', 'jcirc;': '\u0135', 'Jcy;': '\u0419', 'jcy;': '\u0439', 'Jfr;': '\U0001d50d', 'jfr;': '\U0001d527', 'jmath;': '\u0237', 'Jopf;': '\U0001d541', 'jopf;': '\U0001d55b', 'Jscr;': '\U0001d4a5', 'jscr;': '\U0001d4bf', 'Jsercy;': '\u0408', 'jsercy;': '\u0458', 'Jukcy;': '\u0404', 'jukcy;': '\u0454', 'Kappa;': '\u039a', 'kappa;': '\u03ba', 'kappav;': '\u03f0', 'Kcedil;': '\u0136', 'kcedil;': '\u0137', 'Kcy;': '\u041a', 'kcy;': '\u043a', 'Kfr;': '\U0001d50e', 'kfr;': '\U0001d528', 'kgreen;': '\u0138', 'KHcy;': '\u0425', 'khcy;': '\u0445', 'KJcy;': '\u040c', 'kjcy;': '\u045c', 'Kopf;': '\U0001d542', 'kopf;': '\U0001d55c', 'Kscr;': '\U0001d4a6', 'kscr;': '\U0001d4c0', 'lAarr;': '\u21da', 'Lacute;': '\u0139', 'lacute;': '\u013a', 'laemptyv;': '\u29b4', 'lagran;': '\u2112', 'Lambda;': '\u039b', 'lambda;': '\u03bb', 'Lang;': '\u27ea', 'lang;': '\u27e8', 'langd;': '\u2991', 'langle;': '\u27e8', 'lap;': '\u2a85', 'Laplacetrf;': '\u2112', 'laquo': '\xab', 'laquo;': '\xab', 'Larr;': '\u219e', 'lArr;': '\u21d0', 'larr;': '\u2190', 'larrb;': '\u21e4', 'larrbfs;': '\u291f', 'larrfs;': '\u291d', 'larrhk;': '\u21a9', 'larrlp;': '\u21ab', 'larrpl;': '\u2939', 'larrsim;': '\u2973', 'larrtl;': '\u21a2', 'lat;': '\u2aab', 'lAtail;': '\u291b', 'latail;': '\u2919', 'late;': '\u2aad', 'lates;': '\u2aad\ufe00', 'lBarr;': '\u290e', 'lbarr;': '\u290c', 'lbbrk;': '\u2772', 'lbrace;': '{', 'lbrack;': '[', 'lbrke;': '\u298b', 'lbrksld;': '\u298f', 'lbrkslu;': '\u298d', 'Lcaron;': '\u013d', 'lcaron;': '\u013e', 'Lcedil;': '\u013b', 'lcedil;': '\u013c', 'lceil;': '\u2308', 'lcub;': '{', 'Lcy;': '\u041b', 'lcy;': '\u043b', 'ldca;': '\u2936', 'ldquo;': '\u201c', 'ldquor;': '\u201e', 'ldrdhar;': '\u2967', 'ldrushar;': '\u294b', 'ldsh;': '\u21b2', 'lE;': '\u2266', 'le;': '\u2264', 'LeftAngleBracket;': '\u27e8', 'LeftArrow;': '\u2190', 'Leftarrow;': '\u21d0', 'leftarrow;': '\u2190', 'LeftArrowBar;': '\u21e4', 'LeftArrowRightArrow;': '\u21c6', 'leftarrowtail;': '\u21a2', 'LeftCeiling;': '\u2308', 'LeftDoubleBracket;': '\u27e6', 'LeftDownTeeVector;': '\u2961', 'LeftDownVector;': '\u21c3', 'LeftDownVectorBar;': '\u2959', 'LeftFloor;': '\u230a', 'leftharpoondown;': '\u21bd', 'leftharpoonup;': '\u21bc', 'leftleftarrows;': '\u21c7', 'LeftRightArrow;': '\u2194', 'Leftrightarrow;': '\u21d4', 'leftrightarrow;': '\u2194', 'leftrightarrows;': '\u21c6', 'leftrightharpoons;': '\u21cb', 'leftrightsquigarrow;': '\u21ad', 'LeftRightVector;': '\u294e', 'LeftTee;': '\u22a3', 'LeftTeeArrow;': '\u21a4', 'LeftTeeVector;': '\u295a', 'leftthreetimes;': '\u22cb', 'LeftTriangle;': '\u22b2', 'LeftTriangleBar;': '\u29cf', 'LeftTriangleEqual;': '\u22b4', 'LeftUpDownVector;': '\u2951', 'LeftUpTeeVector;': '\u2960', 'LeftUpVector;': '\u21bf', 'LeftUpVectorBar;': '\u2958', 'LeftVector;': '\u21bc', 'LeftVectorBar;': '\u2952', 'lEg;': '\u2a8b', 'leg;': '\u22da', 'leq;': '\u2264', 'leqq;': '\u2266', 'leqslant;': '\u2a7d', 'les;': '\u2a7d', 'lescc;': '\u2aa8', 'lesdot;': '\u2a7f', 'lesdoto;': '\u2a81', 'lesdotor;': '\u2a83', 'lesg;': '\u22da\ufe00', 'lesges;': '\u2a93', 'lessapprox;': '\u2a85', 'lessdot;': '\u22d6', 'lesseqgtr;': '\u22da', 'lesseqqgtr;': '\u2a8b', 'LessEqualGreater;': '\u22da', 'LessFullEqual;': '\u2266', 'LessGreater;': '\u2276', 'lessgtr;': '\u2276', 'LessLess;': '\u2aa1', 'lesssim;': '\u2272', 'LessSlantEqual;': '\u2a7d', 'LessTilde;': '\u2272', 'lfisht;': '\u297c', 'lfloor;': '\u230a', 'Lfr;': '\U0001d50f', 'lfr;': '\U0001d529', 'lg;': '\u2276', 'lgE;': '\u2a91', 'lHar;': '\u2962', 'lhard;': '\u21bd', 'lharu;': '\u21bc', 'lharul;': '\u296a', 'lhblk;': '\u2584', 'LJcy;': '\u0409', 'ljcy;': '\u0459', 'Ll;': '\u22d8', 'll;': '\u226a', 'llarr;': '\u21c7', 'llcorner;': '\u231e', 'Lleftarrow;': '\u21da', 'llhard;': '\u296b', 'lltri;': '\u25fa', 'Lmidot;': '\u013f', 'lmidot;': '\u0140', 'lmoust;': '\u23b0', 'lmoustache;': '\u23b0', 'lnap;': '\u2a89', 'lnapprox;': '\u2a89', 'lnE;': '\u2268', 'lne;': '\u2a87', 'lneq;': '\u2a87', 'lneqq;': '\u2268', 'lnsim;': '\u22e6', 'loang;': '\u27ec', 'loarr;': '\u21fd', 'lobrk;': '\u27e6', 'LongLeftArrow;': '\u27f5', 'Longleftarrow;': '\u27f8', 'longleftarrow;': '\u27f5', 'LongLeftRightArrow;': '\u27f7', 'Longleftrightarrow;': '\u27fa', 'longleftrightarrow;': '\u27f7', 'longmapsto;': '\u27fc', 'LongRightArrow;': '\u27f6', 'Longrightarrow;': '\u27f9', 'longrightarrow;': '\u27f6', 'looparrowleft;': '\u21ab', 'looparrowright;': '\u21ac', 'lopar;': '\u2985', 'Lopf;': '\U0001d543', 'lopf;': '\U0001d55d', 'loplus;': '\u2a2d', 'lotimes;': '\u2a34', 'lowast;': '\u2217', 'lowbar;': '_', 'LowerLeftArrow;': '\u2199', 'LowerRightArrow;': '\u2198', 'loz;': '\u25ca', 'lozenge;': '\u25ca', 'lozf;': '\u29eb', 'lpar;': '(', 'lparlt;': '\u2993', 'lrarr;': '\u21c6', 'lrcorner;': '\u231f', 'lrhar;': '\u21cb', 'lrhard;': '\u296d', 'lrm;': '\u200e', 'lrtri;': '\u22bf', 'lsaquo;': '\u2039', 'Lscr;': '\u2112', 'lscr;': '\U0001d4c1', 'Lsh;': '\u21b0', 'lsh;': '\u21b0', 'lsim;': '\u2272', 'lsime;': '\u2a8d', 'lsimg;': '\u2a8f', 'lsqb;': '[', 'lsquo;': '\u2018', 'lsquor;': '\u201a', 'Lstrok;': '\u0141', 'lstrok;': '\u0142', 'LT': '<', 'lt': '<', 'LT;': '<', 'Lt;': '\u226a', 'lt;': '<', 'ltcc;': '\u2aa6', 'ltcir;': '\u2a79', 'ltdot;': '\u22d6', 'lthree;': '\u22cb', 'ltimes;': '\u22c9', 'ltlarr;': '\u2976', 'ltquest;': '\u2a7b', 'ltri;': '\u25c3', 'ltrie;': '\u22b4', 'ltrif;': '\u25c2', 'ltrPar;': '\u2996', 'lurdshar;': '\u294a', 'luruhar;': '\u2966', 'lvertneqq;': '\u2268\ufe00', 'lvnE;': '\u2268\ufe00', 'macr': '\xaf', 'macr;': '\xaf', 'male;': '\u2642', 'malt;': '\u2720', 'maltese;': '\u2720', 'Map;': '\u2905', 'map;': '\u21a6', 'mapsto;': '\u21a6', 'mapstodown;': '\u21a7', 'mapstoleft;': '\u21a4', 'mapstoup;': '\u21a5', 'marker;': '\u25ae', 'mcomma;': '\u2a29', 'Mcy;': '\u041c', 'mcy;': '\u043c', 'mdash;': '\u2014', 'mDDot;': '\u223a', 'measuredangle;': '\u2221', 'MediumSpace;': '\u205f', 'Mellintrf;': '\u2133', 'Mfr;': '\U0001d510', 'mfr;': '\U0001d52a', 'mho;': '\u2127', 'micro': '\xb5', 'micro;': '\xb5', 'mid;': '\u2223', 'midast;': '*', 'midcir;': '\u2af0', 'middot': '\xb7', 'middot;': '\xb7', 'minus;': '\u2212', 'minusb;': '\u229f', 'minusd;': '\u2238', 'minusdu;': '\u2a2a', 'MinusPlus;': '\u2213', 'mlcp;': '\u2adb', 'mldr;': '\u2026', 'mnplus;': '\u2213', 'models;': '\u22a7', 'Mopf;': '\U0001d544', 'mopf;': '\U0001d55e', 'mp;': '\u2213', 'Mscr;': '\u2133', 'mscr;': '\U0001d4c2', 'mstpos;': '\u223e', 'Mu;': '\u039c', 'mu;': '\u03bc', 'multimap;': '\u22b8', 'mumap;': '\u22b8', 'nabla;': '\u2207', 'Nacute;': '\u0143', 'nacute;': '\u0144', 'nang;': '\u2220\u20d2', 'nap;': '\u2249', 'napE;': '\u2a70\u0338', 'napid;': '\u224b\u0338', 'napos;': '\u0149', 'napprox;': '\u2249', 'natur;': '\u266e', 'natural;': '\u266e', 'naturals;': '\u2115', 'nbsp': '\xa0', 'nbsp;': '\xa0', 'nbump;': '\u224e\u0338', 'nbumpe;': '\u224f\u0338', 'ncap;': '\u2a43', 'Ncaron;': '\u0147', 'ncaron;': '\u0148', 'Ncedil;': '\u0145', 'ncedil;': '\u0146', 'ncong;': '\u2247', 'ncongdot;': '\u2a6d\u0338', 'ncup;': '\u2a42', 'Ncy;': '\u041d', 'ncy;': '\u043d', 'ndash;': '\u2013', 'ne;': '\u2260', 'nearhk;': '\u2924', 'neArr;': '\u21d7', 'nearr;': '\u2197', 'nearrow;': '\u2197', 'nedot;': '\u2250\u0338', 'NegativeMediumSpace;': '\u200b', 'NegativeThickSpace;': '\u200b', 'NegativeThinSpace;': '\u200b', 'NegativeVeryThinSpace;': '\u200b', 'nequiv;': '\u2262', 'nesear;': '\u2928', 'nesim;': '\u2242\u0338', 'NestedGreaterGreater;': '\u226b', 'NestedLessLess;': '\u226a', 'NewLine;': '\n', 'nexist;': '\u2204', 'nexists;': '\u2204', 'Nfr;': '\U0001d511', 'nfr;': '\U0001d52b', 'ngE;': '\u2267\u0338', 'nge;': '\u2271', 'ngeq;': '\u2271', 'ngeqq;': '\u2267\u0338', 'ngeqslant;': '\u2a7e\u0338', 'nges;': '\u2a7e\u0338', 'nGg;': '\u22d9\u0338', 'ngsim;': '\u2275', 'nGt;': '\u226b\u20d2', 'ngt;': '\u226f', 'ngtr;': '\u226f', 'nGtv;': '\u226b\u0338', 'nhArr;': '\u21ce', 'nharr;': '\u21ae', 'nhpar;': '\u2af2', 'ni;': '\u220b', 'nis;': '\u22fc', 'nisd;': '\u22fa', 'niv;': '\u220b', 'NJcy;': '\u040a', 'njcy;': '\u045a', 'nlArr;': '\u21cd', 'nlarr;': '\u219a', 'nldr;': '\u2025', 'nlE;': '\u2266\u0338', 'nle;': '\u2270', 'nLeftarrow;': '\u21cd', 'nleftarrow;': '\u219a', 'nLeftrightarrow;': '\u21ce', 'nleftrightarrow;': '\u21ae', 'nleq;': '\u2270', 'nleqq;': '\u2266\u0338', 'nleqslant;': '\u2a7d\u0338', 'nles;': '\u2a7d\u0338', 'nless;': '\u226e', 'nLl;': '\u22d8\u0338', 'nlsim;': '\u2274', 'nLt;': '\u226a\u20d2', 'nlt;': '\u226e', 'nltri;': '\u22ea', 'nltrie;': '\u22ec', 'nLtv;': '\u226a\u0338', 'nmid;': '\u2224', 'NoBreak;': '\u2060', 'NonBreakingSpace;': '\xa0', 'Nopf;': '\u2115', 'nopf;': '\U0001d55f', 'not': '\xac', 'Not;': '\u2aec', 'not;': '\xac', 'NotCongruent;': '\u2262', 'NotCupCap;': '\u226d', 'NotDoubleVerticalBar;': '\u2226', 'NotElement;': '\u2209', 'NotEqual;': '\u2260', 'NotEqualTilde;': '\u2242\u0338', 'NotExists;': '\u2204', 'NotGreater;': '\u226f', 'NotGreaterEqual;': '\u2271', 'NotGreaterFullEqual;': '\u2267\u0338', 'NotGreaterGreater;': '\u226b\u0338', 'NotGreaterLess;': '\u2279', 'NotGreaterSlantEqual;': '\u2a7e\u0338', 'NotGreaterTilde;': '\u2275', 'NotHumpDownHump;': '\u224e\u0338', 'NotHumpEqual;': '\u224f\u0338', 'notin;': '\u2209', 'notindot;': '\u22f5\u0338', 'notinE;': '\u22f9\u0338', 'notinva;': '\u2209', 'notinvb;': '\u22f7', 'notinvc;': '\u22f6', 'NotLeftTriangle;': '\u22ea', 'NotLeftTriangleBar;': '\u29cf\u0338', 'NotLeftTriangleEqual;': '\u22ec', 'NotLess;': '\u226e', 'NotLessEqual;': '\u2270', 'NotLessGreater;': '\u2278', 'NotLessLess;': '\u226a\u0338', 'NotLessSlantEqual;': '\u2a7d\u0338', 'NotLessTilde;': '\u2274', 'NotNestedGreaterGreater;': '\u2aa2\u0338', 'NotNestedLessLess;': '\u2aa1\u0338', 'notni;': '\u220c', 'notniva;': '\u220c', 'notnivb;': '\u22fe', 'notnivc;': '\u22fd', 'NotPrecedes;': '\u2280', 'NotPrecedesEqual;': '\u2aaf\u0338', 'NotPrecedesSlantEqual;': '\u22e0', 'NotReverseElement;': '\u220c', 'NotRightTriangle;': '\u22eb', 'NotRightTriangleBar;': '\u29d0\u0338', 'NotRightTriangleEqual;': '\u22ed', 'NotSquareSubset;': '\u228f\u0338', 'NotSquareSubsetEqual;': '\u22e2', 'NotSquareSuperset;': '\u2290\u0338', 'NotSquareSupersetEqual;': '\u22e3', 'NotSubset;': '\u2282\u20d2', 'NotSubsetEqual;': '\u2288', 'NotSucceeds;': '\u2281', 'NotSucceedsEqual;': '\u2ab0\u0338', 'NotSucceedsSlantEqual;': '\u22e1', 'NotSucceedsTilde;': '\u227f\u0338', 'NotSuperset;': '\u2283\u20d2', 'NotSupersetEqual;': '\u2289', 'NotTilde;': '\u2241', 'NotTildeEqual;': '\u2244', 'NotTildeFullEqual;': '\u2247', 'NotTildeTilde;': '\u2249', 'NotVerticalBar;': '\u2224', 'npar;': '\u2226', 'nparallel;': '\u2226', 'nparsl;': '\u2afd\u20e5', 'npart;': '\u2202\u0338', 'npolint;': '\u2a14', 'npr;': '\u2280', 'nprcue;': '\u22e0', 'npre;': '\u2aaf\u0338', 'nprec;': '\u2280', 'npreceq;': '\u2aaf\u0338', 'nrArr;': '\u21cf', 'nrarr;': '\u219b', 'nrarrc;': '\u2933\u0338', 'nrarrw;': '\u219d\u0338', 'nRightarrow;': '\u21cf', 'nrightarrow;': '\u219b', 'nrtri;': '\u22eb', 'nrtrie;': '\u22ed', 'nsc;': '\u2281', 'nsccue;': '\u22e1', 'nsce;': '\u2ab0\u0338', 'Nscr;': '\U0001d4a9', 'nscr;': '\U0001d4c3', 'nshortmid;': '\u2224', 'nshortparallel;': '\u2226', 'nsim;': '\u2241', 'nsime;': '\u2244', 'nsimeq;': '\u2244', 'nsmid;': '\u2224', 'nspar;': '\u2226', 'nsqsube;': '\u22e2', 'nsqsupe;': '\u22e3', 'nsub;': '\u2284', 'nsubE;': '\u2ac5\u0338', 'nsube;': '\u2288', 'nsubset;': '\u2282\u20d2', 'nsubseteq;': '\u2288', 'nsubseteqq;': '\u2ac5\u0338', 'nsucc;': '\u2281', 'nsucceq;': '\u2ab0\u0338', 'nsup;': '\u2285', 'nsupE;': '\u2ac6\u0338', 'nsupe;': '\u2289', 'nsupset;': '\u2283\u20d2', 'nsupseteq;': '\u2289', 'nsupseteqq;': '\u2ac6\u0338', 'ntgl;': '\u2279', 'Ntilde': '\xd1', 'ntilde': '\xf1', 'Ntilde;': '\xd1', 'ntilde;': '\xf1', 'ntlg;': '\u2278', 'ntriangleleft;': '\u22ea', 'ntrianglelefteq;': '\u22ec', 'ntriangleright;': '\u22eb', 'ntrianglerighteq;': '\u22ed', 'Nu;': '\u039d', 'nu;': '\u03bd', 'num;': '#', 'numero;': '\u2116', 'numsp;': '\u2007', 'nvap;': '\u224d\u20d2', 'nVDash;': '\u22af', 'nVdash;': '\u22ae', 'nvDash;': '\u22ad', 'nvdash;': '\u22ac', 'nvge;': '\u2265\u20d2', 'nvgt;': '>\u20d2', 'nvHarr;': '\u2904', 'nvinfin;': '\u29de', 'nvlArr;': '\u2902', 'nvle;': '\u2264\u20d2', 'nvlt;': '<\u20d2', 'nvltrie;': '\u22b4\u20d2', 'nvrArr;': '\u2903', 'nvrtrie;': '\u22b5\u20d2', 'nvsim;': '\u223c\u20d2', 'nwarhk;': '\u2923', 'nwArr;': '\u21d6', 'nwarr;': '\u2196', 'nwarrow;': '\u2196', 'nwnear;': '\u2927', 'Oacute': '\xd3', 'oacute': '\xf3', 'Oacute;': '\xd3', 'oacute;': '\xf3', 'oast;': '\u229b', 'ocir;': '\u229a', 'Ocirc': '\xd4', 'ocirc': '\xf4', 'Ocirc;': '\xd4', 'ocirc;': '\xf4', 'Ocy;': '\u041e', 'ocy;': '\u043e', 'odash;': '\u229d', 'Odblac;': '\u0150', 'odblac;': '\u0151', 'odiv;': '\u2a38', 'odot;': '\u2299', 'odsold;': '\u29bc', 'OElig;': '\u0152', 'oelig;': '\u0153', 'ofcir;': '\u29bf', 'Ofr;': '\U0001d512', 'ofr;': '\U0001d52c', 'ogon;': '\u02db', 'Ograve': '\xd2', 'ograve': '\xf2', 'Ograve;': '\xd2', 'ograve;': '\xf2', 'ogt;': '\u29c1', 'ohbar;': '\u29b5', 'ohm;': '\u03a9', 'oint;': '\u222e', 'olarr;': '\u21ba', 'olcir;': '\u29be', 'olcross;': '\u29bb', 'oline;': '\u203e', 'olt;': '\u29c0', 'Omacr;': '\u014c', 'omacr;': '\u014d', 'Omega;': '\u03a9', 'omega;': '\u03c9', 'Omicron;': '\u039f', 'omicron;': '\u03bf', 'omid;': '\u29b6', 'ominus;': '\u2296', 'Oopf;': '\U0001d546', 'oopf;': '\U0001d560', 'opar;': '\u29b7', 'OpenCurlyDoubleQuote;': '\u201c', 'OpenCurlyQuote;': '\u2018', 'operp;': '\u29b9', 'oplus;': '\u2295', 'Or;': '\u2a54', 'or;': '\u2228', 'orarr;': '\u21bb', 'ord;': '\u2a5d', 'order;': '\u2134', 'orderof;': '\u2134', 'ordf': '\xaa', 'ordf;': '\xaa', 'ordm': '\xba', 'ordm;': '\xba', 'origof;': '\u22b6', 'oror;': '\u2a56', 'orslope;': '\u2a57', 'orv;': '\u2a5b', 'oS;': '\u24c8', 'Oscr;': '\U0001d4aa', 'oscr;': '\u2134', 'Oslash': '\xd8', 'oslash': '\xf8', 'Oslash;': '\xd8', 'oslash;': '\xf8', 'osol;': '\u2298', 'Otilde': '\xd5', 'otilde': '\xf5', 'Otilde;': '\xd5', 'otilde;': '\xf5', 'Otimes;': '\u2a37', 'otimes;': '\u2297', 'otimesas;': '\u2a36', 'Ouml': '\xd6', 'ouml': '\xf6', 'Ouml;': '\xd6', 'ouml;': '\xf6', 'ovbar;': '\u233d', 'OverBar;': '\u203e', 'OverBrace;': '\u23de', 'OverBracket;': '\u23b4', 'OverParenthesis;': '\u23dc', 'par;': '\u2225', 'para': '\xb6', 'para;': '\xb6', 'parallel;': '\u2225', 'parsim;': '\u2af3', 'parsl;': '\u2afd', 'part;': '\u2202', 'PartialD;': '\u2202', 'Pcy;': '\u041f', 'pcy;': '\u043f', 'percnt;': '%', 'period;': '.', 'permil;': '\u2030', 'perp;': '\u22a5', 'pertenk;': '\u2031', 'Pfr;': '\U0001d513', 'pfr;': '\U0001d52d', 'Phi;': '\u03a6', 'phi;': '\u03c6', 'phiv;': '\u03d5', 'phmmat;': '\u2133', 'phone;': '\u260e', 'Pi;': '\u03a0', 'pi;': '\u03c0', 'pitchfork;': '\u22d4', 'piv;': '\u03d6', 'planck;': '\u210f', 'planckh;': '\u210e', 'plankv;': '\u210f', 'plus;': '+', 'plusacir;': '\u2a23', 'plusb;': '\u229e', 'pluscir;': '\u2a22', 'plusdo;': '\u2214', 'plusdu;': '\u2a25', 'pluse;': '\u2a72', 'PlusMinus;': '\xb1', 'plusmn': '\xb1', 'plusmn;': '\xb1', 'plussim;': '\u2a26', 'plustwo;': '\u2a27', 'pm;': '\xb1', 'Poincareplane;': '\u210c', 'pointint;': '\u2a15', 'Popf;': '\u2119', 'popf;': '\U0001d561', 'pound': '\xa3', 'pound;': '\xa3', 'Pr;': '\u2abb', 'pr;': '\u227a', 'prap;': '\u2ab7', 'prcue;': '\u227c', 'prE;': '\u2ab3', 'pre;': '\u2aaf', 'prec;': '\u227a', 'precapprox;': '\u2ab7', 'preccurlyeq;': '\u227c', 'Precedes;': '\u227a', 'PrecedesEqual;': '\u2aaf', 'PrecedesSlantEqual;': '\u227c', 'PrecedesTilde;': '\u227e', 'preceq;': '\u2aaf', 'precnapprox;': '\u2ab9', 'precneqq;': '\u2ab5', 'precnsim;': '\u22e8', 'precsim;': '\u227e', 'Prime;': '\u2033', 'prime;': '\u2032', 'primes;': '\u2119', 'prnap;': '\u2ab9', 'prnE;': '\u2ab5', 'prnsim;': '\u22e8', 'prod;': '\u220f', 'Product;': '\u220f', 'profalar;': '\u232e', 'profline;': '\u2312', 'profsurf;': '\u2313', 'prop;': '\u221d', 'Proportion;': '\u2237', 'Proportional;': '\u221d', 'propto;': '\u221d', 'prsim;': '\u227e', 'prurel;': '\u22b0', 'Pscr;': '\U0001d4ab', 'pscr;': '\U0001d4c5', 'Psi;': '\u03a8', 'psi;': '\u03c8', 'puncsp;': '\u2008', 'Qfr;': '\U0001d514', 'qfr;': '\U0001d52e', 'qint;': '\u2a0c', 'Qopf;': '\u211a', 'qopf;': '\U0001d562', 'qprime;': '\u2057', 'Qscr;': '\U0001d4ac', 'qscr;': '\U0001d4c6', 'quaternions;': '\u210d', 'quatint;': '\u2a16', 'quest;': '?', 'questeq;': '\u225f', 'QUOT': '"', 'quot': '"', 'QUOT;': '"', 'quot;': '"', 'rAarr;': '\u21db', 'race;': '\u223d\u0331', 'Racute;': '\u0154', 'racute;': '\u0155', 'radic;': '\u221a', 'raemptyv;': '\u29b3', 'Rang;': '\u27eb', 'rang;': '\u27e9', 'rangd;': '\u2992', 'range;': '\u29a5', 'rangle;': '\u27e9', 'raquo': '\xbb', 'raquo;': '\xbb', 'Rarr;': '\u21a0', 'rArr;': '\u21d2', 'rarr;': '\u2192', 'rarrap;': '\u2975', 'rarrb;': '\u21e5', 'rarrbfs;': '\u2920', 'rarrc;': '\u2933', 'rarrfs;': '\u291e', 'rarrhk;': '\u21aa', 'rarrlp;': '\u21ac', 'rarrpl;': '\u2945', 'rarrsim;': '\u2974', 'Rarrtl;': '\u2916', 'rarrtl;': '\u21a3', 'rarrw;': '\u219d', 'rAtail;': '\u291c', 'ratail;': '\u291a', 'ratio;': '\u2236', 'rationals;': '\u211a', 'RBarr;': '\u2910', 'rBarr;': '\u290f', 'rbarr;': '\u290d', 'rbbrk;': '\u2773', 'rbrace;': '}', 'rbrack;': ']', 'rbrke;': '\u298c', 'rbrksld;': '\u298e', 'rbrkslu;': '\u2990', 'Rcaron;': '\u0158', 'rcaron;': '\u0159', 'Rcedil;': '\u0156', 'rcedil;': '\u0157', 'rceil;': '\u2309', 'rcub;': '}', 'Rcy;': '\u0420', 'rcy;': '\u0440', 'rdca;': '\u2937', 'rdldhar;': '\u2969', 'rdquo;': '\u201d', 'rdquor;': '\u201d', 'rdsh;': '\u21b3', 'Re;': '\u211c', 'real;': '\u211c', 'realine;': '\u211b', 'realpart;': '\u211c', 'reals;': '\u211d', 'rect;': '\u25ad', 'REG': '\xae', 'reg': '\xae', 'REG;': '\xae', 'reg;': '\xae', 'ReverseElement;': '\u220b', 'ReverseEquilibrium;': '\u21cb', 'ReverseUpEquilibrium;': '\u296f', 'rfisht;': '\u297d', 'rfloor;': '\u230b', 'Rfr;': '\u211c', 'rfr;': '\U0001d52f', 'rHar;': '\u2964', 'rhard;': '\u21c1', 'rharu;': '\u21c0', 'rharul;': '\u296c', 'Rho;': '\u03a1', 'rho;': '\u03c1', 'rhov;': '\u03f1', 'RightAngleBracket;': '\u27e9', 'RightArrow;': '\u2192', 'Rightarrow;': '\u21d2', 'rightarrow;': '\u2192', 'RightArrowBar;': '\u21e5', 'RightArrowLeftArrow;': '\u21c4', 'rightarrowtail;': '\u21a3', 'RightCeiling;': '\u2309', 'RightDoubleBracket;': '\u27e7', 'RightDownTeeVector;': '\u295d', 'RightDownVector;': '\u21c2', 'RightDownVectorBar;': '\u2955', 'RightFloor;': '\u230b', 'rightharpoondown;': '\u21c1', 'rightharpoonup;': '\u21c0', 'rightleftarrows;': '\u21c4', 'rightleftharpoons;': '\u21cc', 'rightrightarrows;': '\u21c9', 'rightsquigarrow;': '\u219d', 'RightTee;': '\u22a2', 'RightTeeArrow;': '\u21a6', 'RightTeeVector;': '\u295b', 'rightthreetimes;': '\u22cc', 'RightTriangle;': '\u22b3', 'RightTriangleBar;': '\u29d0', 'RightTriangleEqual;': '\u22b5', 'RightUpDownVector;': '\u294f', 'RightUpTeeVector;': '\u295c', 'RightUpVector;': '\u21be', 'RightUpVectorBar;': '\u2954', 'RightVector;': '\u21c0', 'RightVectorBar;': '\u2953', 'ring;': '\u02da', 'risingdotseq;': '\u2253', 'rlarr;': '\u21c4', 'rlhar;': '\u21cc', 'rlm;': '\u200f', 'rmoust;': '\u23b1', 'rmoustache;': '\u23b1', 'rnmid;': '\u2aee', 'roang;': '\u27ed', 'roarr;': '\u21fe', 'robrk;': '\u27e7', 'ropar;': '\u2986', 'Ropf;': '\u211d', 'ropf;': '\U0001d563', 'roplus;': '\u2a2e', 'rotimes;': '\u2a35', 'RoundImplies;': '\u2970', 'rpar;': ')', 'rpargt;': '\u2994', 'rppolint;': '\u2a12', 'rrarr;': '\u21c9', 'Rrightarrow;': '\u21db', 'rsaquo;': '\u203a', 'Rscr;': '\u211b', 'rscr;': '\U0001d4c7', 'Rsh;': '\u21b1', 'rsh;': '\u21b1', 'rsqb;': ']', 'rsquo;': '\u2019', 'rsquor;': '\u2019', 'rthree;': '\u22cc', 'rtimes;': '\u22ca', 'rtri;': '\u25b9', 'rtrie;': '\u22b5', 'rtrif;': '\u25b8', 'rtriltri;': '\u29ce', 'RuleDelayed;': '\u29f4', 'ruluhar;': '\u2968', 'rx;': '\u211e', 'Sacute;': '\u015a', 'sacute;': '\u015b', 'sbquo;': '\u201a', 'Sc;': '\u2abc', 'sc;': '\u227b', 'scap;': '\u2ab8', 'Scaron;': '\u0160', 'scaron;': '\u0161', 'sccue;': '\u227d', 'scE;': '\u2ab4', 'sce;': '\u2ab0', 'Scedil;': '\u015e', 'scedil;': '\u015f', 'Scirc;': '\u015c', 'scirc;': '\u015d', 'scnap;': '\u2aba', 'scnE;': '\u2ab6', 'scnsim;': '\u22e9', 'scpolint;': '\u2a13', 'scsim;': '\u227f', 'Scy;': '\u0421', 'scy;': '\u0441', 'sdot;': '\u22c5', 'sdotb;': '\u22a1', 'sdote;': '\u2a66', 'searhk;': '\u2925', 'seArr;': '\u21d8', 'searr;': '\u2198', 'searrow;': '\u2198', 'sect': '\xa7', 'sect;': '\xa7', 'semi;': ';', 'seswar;': '\u2929', 'setminus;': '\u2216', 'setmn;': '\u2216', 'sext;': '\u2736', 'Sfr;': '\U0001d516', 'sfr;': '\U0001d530', 'sfrown;': '\u2322', 'sharp;': '\u266f', 'SHCHcy;': '\u0429', 'shchcy;': '\u0449', 'SHcy;': '\u0428', 'shcy;': '\u0448', 'ShortDownArrow;': '\u2193', 'ShortLeftArrow;': '\u2190', 'shortmid;': '\u2223', 'shortparallel;': '\u2225', 'ShortRightArrow;': '\u2192', 'ShortUpArrow;': '\u2191', 'shy': '\xad', 'shy;': '\xad', 'Sigma;': '\u03a3', 'sigma;': '\u03c3', 'sigmaf;': '\u03c2', 'sigmav;': '\u03c2', 'sim;': '\u223c', 'simdot;': '\u2a6a', 'sime;': '\u2243', 'simeq;': '\u2243', 'simg;': '\u2a9e', 'simgE;': '\u2aa0', 'siml;': '\u2a9d', 'simlE;': '\u2a9f', 'simne;': '\u2246', 'simplus;': '\u2a24', 'simrarr;': '\u2972', 'slarr;': '\u2190', 'SmallCircle;': '\u2218', 'smallsetminus;': '\u2216', 'smashp;': '\u2a33', 'smeparsl;': '\u29e4', 'smid;': '\u2223', 'smile;': '\u2323', 'smt;': '\u2aaa', 'smte;': '\u2aac', 'smtes;': '\u2aac\ufe00', 'SOFTcy;': '\u042c', 'softcy;': '\u044c', 'sol;': '/', 'solb;': '\u29c4', 'solbar;': '\u233f', 'Sopf;': '\U0001d54a', 'sopf;': '\U0001d564', 'spades;': '\u2660', 'spadesuit;': '\u2660', 'spar;': '\u2225', 'sqcap;': '\u2293', 'sqcaps;': '\u2293\ufe00', 'sqcup;': '\u2294', 'sqcups;': '\u2294\ufe00', 'Sqrt;': '\u221a', 'sqsub;': '\u228f', 'sqsube;': '\u2291', 'sqsubset;': '\u228f', 'sqsubseteq;': '\u2291', 'sqsup;': '\u2290', 'sqsupe;': '\u2292', 'sqsupset;': '\u2290', 'sqsupseteq;': '\u2292', 'squ;': '\u25a1', 'Square;': '\u25a1', 'square;': '\u25a1', 'SquareIntersection;': '\u2293', 'SquareSubset;': '\u228f', 'SquareSubsetEqual;': '\u2291', 'SquareSuperset;': '\u2290', 'SquareSupersetEqual;': '\u2292', 'SquareUnion;': '\u2294', 'squarf;': '\u25aa', 'squf;': '\u25aa', 'srarr;': '\u2192', 'Sscr;': '\U0001d4ae', 'sscr;': '\U0001d4c8', 'ssetmn;': '\u2216', 'ssmile;': '\u2323', 'sstarf;': '\u22c6', 'Star;': '\u22c6', 'star;': '\u2606', 'starf;': '\u2605', 'straightepsilon;': '\u03f5', 'straightphi;': '\u03d5', 'strns;': '\xaf', 'Sub;': '\u22d0', 'sub;': '\u2282', 'subdot;': '\u2abd', 'subE;': '\u2ac5', 'sube;': '\u2286', 'subedot;': '\u2ac3', 'submult;': '\u2ac1', 'subnE;': '\u2acb', 'subne;': '\u228a', 'subplus;': '\u2abf', 'subrarr;': '\u2979', 'Subset;': '\u22d0', 'subset;': '\u2282', 'subseteq;': '\u2286', 'subseteqq;': '\u2ac5', 'SubsetEqual;': '\u2286', 'subsetneq;': '\u228a', 'subsetneqq;': '\u2acb', 'subsim;': '\u2ac7', 'subsub;': '\u2ad5', 'subsup;': '\u2ad3', 'succ;': '\u227b', 'succapprox;': '\u2ab8', 'succcurlyeq;': '\u227d', 'Succeeds;': '\u227b', 'SucceedsEqual;': '\u2ab0', 'SucceedsSlantEqual;': '\u227d', 'SucceedsTilde;': '\u227f', 'succeq;': '\u2ab0', 'succnapprox;': '\u2aba', 'succneqq;': '\u2ab6', 'succnsim;': '\u22e9', 'succsim;': '\u227f', 'SuchThat;': '\u220b', 'Sum;': '\u2211', 'sum;': '\u2211', 'sung;': '\u266a', 'sup1': '\xb9', 'sup1;': '\xb9', 'sup2': '\xb2', 'sup2;': '\xb2', 'sup3': '\xb3', 'sup3;': '\xb3', 'Sup;': '\u22d1', 'sup;': '\u2283', 'supdot;': '\u2abe', 'supdsub;': '\u2ad8', 'supE;': '\u2ac6', 'supe;': '\u2287', 'supedot;': '\u2ac4', 'Superset;': '\u2283', 'SupersetEqual;': '\u2287', 'suphsol;': '\u27c9', 'suphsub;': '\u2ad7', 'suplarr;': '\u297b', 'supmult;': '\u2ac2', 'supnE;': '\u2acc', 'supne;': '\u228b', 'supplus;': '\u2ac0', 'Supset;': '\u22d1', 'supset;': '\u2283', 'supseteq;': '\u2287', 'supseteqq;': '\u2ac6', 'supsetneq;': '\u228b', 'supsetneqq;': '\u2acc', 'supsim;': '\u2ac8', 'supsub;': '\u2ad4', 'supsup;': '\u2ad6', 'swarhk;': '\u2926', 'swArr;': '\u21d9', 'swarr;': '\u2199', 'swarrow;': '\u2199', 'swnwar;': '\u292a', 'szlig': '\xdf', 'szlig;': '\xdf', 'Tab;': '\t', 'target;': '\u2316', 'Tau;': '\u03a4', 'tau;': '\u03c4', 'tbrk;': '\u23b4', 'Tcaron;': '\u0164', 'tcaron;': '\u0165', 'Tcedil;': '\u0162', 'tcedil;': '\u0163', 'Tcy;': '\u0422', 'tcy;': '\u0442', 'tdot;': '\u20db', 'telrec;': '\u2315', 'Tfr;': '\U0001d517', 'tfr;': '\U0001d531', 'there4;': '\u2234', 'Therefore;': '\u2234', 'therefore;': '\u2234', 'Theta;': '\u0398', 'theta;': '\u03b8', 'thetasym;': '\u03d1', 'thetav;': '\u03d1', 'thickapprox;': '\u2248', 'thicksim;': '\u223c', 'ThickSpace;': '\u205f\u200a', 'thinsp;': '\u2009', 'ThinSpace;': '\u2009', 'thkap;': '\u2248', 'thksim;': '\u223c', 'THORN': '\xde', 'thorn': '\xfe', 'THORN;': '\xde', 'thorn;': '\xfe', 'Tilde;': '\u223c', 'tilde;': '\u02dc', 'TildeEqual;': '\u2243', 'TildeFullEqual;': '\u2245', 'TildeTilde;': '\u2248', 'times': '\xd7', 'times;': '\xd7', 'timesb;': '\u22a0', 'timesbar;': '\u2a31', 'timesd;': '\u2a30', 'tint;': '\u222d', 'toea;': '\u2928', 'top;': '\u22a4', 'topbot;': '\u2336', 'topcir;': '\u2af1', 'Topf;': '\U0001d54b', 'topf;': '\U0001d565', 'topfork;': '\u2ada', 'tosa;': '\u2929', 'tprime;': '\u2034', 'TRADE;': '\u2122', 'trade;': '\u2122', 'triangle;': '\u25b5', 'triangledown;': '\u25bf', 'triangleleft;': '\u25c3', 'trianglelefteq;': '\u22b4', 'triangleq;': '\u225c', 'triangleright;': '\u25b9', 'trianglerighteq;': '\u22b5', 'tridot;': '\u25ec', 'trie;': '\u225c', 'triminus;': '\u2a3a', 'TripleDot;': '\u20db', 'triplus;': '\u2a39', 'trisb;': '\u29cd', 'tritime;': '\u2a3b', 'trpezium;': '\u23e2', 'Tscr;': '\U0001d4af', 'tscr;': '\U0001d4c9', 'TScy;': '\u0426', 'tscy;': '\u0446', 'TSHcy;': '\u040b', 'tshcy;': '\u045b', 'Tstrok;': '\u0166', 'tstrok;': '\u0167', 'twixt;': '\u226c', 'twoheadleftarrow;': '\u219e', 'twoheadrightarrow;': '\u21a0', 'Uacute': '\xda', 'uacute': '\xfa', 'Uacute;': '\xda', 'uacute;': '\xfa', 'Uarr;': '\u219f', 'uArr;': '\u21d1', 'uarr;': '\u2191', 'Uarrocir;': '\u2949', 'Ubrcy;': '\u040e', 'ubrcy;': '\u045e', 'Ubreve;': '\u016c', 'ubreve;': '\u016d', 'Ucirc': '\xdb', 'ucirc': '\xfb', 'Ucirc;': '\xdb', 'ucirc;': '\xfb', 'Ucy;': '\u0423', 'ucy;': '\u0443', 'udarr;': '\u21c5', 'Udblac;': '\u0170', 'udblac;': '\u0171', 'udhar;': '\u296e', 'ufisht;': '\u297e', 'Ufr;': '\U0001d518', 'ufr;': '\U0001d532', 'Ugrave': '\xd9', 'ugrave': '\xf9', 'Ugrave;': '\xd9', 'ugrave;': '\xf9', 'uHar;': '\u2963', 'uharl;': '\u21bf', 'uharr;': '\u21be', 'uhblk;': '\u2580', 'ulcorn;': '\u231c', 'ulcorner;': '\u231c', 'ulcrop;': '\u230f', 'ultri;': '\u25f8', 'Umacr;': '\u016a', 'umacr;': '\u016b', 'uml': '\xa8', 'uml;': '\xa8', 'UnderBar;': '_', 'UnderBrace;': '\u23df', 'UnderBracket;': '\u23b5', 'UnderParenthesis;': '\u23dd', 'Union;': '\u22c3', 'UnionPlus;': '\u228e', 'Uogon;': '\u0172', 'uogon;': '\u0173', 'Uopf;': '\U0001d54c', 'uopf;': '\U0001d566', 'UpArrow;': '\u2191', 'Uparrow;': '\u21d1', 'uparrow;': '\u2191', 'UpArrowBar;': '\u2912', 'UpArrowDownArrow;': '\u21c5', 'UpDownArrow;': '\u2195', 'Updownarrow;': '\u21d5', 'updownarrow;': '\u2195', 'UpEquilibrium;': '\u296e', 'upharpoonleft;': '\u21bf', 'upharpoonright;': '\u21be', 'uplus;': '\u228e', 'UpperLeftArrow;': '\u2196', 'UpperRightArrow;': '\u2197', 'Upsi;': '\u03d2', 'upsi;': '\u03c5', 'upsih;': '\u03d2', 'Upsilon;': '\u03a5', 'upsilon;': '\u03c5', 'UpTee;': '\u22a5', 'UpTeeArrow;': '\u21a5', 'upuparrows;': '\u21c8', 'urcorn;': '\u231d', 'urcorner;': '\u231d', 'urcrop;': '\u230e', 'Uring;': '\u016e', 'uring;': '\u016f', 'urtri;': '\u25f9', 'Uscr;': '\U0001d4b0', 'uscr;': '\U0001d4ca', 'utdot;': '\u22f0', 'Utilde;': '\u0168', 'utilde;': '\u0169', 'utri;': '\u25b5', 'utrif;': '\u25b4', 'uuarr;': '\u21c8', 'Uuml': '\xdc', 'uuml': '\xfc', 'Uuml;': '\xdc', 'uuml;': '\xfc', 'uwangle;': '\u29a7', 'vangrt;': '\u299c', 'varepsilon;': '\u03f5', 'varkappa;': '\u03f0', 'varnothing;': '\u2205', 'varphi;': '\u03d5', 'varpi;': '\u03d6', 'varpropto;': '\u221d', 'vArr;': '\u21d5', 'varr;': '\u2195', 'varrho;': '\u03f1', 'varsigma;': '\u03c2', 'varsubsetneq;': '\u228a\ufe00', 'varsubsetneqq;': '\u2acb\ufe00', 'varsupsetneq;': '\u228b\ufe00', 'varsupsetneqq;': '\u2acc\ufe00', 'vartheta;': '\u03d1', 'vartriangleleft;': '\u22b2', 'vartriangleright;': '\u22b3', 'Vbar;': '\u2aeb', 'vBar;': '\u2ae8', 'vBarv;': '\u2ae9', 'Vcy;': '\u0412', 'vcy;': '\u0432', 'VDash;': '\u22ab', 'Vdash;': '\u22a9', 'vDash;': '\u22a8', 'vdash;': '\u22a2', 'Vdashl;': '\u2ae6', 'Vee;': '\u22c1', 'vee;': '\u2228', 'veebar;': '\u22bb', 'veeeq;': '\u225a', 'vellip;': '\u22ee', 'Verbar;': '\u2016', 'verbar;': '|', 'Vert;': '\u2016', 'vert;': '|', 'VerticalBar;': '\u2223', 'VerticalLine;': '|', 'VerticalSeparator;': '\u2758', 'VerticalTilde;': '\u2240', 'VeryThinSpace;': '\u200a', 'Vfr;': '\U0001d519', 'vfr;': '\U0001d533', 'vltri;': '\u22b2', 'vnsub;': '\u2282\u20d2', 'vnsup;': '\u2283\u20d2', 'Vopf;': '\U0001d54d', 'vopf;': '\U0001d567', 'vprop;': '\u221d', 'vrtri;': '\u22b3', 'Vscr;': '\U0001d4b1', 'vscr;': '\U0001d4cb', 'vsubnE;': '\u2acb\ufe00', 'vsubne;': '\u228a\ufe00', 'vsupnE;': '\u2acc\ufe00', 'vsupne;': '\u228b\ufe00', 'Vvdash;': '\u22aa', 'vzigzag;': '\u299a', 'Wcirc;': '\u0174', 'wcirc;': '\u0175', 'wedbar;': '\u2a5f', 'Wedge;': '\u22c0', 'wedge;': '\u2227', 'wedgeq;': '\u2259', 'weierp;': '\u2118', 'Wfr;': '\U0001d51a', 'wfr;': '\U0001d534', 'Wopf;': '\U0001d54e', 'wopf;': '\U0001d568', 'wp;': '\u2118', 'wr;': '\u2240', 'wreath;': '\u2240', 'Wscr;': '\U0001d4b2', 'wscr;': '\U0001d4cc', 'xcap;': '\u22c2', 'xcirc;': '\u25ef', 'xcup;': '\u22c3', 'xdtri;': '\u25bd', 'Xfr;': '\U0001d51b', 'xfr;': '\U0001d535', 'xhArr;': '\u27fa', 'xharr;': '\u27f7', 'Xi;': '\u039e', 'xi;': '\u03be', 'xlArr;': '\u27f8', 'xlarr;': '\u27f5', 'xmap;': '\u27fc', 'xnis;': '\u22fb', 'xodot;': '\u2a00', 'Xopf;': '\U0001d54f', 'xopf;': '\U0001d569', 'xoplus;': '\u2a01', 'xotime;': '\u2a02', 'xrArr;': '\u27f9', 'xrarr;': '\u27f6', 'Xscr;': '\U0001d4b3', 'xscr;': '\U0001d4cd', 'xsqcup;': '\u2a06', 'xuplus;': '\u2a04', 'xutri;': '\u25b3', 'xvee;': '\u22c1', 'xwedge;': '\u22c0', 'Yacute': '\xdd', 'yacute': '\xfd', 'Yacute;': '\xdd', 'yacute;': '\xfd', 'YAcy;': '\u042f', 'yacy;': '\u044f', 'Ycirc;': '\u0176', 'ycirc;': '\u0177', 'Ycy;': '\u042b', 'ycy;': '\u044b', 'yen': '\xa5', 'yen;': '\xa5', 'Yfr;': '\U0001d51c', 'yfr;': '\U0001d536', 'YIcy;': '\u0407', 'yicy;': '\u0457', 'Yopf;': '\U0001d550', 'yopf;': '\U0001d56a', 'Yscr;': '\U0001d4b4', 'yscr;': '\U0001d4ce', 'YUcy;': '\u042e', 'yucy;': '\u044e', 'yuml': '\xff', 'Yuml;': '\u0178', 'yuml;': '\xff', 'Zacute;': '\u0179', 'zacute;': '\u017a', 'Zcaron;': '\u017d', 'zcaron;': '\u017e', 'Zcy;': '\u0417', 'zcy;': '\u0437', 'Zdot;': '\u017b', 'zdot;': '\u017c', 'zeetrf;': '\u2128', 'ZeroWidthSpace;': '\u200b', 'Zeta;': '\u0396', 'zeta;': '\u03b6', 'Zfr;': '\u2128', 'zfr;': '\U0001d537', 'ZHcy;': '\u0416', 'zhcy;': '\u0436', 'zigrarr;': '\u21dd', 'Zopf;': '\u2124', 'zopf;': '\U0001d56b', 'Zscr;': '\U0001d4b5', 'zscr;': '\U0001d4cf', 'zwj;': '\u200d', 'zwnj;': '\u200c',
    }, {
        get: function(target, prop, receiver) {
            if (prop === "_trace_ignore") return true;
            return target[prop];
        },
        has: function(target, prop) {
            return prop in target;
        }
    }
);
///// Segment IGNORE END
///// Segment BEGIN entitiesprocess DONE
// maps the Unicode code point to the HTML entity name
let codepoint2name = {};

// maps the HTML entity name to the character
// (or a character reference if the character is outside the Latin-1 range)
let entitydefs = {};

for (let [name, codepoint] of Object.entries(name2codepoint)) {
    codepoint2name[codepoint] = name;
    entitydefs[name] = String.fromCharCode(codepoint);
}

// delete name, codepoint;
///// Segment END
///// Segment BEGIN init1 DONE
/**
 * General functions for HTML manipulation.
 */

// import { html5 } from 'html.entities';
const _html5 = html5;

// export const escape = (s, quote = true) => {
function escape(s, quote = true) {
    /**
     * Replace special characters "&", "<" and ">" to HTML-safe sequences.
     * If the optional flag quote is true (the default), the quotation mark
     * characters, both double quote (") and single quote (') characters are also
     * translated.
     */
    s = s.replace("&", "&amp;"); // Must be done first!
    s = s.replace("<", "&lt;");
    s = s.replace(">", "&gt;");
    if (quote) {
        s = s.replace('"', "&quot;");
        s = s.replace("'", "&#x27;");
    }
    return s;
}
// export { escape };
///// Segment END
///// Segment BEGIN init2 DONE
const _invalid_charrefs = {
    0x00: '\ufffd',
    0x0d: '\r',
    0x80: '\u20ac',
    0x81: '\x81',
    0x82: '\u201a',
    0x83: '\u0192',
    0x84: '\u201e',
    0x85: '\u2026',
    0x86: '\u2020',
    0x87: '\u2021',
    0x88: '\u02c6',
    0x89: '\u2030',
    0x8a: '\u0160',
    0x8b: '\u2039',
    0x8c: '\u0152',
    0x8d: '\x8d',
    0x8e: '\u017d',
    0x8f: '\x8f',
    0x90: '\x90',
    0x91: '\u2018',
    0x92: '\u2019',
    0x93: '\u201c',
    0x94: '\u201d',
    0x95: '\u2022',
    0x96: '\u2013',
    0x97: '\u2014',
    0x98: '\u02dc',
    0x99: '\u2122',
    0x9a: '\u0161',
    0x9b: '\u203a',
    0x9c: '\u0153',
    0x9d: '\x9d',
    0x9e: '\u017e',
    0x9f: '\u0178',
};
///// Segment END
///// Segment BEGIN init3 DONE
const _invalid_codepoints = new Set([
    // 0x0001 to 0x0008
    0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8,
    // 0x000E to 0x001F
    0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19,
    0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f,
    // 0x007F to 0x009F
    0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a,
    0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96,
    0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f,
    // 0xFDD0 to 0xFDEF
    0xfdd0, 0xfdd1, 0xfdd2, 0xfdd3, 0xfdd4, 0xfdd5, 0xfdd6, 0xfdd7, 0xfdd8,
    0xfdd9, 0xfdda, 0xfddb, 0xfddc, 0xfddd, 0xfdde, 0xfddf, 0xfde0, 0xfde1,
    0xfde2, 0xfde3, 0xfde4, 0xfde5, 0xfde6, 0xfde7, 0xfde8, 0xfde9, 0xfdea,
    0xfdeb, 0xfdec, 0xfded, 0xfdee, 0xfdef,
    // others
    0xb, 0xfffe, 0xffff, 0x1fffe, 0x1ffff, 0x2fffe, 0x2ffff, 0x3fffe, 0x3ffff,
    0x4fffe, 0x4ffff, 0x5fffe, 0x5ffff, 0x6fffe, 0x6ffff, 0x7fffe, 0x7ffff,
    0x8fffe, 0x8ffff, 0x9fffe, 0x9ffff, 0xafffe, 0xaffff, 0xbfffe, 0xbffff,
    0xcfffe, 0xcffff, 0xdfffe, 0xdffff, 0xefffe, 0xeffff, 0xffffe, 0xfffff,
    0x10fffe, 0x10ffff
]);
///// Segment END
///// Segment BEGIN init4 DONE
function _replace_charref(match, p1) {
    let s = p1;
    if (s[0] === '#') {
        // numeric charref
        let num;
        if (s[1] === 'x' || s[1] === 'X') {
            num = parseInt(s.slice(2, -1), 16);
        } else {
            num = parseInt(s.slice(1, -1));
        }
        if (num in _invalid_charrefs) {
            return _invalid_charrefs[num];
        }
        if (num >= 0xD800 && num <= 0xDFFF || num > 0x10FFFF) {
            return '\uFFFD';
        }
        if (_invalid_codepoints.has(num)) {
            return '';
        }
        return String.fromCharCode(num);
    } else {
        // named charref
        if (_html5[s]) {
            return _html5[s];
        }
        // find the longest matching name (as defined by the standard)
        for (let x = s.length - 1; x > 1; x--) {
            if (_html5[s.slice(0, x)]) {
                return _html5[s.slice(0, x)] + s.slice(x);
            }
        }
        return '&' + s;
    }
}

const _charref = /&(#[0-9]+;?|#[xX][0-9a-fA-F]+;?|[^\t\n\f <&#;]{1,32};?)/g;

function unescape(s) {
    /*
    Convert all named and numeric character references (e.g. &gt;, &#62;,
    &x3e;) in the string s to the corresponding unicode characters.
    This function uses the rules defined by the HTML 5 standard
    for both valid and invalid character references, and the list of
    HTML 5 named character references defined in html.entities.html5.
    */
    if (!s.includes('&')) {
        return s;
    }
    return s.replace(_charref, _replace_charref);
}
///// Segment END
///// Segment BEGIN markupbase1 DONE
const _declname_match = /[a-zA-Z][-_.a-zA-Z0-9]*\s*/;
const _declstringlit_match = /(\'[^\']*\'|"[^"]*")\s*/;
const _commentclose = /--\s*>/;
const _markedsectionclose = /]\s*]\s*>/;
const _msmarkedsectionclose = /]\s*>/;
///// Segment END
///// Segment BEGIN markupbase2 DONE
class ParserBase {
    constructor() {
        if (this.constructor === ParserBase) {
            throw new Error("ParserBase must be subclassed");
        }
    }

    reset() {
        this.lineno = 1;
        this.offset = 0;
    }

    getpos() {
        return [this.lineno, this.offset];
    }

    updatepos(i, j) {
        if (i >= j) {
            return j;
        }
        let rawdata = this.rawdata;
        const nlines = rawdata.slice(i, j).split('\n').length - 1;
        if (nlines) {
            this.lineno += nlines;
            let pos = rawdata.lastIndexOf("\n", j);
            this.offset = j - (pos + 1);
        } else {
            this.offset += j - i;
        }
        return j;
    }

    _decl_otherchars = '';
///// Segment END
///// Segment BEGIN markupbase3 DONE
    // TRANSLATION NOTE: this function is inside a class `ParserBase.`
    // Internal -- parse declaration (for use by subclasses).
    parse_declaration(i) {
        // This is some sort of declaration; in "HTML as
        // deployed," this should only be the document type
        // declaration ("<!DOCTYPE html...>").
        // ISO 8879:1986, however, has more complex
        // declaration syntax for elements in <!...>, including:
        // --comment--
        // [marked section]
        // name in the following list: ENTITY, DOCTYPE, ELEMENT,
        // ATTLIST, NOTATION, SHORTREF, USEMAP,
        // LINKTYPE, LINK, IDLINK, USELINK, SYSTEM
        const rawdata = this.rawdata;
        let j = i + 2;
        assert(rawdata.slice(i, j) === "<!", "unexpected call to parse_declaration");
        if (rawdata.slice(j, j + 1) === ">") {
            // the empty comment <!>
            return j + 1;
        }
        if (rawdata.slice(j, j + 1) in ["-", ""]) {
            // Start of comment followed by buffer boundary,
            // or just a buffer boundary.
            return -1;
        }
        // A simple, practical version could look like: ((name|stringlit) S*) + '>'
        const n = rawdata.length;
        if (rawdata.slice(j, j + 2) === "--") { //comment
            // Locate --.*-- as the body of the comment
            return this.parse_comment(i);
        } else if (rawdata[j] === "[") { //marked section
            // Locate [statusWord [...arbitrary SGML...]] as the body of the marked section
            // Where statusWord is one of TEMP, CDATA, IGNORE, INCLUDE, RCDATA
            // Note that this is extended by Microsoft Office "Save as Web" function
            // to include [if...] and [endif].
            return this.parse_marked_section(i);
        } else { //all other declaration elements
            const [decltype, j] = this._scan_name(j, i);
        }
        if (j < 0) {
            return j;
        }
        if (decltype === "doctype") {
            this._decl_otherchars = '';
        }
        while (j < n) {
            const c = rawdata[j];
            if (c === ">") {
                // end of declaration syntax
                const data = rawdata.slice(i + 2, j);
                if (decltype === "doctype") {
                    this.handle_decl(data);
                } else {
                    // According to the HTML5 specs sections "8.2.4.44 Bogus
                    // comment state" and "8.2.4.45 Markup declaration open
                    // state", a comment token should be emitted.
                    // Calling unknown_decl provides more flexibility though.
                    this.unknown_decl(data);
                }
                return j + 1;
            }
            if (c in ["\"", "'"]) {
                const m = _declstringlit_match.exec(rawdata, j);
                if (!m) {
                    return -1; // incomplete
                }
                j = m.end();
            } else if (c in "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") {
                const [name, j] = this._scan_name(j, i);
            } else if (this._decl_otherchars.includes(c)) {
                j = j + 1;
            } else if (c === "[") {
                // this could be handled in a separate doctype parser
                if (decltype === "doctype") {
                    j = this._parse_doctype_subset(j + 1, i);
                } else if (new Set(["attlist", "linktype", "link", "element"]).has(decltype)) {
                    // must tolerate []'d groups in a content model in an element declaration
                    // also in data attribute specifications of attlist declaration
                    // also link type declaration subsets in linktype declarations
                    // also link attribute specification lists in link declarations
                    throw new Error(`unsupported '[' char in ${decltype} declaration`);
                } else {
                    throw new Error("unexpected '[' char in declaration");
                }
            } else {
                throw new Error(`unexpected ${rawdata[j]} char in declaration`);
            }
            if (j < 0) {
                return j;
            }
        }
        return -1; // incomplete
    }
///// Segment END
///// Segment BEGIN markupbase4 DONE
    // TRANSLATION NOTE: these functions are inside a class `ParserBase.`
    // Internal -- parse a marked section
    // Override this to handle MS-word extension syntax <![if word]>content<![endif]>
    parse_marked_section(i, report = 1) {
        let rawdata = this.rawdata;
        assert(rawdata.slice(i, i + 3) === '<![', "unexpected call to parse_marked_section()");
        let [sectName, j] = this._scan_name(i + 3, i);
        if (j < 0) {
            return j;
        }
        let match = 0;
        if (new Set(["temp", "cdata", "ignore", "include", "rcdata"]).has(sectName)) {
            // look for standard ]]> ending
            match = _markedsectionclose.exec(rawdata.substring(i + 3));
        } else if (new Set(["if", "else", "endif"]).has(sectName)) {
            // look for MS Office ]> ending
            match = _msmarkedsectionclose.exec(rawdata.substring(i + 3));
        } else {
            throw new AssertionError(
                `unknown status keyword ${rawdata.slice(i + 3, j)} in marked section`
            );
        }
        if (!match) {
            return -1;
        }
        if (report) {
            j = match.index + (i + 3);
            this.unknown_decl(rawdata.slice(i + 3, j));
        }
        return match.index + match[0].length + (i + 3);
    }

    // Internal -- parse comment, return length or -1 if not terminated
    parse_comment(i, report = 1) {
        let rawdata = this.rawdata;
        if (rawdata.slice(i, i + 4) !== '<!--') {
            throw new AssertionError('unexpected call to parse_comment()');
        }
        const match = _commentclose.exec(rawdata.substring(i + 4));
        if (!match) {
            return -1;
        }
        if (report) {
            const j = match.index + (i + 4);
            this.handle_comment(rawdata.slice(i + 4, j));
        }
        return match.index + match[0].length + (i + 4);
    }
///// Segment END
///// Segment BEGIN markupbase5 DONE
    // TRANSLATION NOTE: this function is inside a class `ParserBase.`
    // Internal -- scan past the internal subset in a <!DOCTYPE declaration,
    // returning the index just past any whitespace following the trailing ']'.
    _parse_doctype_subset(i, declstartpos) {
        let rawdata = this.rawdata;
        let n = rawdata.length;
        let j = i;
        while (j < n) {
            let c = rawdata[j];
            if (c === "<") {
                let s = rawdata.slice(j, j + 2);
                if (s === "<<") {
                    // end of buffer; incomplete
                    return -1;
                }
                if (s !== "<!") {
                    this.updatepos(declstartpos, j + 1);
                    throw new Error(
                        `unexpected char in internal subset (in ${s})`
                    );
                }
                if ((j + 2) === n) {
                    // end of buffer; incomplete
                    return -1;
                }
                if ((j + 4) > n) {
                    // end of buffer; incomplete
                    return -1;
                }
                if (rawdata.slice(j, j + 4) === "<!--") {
                    j = this.parse_comment(j, { report: 0 });
                    if (j < 0) {
                        return j;
                    }
                    continue;
                }
                let [name, newJ] = this._scan_name(j + 2, declstartpos);
                j = newJ;
                if (j === -1) {
                    return -1;
                }
                if (!["attlist", "element", "entity", "notation"].includes(name)) {
                    this.updatepos(declstartpos, j + 2);
                    throw new Error(
                        `unknown declaration ${name} in internal subset`
                    );
                }
                // handle the individual names
                let meth = this[`_parse_doctype_${name}`];
                j = meth(j, declstartpos);
                if (j < 0) {
                    return j;
                }
            } else if (c === "%") {
                // parameter entity reference
                if ((j + 1) === n) {
                    // end of buffer; incomplete
                    return -1;
                }
                let [s, newJ] = this._scan_name(j + 1, declstartpos);
                j = newJ;
                if (j < 0) {
                    return j;
                }
                if (rawdata[j] === ";") {
                    j = j + 1;
                }
            } else if (c === "]") {
                j = j + 1;
                while (j < n && rawdata[j].trim().length === 0) {
                    j = j + 1;
                }
                if (j < n) {
                    if (rawdata[j] === ">") {
                        return j;
                    }
                    this.updatepos(declstartpos, j);
                    throw new Error("unexpected char after internal subset");
                } else {
                    return -1;
                }
            } else if (c.trim().length === 0) {
                j = j + 1;
            } else {
                this.updatepos(declstartpos, j);
                throw new Error(`unexpected char ${c} in internal subset`);
            }
        }
        // end of buffer reached
        return -1;
    }
///// Segment END
///// Segment BEGIN markupbase6 DONE
    // TRANSLATION NOTE: this function is inside a class `ParserBase.`
    // Internal -- scan past <!ELEMENT declarations
    _parse_doctype_element(i, declstartpos) {
        let [name, j] = this._scan_name(i, declstartpos);
        if (j === -1) {
            return -1;
        }
        // style content model; just skip until '>'
        let rawdata = this.rawdata;
        if (rawdata.slice(j).includes('>')) {
            return rawdata.indexOf('>', j) + 1;
        }
        return -1;
    }

    // Internal -- scan past <!ATTLIST declarations
    _parse_doctype_attlist(i, declstartpos) {
        let rawdata = this.rawdata;
        let [name, j] = this._scan_name(i, declstartpos);
        let c = rawdata.slice(j, j + 1);
        if (c === '') {
            return -1;
        }
        if (c === '>') {
            return j + 1;
        }
        while (true) {
            // scan a series of attribute descriptions; simplified:
            //   name type [value] [#constraint]
            let [name, j] = this._scan_name(j, declstartpos);
            if (j < 0) {
                return j;
            }
            c = rawdata.slice(j, j + 1);
            if (c === '') {
                return -1;
            }
            if (c === '(') {
                // an enumerated type; look for ')'
                if (rawdata.slice(j).includes(')')) {
                    j = rawdata.indexOf(')', j) + 1;
                } else {
                    return -1;
                }
                while (rawdata.slice(j, j + 1).trim().length) {
                    j = j + 1;
                }
                if (!rawdata.slice(j)) {
                    // end of buffer, incomplete
                    return -1;
                }
            } else {
                [name, j] = this._scan_name(j, declstartpos);
            }
            c = rawdata.slice(j, j + 1);
            if (!c) {
                return -1;
            }
            if (c === "'" || c === '"') {
                let m = _declstringlit_match.exec(rawdata, j);
                if (m) {
                    j = m.end();
                } else {
                    return -1;
                }
                c = rawdata.slice(j, j + 1);
                if (!c) {
                    return -1;
                }
            }
            if (c === '#') {
                if (rawdata.slice(j) === '#') {
                    // end of buffer
                    return -1;
                }
                let [name, j] = this._scan_name(j + 1, declstartpos);
                if (j < 0) {
                    return j;
                }
                c = rawdata.slice(j, j + 1);
                if (!c) {
                    return -1;
                }
            }
            if (c === '>') {
                // all done
                return j + 1;
            }
        }
    }
///// Segment END
///// Segment BEGIN markupbase7a DONE
    // TRANSLATION NOTE: these functions are inside a class `ParserBase.`
    // Internal -- scan past <!NOTATION declarations
    _parse_doctype_notation(i, declstartpos) {
        let name, j;
        [name, j] = this._scan_name(i, declstartpos);
        if (j < 0) {
            return j;
        }
        let rawdata = this.rawdata;
        while (true) {
            let c = rawdata.slice(j, j + 1);
            if (!c) {
                // end of buffer; incomplete
                return -1;
            }
            if (c === '>') {
                return j + 1;
            }
            if (c === "'" || c === '"') {
                let m = _declstringlit_match.exec(rawdata, j);
                if (!m) {
                    return -1;
                }
                j = m.end();
            } else {
                [name, j] = this._scan_name(j, declstartpos);
                if (j < 0) {
                    return j;
                }
            }
        }
    }
///// Segment END
///// Segment BEGIN markupbase7b DONE
    // TRANSLATION NOTE: these functions are inside a class `ParserBase.`
    // Internal -- scan past <!ENTITY declarations
    _parse_doctype_entity(i, declstartpos) {
        let rawdata = this.rawdata;
        if (rawdata.slice(i, i + 1) === "%") {
            let j = i + 1;
            while (true) {
                let c = rawdata.slice(j, j + 1);
                if (!c) {
                    return -1;
                }
                if (c.isspace()) {
                    j = j + 1;
                } else {
                    break;
                }
            }
        } else {
            j = i;
        }
        let name, j = this._scan_name(j, declstartpos);
        if (j < 0) {
            return j;
        }
        while (true) {
            let c = this.rawdata.slice(j, j + 1);
            if (!c) {
                return -1;
            }
            if (c === "'" || c === "\"") {
                let m = _declstringlit_match.exec(rawdata, j);
                if (m) {
                    j = m.end();
                } else {
                    return -1;    // incomplete
                }
            } else if (c === ">") {
                return j + 1;
            } else {
                let name, j = this._scan_name(j, declstartpos);
                if (j < 0) {
                    return j;
                }
            }
        }
    }
///// Segment END
///// Segment BEGIN markupbase8 DONE
    // TRANSLATION NOTE: these functions are inside a class `ParserBase.`
    // Internal -- scan a name token and the new position and the token, or
    // return -1 if we've reached the end of the buffer.
    _scan_name(i, declstartpos) {
        let rawdata = this.rawdata;
        let n = rawdata.length;
        if (i === n) {
            return [null, -1];
        }
        let m = _declname_match.exec(rawdata.substring(i));
        if (m) {
            let s = m[0];
            let name = s.trim();
            if ((i + s.length) === n) {
                return [null, -1]; // end of buffer
            }
            return [name.toLowerCase(), m.index + s.length];
        } else {
            this.updatepos(declstartpos, i);
            throw new Error(`expected name token at ${rawdata.slice(declstartpos, declstartpos + 20)}`);
        }
    }

    // To be overridden -- handlers for unknown objects
    unknown_decl(data) {
        // pass
    }
}
///// Segment END
///// Segment BEGIN htmlparser1 DONE
const interesting_normal = /[&<]/g;
const incomplete = /&[a-zA-Z#]/g;

const entityref = /&([a-zA-Z][-.a-zA-Z0-9]*)[^a-zA-Z0-9]/g;
const charref = /&#(?:[0-9]+|[xX][0-9a-fA-F]+)[^0-9a-fA-F]/g;

const starttagopen = /<[a-zA-Z]/g;
const piclose = />/g;
const commentclose = /--\s*>/g;

const tagfind_tolerant = /([a-zA-Z][^\t\n\r\f />\x00]*)(?:\s|\/(?!>))*/;
const attrfind_tolerant = /((?<=['"\s/])[^\s/>][^\s/=>]*)(\s*=+\s*('[^']*'|"[^"]*"|(?![\'"])[^>\s]*))?(?:\s|\/(?!>))*/;
const locatestarttagend_tolerant = /<[a-zA-Z][^\t\n\r\f />\x00]*(?:[\s/]*(?:(?<=['"\s/])[^\s/>][^\s/=>]*(?:\s*=+\s*(?:'[^']*'|"[^"]*"|(?!['"])[^>\s]*)\s*)?(?:\s|\/(?!>))*)*)?\s*/;
const endendtag = />/;
const endtagfind = /<\/\s*([a-zA-Z][-.a-zA-Z0-9:_]*)\s*>/;
///// Segment END
///// Segment BEGIN htmlparser2 DONE
class HTMLParser extends ParserBase {
    CDATA_CONTENT_ELEMENTS = ["script", "style"];
    constructor({ convert_charrefs = true } = {}) {
        super();
        this.convert_charrefs = convert_charrefs;
        this.reset();
    }

    reset() {
        this.rawdata = '';
        this.lasttag = '???';
        this.interesting = interesting_normal;
        this.cdata_elem = null;
        super.reset();
    }

    feed(data) {
        this.rawdata = this.rawdata + data;
        this.goahead(0);
    }

    close() {
        this.goahead(1);
    }

    get_starttag_text() {
        return this.__starttag_text;
    }

    set_cdata_mode(elem) {
        this.cdata_elem = elem.toLowerCase();
        this.interesting = new RegExp(`</\\s*${this.cdata_elem}\\s*>`, 'i');
    }

    clear_cdata_mode() {
        this.interesting = interesting_normal;
        this.cdata_elem = null;
    }
///// Segment END
///// Segment BEGIN htmlparser3 DONE
    // TRANSLATION NOTE: the following function(s) is inside a class `HTMLParser`
    // Internal -- handle data as far as reasonable.  May leave state
    // and data to be processed by a subsequent call.  If 'end' is
    // true, force handling all data as if followed by EOF marker.
    goahead(end) {
        let rawdata = this.rawdata;
        let i = 0; let j = 0;
        let n = rawdata.length;
        while (i < n) {
            if (this.convert_charrefs && !this.cdata_elem) {
                j = rawdata.indexOf('<', i);
                if (j < 0) {
                    // if we can't find the next <, either we are at the end
                    // or there's more text incoming.  If the latter is True,
                    // we can't pass the text to handle_data in case we have
                    // a charref cut in half at end.  Try to determine if
                    // this is the case before proceeding by looking for an
                    // & near the end and see if it's followed by a space or ;.
                    let amppos = rawdata.lastIndexOf('&', Math.max(i, n - 34));
                    if (amppos >= 0 &&
                        !RegExp('[\\s;]').test(rawdata.slice(amppos))) {
                        break;  // wait till we get all the text
                    }
                    j = n;
                }
            } else {
                let match = this.interesting.exec(rawdata.slice(i));  // < or &
                if (match) {
                    j = match.index + i;
                } else {
                    if (this.cdata_elem) {
                        break;
                    }
                    j = n;
                }
            }
            if (i < j) {
                if (this.convert_charrefs && !this.cdata_elem) {
                    this.handle_data(unescape(rawdata.slice(i, j)));
                } else {
                    this.handle_data(rawdata.slice(i, j));
                }
            }
            i = this.updatepos(i, j);
            if (i == n) break;
            let startswith = startsWith; startsWithString = rawdata; let k = 0;
            if (startswith('<', i)) {
                if (starttagopen.exec(rawdata.slice(i, i+2))) { // < + letter
                    k = this.parse_starttag(i);
                } else if (startswith("</", i)) {
                    k = this.parse_endtag(i);
                } else if (startswith("<!--", i)) {
                    k = this.parse_comment(i);
                } else if (startswith("<?", i)) {
                    k = this.parse_pi(i);
                } else if (startswith("<!", i)) {
                    k = this.parse_html_declaration(i);
                } else if ((i + 1) < n) {
                    this.handle_data("<");
                    k = i + 1;
                } else {
                    break;
                }
                if (k < 0) {
                    if (!end) {
                        break;
                    }
                    k = rawdata.indexOf('>', i + 1);
                    if (k < 0) {
                        k = rawdata.indexOf('<', i + 1);
                        if (k < 0) {
                            k = i + 1;
                        }
                    } else {
                        k += 1;
                    }
                    if (this.convert_charrefs && !this.cdata_elem) {
                        this.handle_data(unescape(rawdata.slice(i, k)));
                    } else {
                        this.handle_data(rawdata.slice(i, k));
                    }
                }
                i = this.updatepos(i, k);
            } else if (startswith("&#", i)) {
                let match = charref.exec(rawdata.slice(i));
                if (match) {
                    let name = match[0].slice(2, -1);
                    this.handle_charref(name);
                    k = match.index + match[0].length;
                    if (!startswith(';', k - 1)) {
                        k = k - 1;
                    }
                    i = this.updatepos(i, k);
                    continue;
                } else {
                    if (rawdata.slice(i).includes(';')) {  // bail by consuming &#
                        this.handle_data(rawdata.slice(i, i + 2));
                        i = this.updatepos(i, i + 2);
                    }
                    break;
                }
            } else if (startswith('&', i)) {
                let match = entityref.exec(rawdata.slice(i));
                if (match) {
                    let name = match[1];
                    this.handle_entityref(name);
                    k = match.index + match[0].length;
                    if (!startswith(';', k - 1)) {
                        k = k - 1;
                    }
                    i = this.updatepos(i, k);
                    continue;
                }
                match = incomplete.exec(rawdata.slice(i));
                if (match) {
                    // match.group() will contain at least 2 chars
                    if (end && match[0] == rawdata.slice(i)) {
                        k = match.index + match[0].length;
                        if (k <= i) {
                            k = n;
                        }
                        i = this.updatepos(i, i + 1);
                    }
                    // incomplete
                    break;
                } else if ((i + 1) < n) {
                    // not the end of the buffer, and can't be confused
                    // with some other construct
                    this.handle_data("&");
                    i = this.updatepos(i, i + 1);
                } else {
                    break;
                }
            } else {
                if (0) throw new Error("interesting.search() lied");
            }
        }
        // end while
        if (end && i < n && !this.cdata_elem) {
            if (this.convert_charrefs && !this.cdata_elem) {
                this.handle_data(unescape(rawdata.slice(i)));
            } else {
                this.handle_data(rawdata.slice(i));
            }
            i = this.updatepos(i, n);
        }
        this.rawdata = rawdata.slice(i);
    }
///// Segment END
///// Segment BEGIN htmlparser4 DONE
    // TRANSLATION NOTE: the following function(s) is inside a class `HTMLParser`
    // Internal -- parse html declarations, return length or -1 if not terminated
    // See w3.org/TR/html5/tokenization.html#markup-declaration-open-state
    // See also parse_declaration in _markupbase
    parse_html_declaration(i) {
        let rawdata = this.rawdata;
        console.assert(rawdata.slice(i, i+2) === '<!', 'unexpected call to parse_html_declaration()');
        if (rawdata.slice(i, i+4) === '<!--') {
            // this case is actually already handled in goahead()
            return this.parse_comment(i);
        } else if (rawdata.slice(i, i+3) === '<![') {
            return this.parse_marked_section(i);
        } else if (rawdata.slice(i, i+9).toLowerCase() === '<!doctype') {
            // find the closing >
            let gtpos = rawdata.indexOf('>', i+9);
            if (gtpos === -1) {
                return -1;
            }
            this.handle_decl(rawdata.slice(i+2, gtpos));
            return gtpos+1;
        } else {
            return this.parse_bogus_comment(i);
        }
    }

    // Internal -- parse bogus comment, return length or -1 if not terminated
    // see http://www.w3.org/TR/html5/tokenization.html#bogus-comment-state
    parse_bogus_comment(i, report=1) {
        let rawdata = this.rawdata;
        console.assert(rawdata.slice(i, i+2) in ['<!', '</'], 'unexpected call to parse_comment()');
        let pos = rawdata.indexOf('>', i+2);
        if (pos === -1) {
            return -1;
        }
        if (report) {
            this.handle_comment(rawdata.slice(i+2, pos));
        }
        return pos + 1;
    }

    // Internal -- parse processing instr, return end or -1 if not terminated
    parse_pi(i) {
        let rawdata = this.rawdata;
        console.assert(rawdata.slice(i, i+2) === '<?', 'unexpected call to parse_pi()');
        let match = piclose.exec(rawdata.slice(i+2)); // >
        if (!match) {
            return -1;
        }
        let j = match.index + i + 2;
        this.handle_pi(rawdata.slice(i+2, j));
        j = match.index + match[0].length + i + 2;
        return j;
    }
///// Segment END
///// Segment BEGIN htmlparser5 DONE
    // TRANSLATION NOTE: the following function(s) is inside a class `HTMLParser`
    // Internal -- handle starttag, return end or -1 if not terminated
    parse_starttag(i) {
        this.__starttag_text = null;
        let endpos = this.check_for_whole_start_tag(i);
        if (endpos < 0) {
            return endpos;
        }
        let rawdata = this.rawdata;
        this.__starttag_text = rawdata.slice(i, endpos);

        // Now parse the data between i+1 and j into a tag and attrs
        let attrs = [];
        let match = tagfind_tolerant.exec(rawdata.slice(i + 1));
        if (!match) {
            throw new Error('unexpected call to parse_starttag()');
        }
        let k = match[0].length + (i + 1);
        this.lasttag = match[1].toLowerCase();
        while (k < endpos) {
            let m = rawdata.slice(k-1).match(attrfind_tolerant);
            if (m[2] == undefined) {
                break;
            }
            let attrname = m[1]; let rest = m[2]; let attrvalue = m[3];
            if (!rest) {
                attrvalue = null;
            } else if ((attrvalue[0] == "'" && attrvalue[attrvalue.length-1] == "'") || (attrvalue[0] == '"' && attrvalue[attrvalue.length-1] == '"')) {
                attrvalue = attrvalue.slice(1, -1);
            }
            if (attrvalue) {
                attrvalue = unescape(attrvalue);
            }
            attrs.push([attrname.toLowerCase(), attrvalue]);
            k += m[0].length;
        }

        let end = rawdata.slice(k, endpos).trim();
        if (end !== ">" && end !== "/>") {
            this.handle_data(rawdata.slice(i, endpos));
            return endpos;
        }
        if (end.endsWith('/>')) {
            // XHTML-style empty tag: <span attr="value" />
            this.handle_startendtag(this.lasttag, attrs);
        } else {
            this.handle_starttag(this.lasttag, attrs);
            if (this.CDATA_CONTENT_ELEMENTS.includes(this.lasttag)) {
                this.set_cdata_mode(this.lasttag);
            }
        }
        return endpos;
    }
///// Segment END
///// Segment BEGIN htmlparser6 DONE
    // TRANSLATION NOTE: the following function(s) is inside a class `HTMLParser`
    // Internal -- check to see if we have a complete starttag; return end
    // or -1 if incomplete.
    check_for_whole_start_tag(i) {
        let rawdata = this.rawdata;
        let m = locatestarttagend_tolerant.exec(rawdata.slice(i));
        if (m) {
            let j = i + m.index + m[0].length;
            let next = rawdata[j];
            if (next == ">") {
                return j + 1;
            }
            if (next == "/") {
                if (rawdata.startsWith("/>", j)) {
                    return j + 2;
                }
                if (rawdata.startsWith("/", j)) {
                    // buffer boundary
                    return -1;
                }
                // else bogus input
                if (j > i) {
                    return j;
                } else {
                    return i + 1;
                }
            }
            if (next == "") {
                // end of input
                return -1;
            }
            if ("abcdefghijklmnopqrstuvwxyz=/ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(next)) {
                // end of input in or before attribute value, or we have the
                // '/' from a '/>' ending
                return -1;
            }
            if (j > i) {
                return j;
            } else {
                return i + 1;
            }
        }
        throw new Error("we should not get here!");
    }
///// Segment END
///// Segment BEGIN htmlparser7 DONE
    // TRANSLATION NOTE: the following function(s) is inside a class `HTMLParser`
    // Internal -- parse endtag, return end or -1 if incomplete
    parse_endtag(i) {
        let rawdata = this.rawdata;
        assert(rawdata.slice(i, i + 2) === "</", "unexpected call to parse_endtag");
        let match = endendtag.exec(rawdata.slice(i + 1)); // >
        if (!match) {
            return -1;
        }
        let gtpos = match.index + match[0].length + (i + 1);
        match = endtagfind.exec(rawdata.slice(i).split('\n')[0]); // </ + tag + >
        if (!match) {
            if (this.cdata_elem !== null) {
                this.handle_data(rawdata.slice(i, gtpos));
                return gtpos;
            }
            // find the name: w3.org/TR/html5/tokenization.html#tag-name-state
            let namematch = tagfind_tolerant.exec(rawdata.slice(i + 2).split('\n')[0]);
            if (namematch == null || namematch[2] == undefined) {
                // w3.org/TR/html5/tokenization.html#end-tag-open-state
                if (rawdata.slice(i, i + 3) === '</>') {
                    return i + 3;
                } else {
                    return this.parse_bogus_comment(i);
                }
            }
            let tagname = namematch[1].toLowerCase();
            // consume and ignore other stuff between the name and the >
            // Note: this is not 100% correct, since we might have things like
            // </tag attr=">">, but looking for > after the name should cover
            // most of the cases and is much simpler
            gtpos = rawdata.indexOf('>', namematch.index + namematch[0].length);
            this.handle_endtag(tagname);
            return gtpos + 1;
        }

        let elem = match[1].toLowerCase(); // script or style
        if (this.cdata_elem !== null) {
            if (elem !== this.cdata_elem) {
                this.handle_data(rawdata.slice(i, gtpos));
                return gtpos;
            }
        }

        this.handle_endtag(elem);
        this.clear_cdata_mode();
        return gtpos;
    }
///// Segment END
///// Segment BEGIN htmlparser8 DONE
    // TRANSLATION NOTE: the following function(s) is inside a class `HTMLParser`
    // Overridable -- finish processing of start+end tag: <tag.../>
    handle_startendtag(tag, attrs) {
        this.handle_starttag(tag, attrs);
        this.handle_endtag(tag);
    }

    // Overridable -- handle start tag
    handle_starttag(tag, attrs) {
        // pass
    }

    // Overridable -- handle end tag
    handle_endtag(tag) {
        // pass
    }

    // Overridable -- handle character reference
    handle_charref(name) {
        // pass
    }

    // Overridable -- handle entity reference
    handle_entityref(name) {
        // pass
    }

    // Overridable -- handle data
    handle_data(data) {
        // pass
    }

    // Overridable -- handle comment
    handle_comment(data) {
        // pass
    }

    // Overridable -- handle declaration
    handle_decl(decl) {
        // pass
    }

    // Overridable -- handle processing instruction
    handle_pi(data) {
        // pass
    }

    unknown_decl(data) {
        // pass
    }
}
///// Segment END
///// Segment IGNORE BEGIN
let listener_event_idx = 0;
let listener_event_list_expected = [
  [
    "decl",
    "DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\""
  ],
  [
    "data",
    "\n    "
  ],
  [
    "comment",
    " Comment "
  ],
  [
    "data",
    "\n    "
  ],
  [
    "unknown",
    "CDATA[ CDATA "
  ],
  [
    "data",
    "\n    "
  ],
  [
    "starttag",
    "a",
    [
      [
        "href",
        "http://www.python.org%20"
      ]
    ]
  ],
  [
    "data",
    "\u00a0Python{\u0213\ufffd\ufffd&&accute;\u00a0f;"
  ],
  [
    "endtag",
    "a"
  ],
  [
    "data",
    "\n    "
  ],
  [
    "starttag",
    "h1",
    []
  ],
  [
    "data",
    "Python"
  ],
  [
    "endtag",
    "h1"
  ],
  [
    "data",
    "\n    "
  ],
  [
    "starttag",
    "script",
    [
      [
        "src",
        "script.js"
      ]
    ]
  ],
  [
    "data",
    "function f(){console.log(\"sds\")}"
  ],
  [
    "endtag",
    "script"
  ],
  [
    "data",
    "\n    "
  ],
  [
    "unknown",
    "IF [condition"
  ],
  [
    "data",
    "\n             This is an invalid marked section declaration\n     "
  ],
  [
    "PRINT",
    [
      9,
      5
    ]
  ],
  [
    "PRINT",
    "<script src=\"script.js\">"
  ],
  [
    "PRINT",
    -1
  ],
  [
    "data",
    "<![ENDIF]-->"
  ],
  [
    "data",
    "\n     "
  ],
  [
    "starttag",
    "img",
    [
      [
        "src",
        "image.jpg"
      ],
      [
        "alt",
        "Example Image"
      ]
    ]
  ],
  [
    "endtag",
    "img"
  ],
  [
    "data",
    "\n     "
  ],
  [
    "data",
    "<"
  ],
  [
    "data",
    ">This is an invalid tag"
  ],
  [
    "data",
    "\n     <%30%>&##&0{}()-=]:>}}L>"
  ],
  [
    "data",
    "<"
  ],
  [
    "data",
    "<"
  ],
  [
    "data",
    ";"
  ],
  [
    "data",
    "<"
  ],
  [
    "data",
    ";>;@?;>!;>;;\n     "
  ],
  [
    "starttag",
    "div",
    []
  ],
  [
    "data",
    "<e"
  ],
  [
    "endtag",
    "div"
  ],
  [
    "data",
    "\n     "
  ],
  [
    "comment",
    "fff"
  ],
  [
    "comment",
    "!fff"
  ],
  [
    "data",
    "\n     "
  ],
  [
    "pi",
    "we"
  ],
  [
    "pi",
    "we?"
  ],
  [
    "data",
    "\n    "
  ]
];

function assert_list_equal(a, b) {
    if (a.length !== b.length) {
        console.log("[EROROR] Lists differ in length: " + a.length + " != " + b.length);
        throw Error("MyLogError MISMATCH");
    }
    if (JSON.stringify(a) !== JSON.stringify(b)) {
        console.log("[ERROR] Lists differ: " + a + " != " + b);
        throw Error("MyLogError MISMATCH");
    }
}

function check_event_data(data) {
    if (listener_event_idx >= listener_event_list_expected.length) {
        throw new Error("Unexpected event: " + JSON.stringify(data));
    }
    let expected = listener_event_list_expected[listener_event_idx];
    listener_event_idx++;
    assert_list_equal(expected, data);
}


class MyHTMLParserTester extends HTMLParser {
    handle_starttag(tag, attrs) {
        console.log("Encountered a start tag:", tag, attrs);
        check_event_data(["starttag", tag, attrs]);
    }
    handle_endtag(tag) {
        console.log("Encountered an end tag :", tag);
        check_event_data(["endtag", tag]);
    }
    handle_data(data) {
        console.log("Encountered some data  :", data);
        check_event_data(["data", data]);
    }
    handle_comment(data) {
        console.log("Encountered comment    :", data);
        check_event_data(["comment", data]);
    }
    handle_entityref(name) {
        console.log("entityref:", name);
        check_event_data(["entityref", name]);
    }
    handle_charref(name) {
        console.log("charref  name:", name);
        check_event_data(["charref", name]);
    }
    handle_decl(data) {
        console.log("decl     data:", data);
        check_event_data(["decl", data]);
    }
    handle_pi(data) {
        console.log("pi       data:", data);
        check_event_data(["pi", data]);
    }
    unknown_decl(data) {
        console.log("unknown  data:", data);
        check_event_data(["unknown", data]);
    }
}

function test() {
    let p = new MyHTMLParserTester();
    p.feed(`<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
    <!-- Comment -->
    <![CDATA[ CDATA ]]>
    <a href="http://www.python.org%20">&nbsp;Python&#123;&#x213;&#x00;&#xd800;&&#x1;&accute;&nbspf;</a>
    <H1>Python</H1>
    <script src="script.js">function f(){console.log("sds")}</script>
    <![IF [condition]>
             This is an invalid marked section declaration
     <![ENDIF]-->
     <img src="image.jpg" alt="Example Image" />
     <>This is an invalid tag</>
     &lt;%30%&gt;&##&&#x30;{}()-=]:>}}L><<;<;>;@?;>!;>;;
     <div>&lt;&#x65;</div>
     <!fff></!fff>
     <?we><?we?>
    `)
    check_event_data(["PRINT", p.getpos()]);
    check_event_data(["PRINT", p.get_starttag_text()]);
    check_event_data(["PRINT", p.parse_declaration(0)]);
    p.close();
}

test();
///// Segment IGNORE END