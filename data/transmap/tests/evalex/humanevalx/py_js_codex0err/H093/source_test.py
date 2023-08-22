#TESTED_PROGRAM

if encode('TEST') != 'tgst':
  raise Exception("MyLogError MISMATCH")
if encode('Mudasir') != 'mWDCSKR':
  raise Exception("MyLogError MISMATCH")
if encode('YES') != 'ygs':
  raise Exception("MyLogError MISMATCH")
if encode('This is a message') != 'tHKS KS C MGSSCGG':
  raise Exception("MyLogError MISMATCH")
if encode("I DoNt KnOw WhAt tO WrItE") != 'k dQnT kNqW wHcT Tq wRkTg':
  raise Exception("MyLogError MISMATCH")