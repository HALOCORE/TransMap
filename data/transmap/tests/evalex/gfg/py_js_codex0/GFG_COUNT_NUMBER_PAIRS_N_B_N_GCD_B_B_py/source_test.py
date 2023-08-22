def test():
  "--- test function ---"
  param =[(17,),(72,),(43,),(55,),(62,),(22,),(17,),(68,),(20,),(29,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
