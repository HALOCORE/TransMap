def test():
  "--- test function ---"
  param =[(87,),(69,),(15,),(11,),(11,),(15,),(47,),(65,),(50,),(58,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
