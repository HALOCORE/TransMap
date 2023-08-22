def test():
  "--- test function ---"
  param =[(50,),(92,),(49,),(94,),(7,),(30,),(88,),(98,),(94,),(23,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
