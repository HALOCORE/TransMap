def test():
  "--- test function ---"
  param =[(6,),(58,),(90,),(69,),(15,),(54,),(60,),(51,),(46,),(91,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
