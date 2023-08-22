def test():
  "--- test function ---"
  param =[(71,),(78,),(39,),(36,),(49,),(17,),(53,),(66,),(92,),(71,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
