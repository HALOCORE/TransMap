def test():
  "--- test function ---"
  param =[(67,),(77,),(35,),(79,),(45,),(22,),(68,),(17,),(5,),(85,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
