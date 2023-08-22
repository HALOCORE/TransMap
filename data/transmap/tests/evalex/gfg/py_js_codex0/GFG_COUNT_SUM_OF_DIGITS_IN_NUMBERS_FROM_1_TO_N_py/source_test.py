def test():
  "--- test function ---"
  param =[(29,),(97,),(71,),(82,),(69,),(30,),(82,),(32,),(77,),(39,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
