def test():
  "--- test function ---"
  param =[(77,),(62,),(42,),(16,),(82,),(37,),(29,),(32,),(82,),(91,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
