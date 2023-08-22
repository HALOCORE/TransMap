def test():
  "--- test function ---"
  param =[(88,),(24,),(3,),(22,),(53,),(2,),(88,),(30,),(38,),(2,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
