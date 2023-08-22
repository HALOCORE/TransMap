def test():
  "--- test function ---"
  param =[('}{',),('{{{',),('{{{{',),('{{{{}}',),('}{{}}{{{',),('{}',),('',),('8',),('01111000',),('XPkERzHcpId',)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
