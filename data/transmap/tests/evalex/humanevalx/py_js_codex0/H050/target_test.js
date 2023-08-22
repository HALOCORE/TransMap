//TESTED_PROGRAM
const letters = new Array(26)
.fill(null)
.map((v, i) => String.fromCharCode(97 + i))

for (let i = 0; i < 100; i++) {
  let _str = new Array(Math.floor(Math.random() * 20)).fill(null);
  _str = _str.map(item => letters[Math.floor(Math.random() * letters.length)]).join('');
  let encoded_str = encode_shift(_str)
  if(decode_shift(encoded_str) !== _str)
    throw Error("MyLogError MISMATCH");
}