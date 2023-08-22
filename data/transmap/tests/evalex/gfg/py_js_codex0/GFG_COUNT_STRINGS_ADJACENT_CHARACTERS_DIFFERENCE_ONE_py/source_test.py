def test():
  "--- test function ---"
  param =[(7,),(47,),(72,),(66,),(71,),(56,),(61,),(68,),(78,),(22,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
