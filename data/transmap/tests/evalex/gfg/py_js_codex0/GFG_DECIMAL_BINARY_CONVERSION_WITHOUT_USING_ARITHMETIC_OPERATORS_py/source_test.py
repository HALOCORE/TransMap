def test():
  "--- test function ---"
  param =[(35,),(17,),(8,),(99,),(57,),(39,),(99,),(14,),(22,),(7,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
