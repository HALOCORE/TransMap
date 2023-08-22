def test():
  "--- test function ---"
  param =[('ba',),('aabb',),('abab',),('aaabb',),('aabbb',),('abaabbaa',),('abaababb',),('bbaa',),('11001000',),('ZWXv te',)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
