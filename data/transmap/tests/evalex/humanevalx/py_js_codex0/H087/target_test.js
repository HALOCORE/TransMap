//TESTED_PROGRAM

if(
    JSON.stringify(
      get_row(
        [
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 1, 6],
          [1, 2, 3, 4, 5, 1],
        ],
        1
      )
    ) !== JSON.stringify([[0, 0], [1, 4], [1, 0], [2, 5], [2, 0]])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(
      get_row(
        [
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
        ],
        2
      )
    ) !== JSON.stringify([[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1]])
  )
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(
      get_row(
        [
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 1, 3, 4, 5, 6],
          [1, 2, 1, 4, 5, 6],
          [1, 2, 3, 1, 5, 6],
          [1, 2, 3, 4, 1, 6],
          [1, 2, 3, 4, 5, 1],
        ],
        1
      )
    ) !==
    JSON.stringify([
      [0, 0],
      [1, 0],
      [2, 1],
      [2, 0],
      [3, 2],
      [3, 0],
      [4, 3],
      [4, 0],
      [5, 4],
      [5, 0],
      [6, 5],
      [6, 0],
    ])
  )
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(get_row([], 1)) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");
if(JSON.stringify(get_row([[1]], 2)) !== JSON.stringify([]))
  throw Error("MyLogError MISMATCH");
if(
    JSON.stringify(get_row([[], [1], [1, 2, 3]], 3)) !== JSON.stringify([[2, 2]])
  )
  throw Error("MyLogError MISMATCH");