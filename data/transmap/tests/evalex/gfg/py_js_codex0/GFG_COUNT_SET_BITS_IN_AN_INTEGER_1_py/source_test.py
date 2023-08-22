def test():
  "--- test function ---"
  param =[(43,),(94,),(72,),(86,),(42,),(33,),(8,),(74,),(29,),(34,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
