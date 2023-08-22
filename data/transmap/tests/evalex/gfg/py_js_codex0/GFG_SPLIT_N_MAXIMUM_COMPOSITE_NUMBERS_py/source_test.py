def test():
  "--- test function ---"
  param =[(55,),(35,),(24,),(75,),(5,),(7,),(50,),(28,),(67,),(59,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
