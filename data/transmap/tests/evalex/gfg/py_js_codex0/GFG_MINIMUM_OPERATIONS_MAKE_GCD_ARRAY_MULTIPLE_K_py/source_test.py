def test():
  "--- test function ---"
  param =[([3, 7, 27, 32, 36, 37, 44, 48, 50, 64, 86], 5, 10,),([- 22, 6, - 20, 60, - 74, 98, 52, - 22], 5, 4,),([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 23, 29,),([77, 11, 51, 11, 84, 79, 43, 12, 14, 50, 15, 6, 85, 32, 74, 49, 7, 2, 58], 9, 17,),([- 90, - 66, - 64, - 58, - 46, - 44, - 32, - 30, - 30, - 22, - 18, - 14, 12, 12, 18, 34, 44, 60, 70, 70, 74, 76, 86, 98, 98], 12, 22,),([1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1], 36, 31,),([9, 22, 27, 27, 37, 53, 53, 56, 63, 73, 76, 81, 82], 10, 11,),([- 46, 60, 80, 80, 42, - 98, 30, - 48, 4, - 32, - 78, 40, 52, 26, 88, 4, 22, 62, 88, - 94, 2, 0, 58, 38, 52, - 50, - 52, 58, - 62, 30, - 38, - 8, - 82, - 66], 18, 19,),([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 19, 22,),([42, 69, 93, 82, 8, 23, 73, 1, 77, 39, 49, 4, 95, 85], 12, 13,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()