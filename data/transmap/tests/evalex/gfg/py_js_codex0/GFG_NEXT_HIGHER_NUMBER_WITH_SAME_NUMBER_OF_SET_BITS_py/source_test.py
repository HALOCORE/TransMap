def test():
  "--- test function ---"
  param =[(42,),(75,),(94,),(5,),(52,),(22,),(77,),(44,),(85,),(59,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
