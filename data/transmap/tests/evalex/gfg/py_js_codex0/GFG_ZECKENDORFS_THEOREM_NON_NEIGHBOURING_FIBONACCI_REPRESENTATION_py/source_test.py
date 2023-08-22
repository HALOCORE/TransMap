def test():
  "--- test function ---"
  param =[(54,),(71,),(64,),(71,),(96,),(43,),(70,),(94,),(95,),(69,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
