def test():
  "--- test function ---"
  param =[(5,),(19,),(7,),(94,),(58,),(65,),(69,),(96,),(80,),(14,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
