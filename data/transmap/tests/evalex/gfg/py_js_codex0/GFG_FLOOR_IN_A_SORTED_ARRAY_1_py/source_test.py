def test():
  "--- test function ---"
  param =[([5, 11, 20, 42, 42, 55, 58, 98, 99], 5, 7, 6,),([50, - 90, - 38, - 46, - 10, - 22, - 66, 72, - 52, 38, 90, 34, - 12, - 44, - 6, 0, - 20, - 38, 86, 26, 64, - 24, 40, 90, - 26, - 2, - 28, 12, 22, - 14], 26, 28, 23,),([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], 11, 9, 18,),([69, 28, 68, 98, 24, 67, 86, 2, 18, 22, 44, 77, 52, 62, 24, 46], 15, 11, 13,),([- 96, - 94, - 88, - 84, - 68, - 60, - 52, - 52, - 42, - 34, - 32, - 16, - 12, - 6, - 6, - 4, - 2, 0, 16, 18, 38, 58, 70, 72, 76, 78, 90, 92, 98], 22, 27, 20,),([0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0], 24, 15, 26,),([1, 6, 7, 9, 10, 11, 19, 19, 22, 22, 26, 34, 36, 37, 37, 38, 39, 40, 49, 54, 60, 62, 65, 67, 71, 76, 78, 79, 82, 82, 89, 95, 97], 22, 26, 25,),([76, - 32, - 98, - 18, - 80, 74, - 22, - 82, 40, - 64, 58, - 18, - 64, 34, - 44, - 82, - 46, 62, - 80, - 76, 32, 44, - 32, 98, - 26, 62, 16, 86, - 52, - 72, - 90, - 30, 6], 28, 31, 24,),([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 28, 29, 30,),([81, 69, 15, 52, 49, 54, 18, 92, 33, 21, 91, 21, 5, 25, 77, 92, 26, 58, 72, 55, 76, 18, 13, 59, 9, 12, 31, 24, 36, 33, 71, 87, 55, 19, 42, 25], 35, 19, 33,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
