def test():
  "--- test function ---"
  param =[('geeekk',),('3786868',),('110',),('aaaabbcbbb',),('11',),('011101',),('WoHNyJYLC',),('3141711779',),('10111101101',),('aabbabababcc',)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
