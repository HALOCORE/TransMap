def test():
  "--- test function ---"
  param =[(69,),(72,),(88,),(7,),(66,),(34,),(23,),(37,),(33,),(21,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
