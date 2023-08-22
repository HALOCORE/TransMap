#TESTED_PROGRAM

if Strongest_Extension('Watashi', ['tEN', 'niNE', 'eIGHt8OKe']) != 'Watashi.eIGHt8OKe':
  raise Exception("MyLogError MISMATCH")
if Strongest_Extension('Boku123', ['nani', 'NazeDa', 'YEs.WeCaNe', '32145tggg']) != 'Boku123.YEs.WeCaNe':
  raise Exception("MyLogError MISMATCH")
if Strongest_Extension('__YESIMHERE', ['t', 'eMptY', 'nothing', 'zeR00', 'NuLl__', '123NoooneB321']) != '__YESIMHERE.NuLl__':
  raise Exception("MyLogError MISMATCH")
if Strongest_Extension('K', ['Ta', 'TAR', 't234An', 'cosSo']) != 'K.TAR':
  raise Exception("MyLogError MISMATCH")
if Strongest_Extension('__HAHA', ['Tab', '123', '781345', '-_-']) != '__HAHA.123':
  raise Exception("MyLogError MISMATCH")
if Strongest_Extension('YameRore', ['HhAas', 'okIWILL123', 'WorkOut', 'Fails', '-_-']) != 'YameRore.okIWILL123':
  raise Exception("MyLogError MISMATCH")
if Strongest_Extension('finNNalLLly', ['Die', 'NowW', 'Wow', 'WoW']) != 'finNNalLLly.WoW':
  raise Exception("MyLogError MISMATCH")
if Strongest_Extension('_', ['Bb', '91245']) != '_.Bb':
  raise Exception("MyLogError MISMATCH")
if Strongest_Extension('Sp', ['671235', 'Bb']) != 'Sp.671235':
  raise Exception("MyLogError MISMATCH")