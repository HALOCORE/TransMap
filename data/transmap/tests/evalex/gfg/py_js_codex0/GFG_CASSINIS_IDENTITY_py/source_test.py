def test():
  "--- test function ---"
  param =[(67,),(2,),(58,),(6,),(42,),(17,),(37,),(44,),(23,),(40,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
