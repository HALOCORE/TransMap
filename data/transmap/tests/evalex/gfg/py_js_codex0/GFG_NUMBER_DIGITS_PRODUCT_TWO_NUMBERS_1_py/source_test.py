def test():
  "--- test function ---"
  param =[(97, 91,),(52, 49,),(95, 34,),(35, 40,),(40, 85,),(18, 97,),(92, 15,),(73, 98,),(10, 62,),(82, 22,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
