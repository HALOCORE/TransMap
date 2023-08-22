def test():
  "--- test function ---"
  param =[('ab',),('303',),('11110000',),('aba',),('404',),('10101',),('abab',),('6366',),('001',),('',)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
