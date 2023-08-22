def test():
  "--- test function ---"
  param =[(17,),(97,),(73,),(68,),(6,),(84,),(72,),(66,),(57,),(11,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
