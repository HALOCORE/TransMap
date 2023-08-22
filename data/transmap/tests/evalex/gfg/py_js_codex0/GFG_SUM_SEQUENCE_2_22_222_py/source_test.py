def test():
  "--- test function ---"
  param =[(88,),(79,),(7,),(36,),(23,),(10,),(27,),(30,),(71,),(6,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
