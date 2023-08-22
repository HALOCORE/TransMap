def test():
  "--- test function ---"
  param =[(66,),(7,),(55,),(37,),(76,),(16,),(17,),(95,),(71,),(90,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
