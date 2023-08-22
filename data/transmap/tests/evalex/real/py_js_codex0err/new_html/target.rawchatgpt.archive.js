///// Segment IGNORE BEGIN
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

delete name, codepoint;
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
function _replace_charref(s) {
    s = s.group(1);
    if (s[0] === '#') {
        // numeric charref
        let num;
        if (s[1] === 'x' || s[1] === 'X') {
            num = parseInt(s.slice(2, -1), 16);
        } else {
            num = parseInt(s.slice(1, -1));
        }
        if (_invalid_charrefs.includes(num)) {
            return _invalid_charrefs[num];
        }
        if (num >= 0xD800 && num <= 0xDFFF || num > 0x10FFFF) {
            return '\uFFFD';
        }
        if (_invalid_codepoints.includes(num)) {
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
const _declname_match = /[a-zA-Z][-_.a-zA-Z0-9]*\s*/.exec;
const _declstringlit_match = /(\'[^\']*\'|"[^"]*")\s*/.exec;
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
        let nlines = rawdata.split("\n").length - 1;
        if (nlines) {
            this.lineno += nlines;
            let pos = rawdata.lastIndexOf("\n", j);
            this.offset = j - (pos + 1);
        } else {
            this.offset += j - i;
        }
        return j;
    }
}

ParserBase.prototype._decl_otherchars = '';
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
            const m = _declstringlit_match(rawdata, j);
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
    if (new Set(["temp", "cdata", "ignore", "include", "rcdata"]).has(sectName)) {
        // look for standard ]]> ending
        match = _markedsectionclose.search(rawdata, i + 3);
    } else if (new Set(["if", "else", "endif"]).has(sectName)) {
        // look for MS Office ]> ending
        match = _msmarkedsectionclose.search(rawdata, i + 3);
    } else {
        throw new AssertionError(
            `unknown status keyword ${rawdata.slice(i + 3, j)} in marked section`
        );
    }
    if (!match) {
        return -1;
    }
    if (report) {
        j = match.start(0);
        this.unknown_decl(rawdata.slice(i + 3, j));
    }
    return match.end(0);
}

// Internal -- parse comment, return length or -1 if not terminated
parse_comment(i, report = 1) {
    let rawdata = this.rawdata;
    if (rawdata.slice(i, i + 4) !== '<!--') {
        throw new AssertionError('unexpected call to parse_comment()');
    }
    let match = _commentclose.search(rawdata, i + 4);
    if (!match) {
        return -1;
    }
    if (report) {
        let j = match.start(0);
        this.handle_comment(rawdata.slice(i + 4, j));
    }
    return match.end(0);
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
            let m = _declstringlit_match(rawdata, j);
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
            let m = _declstringlit_match(rawdata, j);
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
            let m = _declstringlit_match(rawdata, j);
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
    let m = _declname_match(rawdata, i);
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
///// Segment END
///// Segment BEGIN htmlparser1 DONE
const interesting_normal = /[&<]/g;
const incomplete = /&[a-zA-Z#]/g;

const entityref = /&([a-zA-Z][-.a-zA-Z0-9]*)[^a-zA-Z0-9]/g;
const charref = /&#(?:[0-9]+|[xX][0-9a-fA-F]+)[^0-9a-fA-F]/g;

const starttagopen = /<[a-zA-Z]/g;
const piclose = />/g;
const commentclose = /--\s*>/g;

const tagfind_tolerant = /([a-zA-Z][^\t\n\r\f />\x00]*)(?:\s|\/(?!>))*]/g;
const attrfind_tolerant = /((?<=[\'"\s/])[^\s/>][^\s/=>]*)(\s*=+\s*('[^']*'|"[^"]*"|(?![\'"])[^>\s]*))?(?:\s|\/(?!>))*]/g;
const locatestarttagend_tolerant = /<[a-zA-Z][^\t\n\r\f />\x00]*(?:[\s/]*(?:(?<=['"\s/])[^\s/>][^\s/=>]*(?:\s*=+\s*(?:'[^']*'|"[^"]*"|(?!['"])[^>\s]*)\s*)?(?:\s|\/(?!>))*)*)?\s*/g;
const endendtag = />/g;
const endtagfind = /<\/\s*([a-zA-Z][-.a-zA-Z0-9:_]*)\s*>/g;
///// Segment END
///// Segment BEGIN htmlparser2 DONE
class HTMLParser extends ParserBase {
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
    
    static CDATA_CONTENT_ELEMENTS = ["script", "style"];
}
///// Segment END
///// Segment BEGIN htmlparser3 DONE
// TRANSLATION NOTE: the following function(s) is inside a class `HTMLParser`
// Internal -- handle data as far as reasonable.  May leave state
// and data to be processed by a subsequent call.  If 'end' is
// true, force handling all data as if followed by EOF marker.
goahead(end) {
    let rawdata = this.rawdata;
    let i = 0;
    let n = rawdata.length;
    while (i < n) {
        if (this.convert_charrefs && !this.cdata_elem) {
            let j = rawdata.indexOf('<', i);
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
                let j = match.index + i;
            } else {
                if (this.cdata_elem) {
                    break;
                }
                let j = n;
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
        let startswith = rawdata.startsWith;
        if (startswith('<', i)) {
            if (starttagopen.test(rawdata.slice(i))) { // < + letter
                let k = this.parse_starttag(i);
            } else if (startswith("</", i)) {
                let k = this.parse_endtag(i);
            } else if (startswith("<!--", i)) {
                let k = this.parse_comment(i);
            } else if (startswith("<?", i)) {
                let k = this.parse_pi(i);
            } else if (startswith("<!", i)) {
                let k = this.parse_html_declaration(i);
            } else if ((i + 1) < n) {
                this.handle_data("<");
                let k = i + 1;
            } else {
                break;
            }
            if (k < 0) {
                if (!end) {
                    break;
                }
                let k = rawdata.indexOf('>', i + 1);
                if (k < 0) {
                    let k = rawdata.indexOf('<', i + 1);
                    if (k < 0) {
                        let k = i + 1;
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
                let k = match.index + match[0].length;
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
                let k = match.index + match[0].length;
                if (!startswith(';', k - 1)) {
                    k = k - 1;
                }
                i = this.updatepos(i, k);
                continue;
            }
            let match = incomplete.exec(rawdata.slice(i));
            if (match) {
                // match.group() will contain at least 2 chars
                if (end && match[0] == rawdata.slice(i)) {
                    let k = match.index + match[0].length;
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
            assert(0, "interesting.search() lied");
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
    let k = match[0].length + 1;
    this.lasttag = match[1].toLowerCase();
    while (k < endpos) {
        let m = attrfind_tolerant.exec(rawdata.slice(k));
        if (!m) {
            break;
        }
        let [_, attrname, rest, attrvalue] = m;
        if (!rest) {
            attrvalue = null;
        } else if (attrvalue.startsWith("'") && attrvalue.endsWith("'") || attrvalue.startsWith('"') && attrvalue.endsWith('"')) {
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
    let gtpos = match.index + match[0].length;
    match = endtagfind.exec(rawdata.slice(i)); // </ + tag + >
    if (!match) {
        if (this.cdata_elem !== null) {
            this.handle_data(rawdata.slice(i, gtpos));
            return gtpos;
        }
        // find the name: w3.org/TR/html5/tokenization.html#tag-name-state
        let namematch = tagfind_tolerant.exec(rawdata.slice(i + 2));
        if (!namematch) {
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
///// Segment END
///// Segment IGNORE BEGIN
///// Segment IGNORE END