def test():
  "--- test function ---"
  param =[(94, 4, 69,),(7, 12, 33,),(20, 44, 24,),(90, 94, 88,),(50, 58, 27,),(32, 90, 29,),(46, 25, 6,),(82, 50, 87,),(43, 82, 70,),(6, 83, 19,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
