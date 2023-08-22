def test():
  "--- test function ---"
  param =[(39,),(79,),(7,),(76,),(48,),(18,),(58,),(17,),(36,),(5,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
