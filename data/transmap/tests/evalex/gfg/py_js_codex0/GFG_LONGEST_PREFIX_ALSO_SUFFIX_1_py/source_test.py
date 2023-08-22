def test():
  "--- test function ---"
  param =[('aabcdaabc',),('1372494598',),('110000100001',),('abcab',),('488938',),('011010101011',),('aaaa',),('3356203205',),('1010',),('kkXiiTZkGeh',)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
