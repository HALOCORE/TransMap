def test():
  "--- test function ---"
  param =[(60,),(20,),(33,),(34,),(68,),(79,),(20,),(41,),(36,),(17,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
