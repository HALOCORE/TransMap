//TESTED_PROGRAM

if(
    Strongest_Extension('Watashi', ['tEN', 'niNE', 'eIGHt8OKe']) !==
    'Watashi.eIGHt8OKe'
  )
  throw Error("MyLogError MISMATCH");
if(
    Strongest_Extension('Boku123', [
      'nani',
      'NazeDa',
      'YEs.WeCaNe',
      '32145tggg',
    ]) !== 'Boku123.YEs.WeCaNe'
  )
  throw Error("MyLogError MISMATCH");
if(
    Strongest_Extension('__YESIMHERE', [
      't',
      'eMptY',
      'nothing',
      'zeR00',
      'NuLl__',
      '123NoooneB321',
    ]) !== '__YESIMHERE.NuLl__'
  )
  throw Error("MyLogError MISMATCH");
if(
    Strongest_Extension('K', ['Ta', 'TAR', 't234An', 'cosSo']) !== 'K.TAR'
  )
  throw Error("MyLogError MISMATCH");
if(
    Strongest_Extension('__HAHA', ['Tab', '123', '781345', '-_-']) !==
    '__HAHA.123'
  )
  throw Error("MyLogError MISMATCH");
if(
    Strongest_Extension('YameRore', [
      'HhAas',
      'okIWILL123',
      'WorkOut',
      'Fails',
      '-_-',
    ]) !== 'YameRore.okIWILL123'
  )
  throw Error("MyLogError MISMATCH");
if(
    Strongest_Extension('finNNalLLly', ['Die', 'NowW', 'Wow', 'WoW']) !==
    'finNNalLLly.WoW'
  )
  throw Error("MyLogError MISMATCH");
if(Strongest_Extension('_', ['Bb', '91245']) !== '_.Bb')
  throw Error("MyLogError MISMATCH");
if(Strongest_Extension('Sp', ['671235', 'Bb']) !== 'Sp.671235')
  throw Error("MyLogError MISMATCH");