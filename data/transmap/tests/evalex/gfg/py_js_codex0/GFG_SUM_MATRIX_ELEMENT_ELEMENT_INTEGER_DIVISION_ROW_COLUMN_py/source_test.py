def test():
  "--- test function ---"
  param =[(60,),(74,),(8,),(74,),(34,),(66,),(96,),(11,),(45,),(72,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
