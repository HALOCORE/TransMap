def test():
  "--- test function ---"
  param =[(18,),(66,),(73,),(70,),(26,),(41,),(20,),(25,),(52,),(13,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
