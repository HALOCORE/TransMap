def test():
  "--- test function ---"
  param =[(76,),(21,),(4,),(49,),(35,),(55,),(43,),(39,),(36,),(5,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
