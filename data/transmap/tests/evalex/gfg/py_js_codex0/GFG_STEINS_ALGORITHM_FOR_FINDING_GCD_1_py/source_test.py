def test():
  "--- test function ---"
  param =[(52, 29,),(36, 94,),(12, 6,),(69, 7,),(45, 11,),(7, 51,),(45, 55,),(62, 86,),(96, 63,),(89, 12,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
