def test():
  "--- test function ---"
  param =[(98,),(8,),(78,),(65,),(55,),(10,),(10,),(37,),(39,),(15,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
