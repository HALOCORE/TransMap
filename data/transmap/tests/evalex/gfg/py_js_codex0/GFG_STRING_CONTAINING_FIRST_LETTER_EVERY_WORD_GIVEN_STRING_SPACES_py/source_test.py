def test():
  "--- test function ---"
  param =[('t a',),('77 78 2 600 7',),('011 10 10',),('kV Co O iR',),('2',),('0 11',),('Y sT wgheC',),('58 824 6',),('00 100 001 0111',),('Q',)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
