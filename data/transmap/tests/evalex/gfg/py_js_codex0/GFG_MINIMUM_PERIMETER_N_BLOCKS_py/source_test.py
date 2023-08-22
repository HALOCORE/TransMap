def test():
  "--- test function ---"
  param =[(45,),(80,),(54,),(48,),(83,),(68,),(32,),(20,),(68,),(66,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
