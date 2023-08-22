def test():
  "--- test function ---"
  param =[(62,),(13,),(29,),(72,),(30,),(20,),(10,),(47,),(91,),(52,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
