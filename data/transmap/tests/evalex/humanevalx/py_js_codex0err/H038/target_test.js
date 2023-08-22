//TESTED_PROGRAM

function test(){
const letters = new Array(26)
  .fill(null)
  .map((v, i) => String.fromCharCode(97 + i));

for (let i = 0; i < 100; i++) {
  let str = new Array(Math.floor(Math.random() * 20)).fill(null);
  str = str.map(item => letters[Math.floor(Math.random() * letters.length)]).join('');
  let encoded_str = encode_cyclic(str);
  if(decode_cyclic(encoded_str) !== str)
    throw Error("MyLogError MISMATCH");
}

}

test();
