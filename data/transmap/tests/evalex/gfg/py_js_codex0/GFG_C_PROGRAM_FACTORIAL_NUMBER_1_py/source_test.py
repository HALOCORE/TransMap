def test():
  "--- test function ---"
  param =[(15,),(7,),(16,),(67,),(71,),(16,),(77,),(27,),(37,),(73,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
