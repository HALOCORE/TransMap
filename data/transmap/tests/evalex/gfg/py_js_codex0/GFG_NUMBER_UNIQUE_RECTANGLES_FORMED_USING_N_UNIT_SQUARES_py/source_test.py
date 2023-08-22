def test():
  "--- test function ---"
  param =[(34,),(49,),(41,),(17,),(67,),(38,),(59,),(64,),(61,),(58,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
