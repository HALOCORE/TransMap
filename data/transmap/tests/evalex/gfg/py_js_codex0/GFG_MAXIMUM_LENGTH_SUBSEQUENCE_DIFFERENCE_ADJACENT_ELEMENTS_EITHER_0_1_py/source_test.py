def test():
  "--- test function ---"
  param =[([4, 5, 9, 31, 31, 37, 41, 55, 56, 61, 79, 81, 89, 93], 12,),([- 76, 96, - 68, - 16, 22, - 24, - 24, 6, 98, - 82, 54, - 80, 46, 0, 0, - 50], 15,),([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 29,),([97, 93, 43, 51, 15, 33, 13, 96, 39, 89, 78, 25, 45, 6, 64, 54], 13,),([- 98, - 78, - 72, - 70, - 68, - 58, - 56, - 54, - 46, - 44, - 38, - 34, - 30, - 24, - 18, - 16, - 14, - 12, 2, 6, 8, 8, 10, 10, 16, 24, 26, 28, 40, 42, 44, 56, 58, 62, 66, 66, 78, 86], 19,),([1, 1, 0, 1, 0, 0], 3,),([7, 8, 10, 11, 12, 15, 16, 16, 19, 21, 23, 23, 23, 25, 26, 35, 38, 43, 46, 47, 51, 52, 53, 57, 60, 61, 66, 67, 69, 74, 75, 81, 83, 84, 88, 92, 94, 98, 98, 99], 34,),([14, - 40], 1,),([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 38,),([59, 70, 53], 1,)]
  for i, parameters_set in enumerate(param):
    idx = i
    result = f_gold(* parameters_set)
"-----------------"
#TESTED_PROGRAM"-----------------"
test()
