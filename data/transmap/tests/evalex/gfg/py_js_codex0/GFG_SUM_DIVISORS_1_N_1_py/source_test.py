def test():
  "--- test function ---"
  param =[(73,),(41,),(36,),(28,),(49,),(24,),(85,),(59,),(82,),(40,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
