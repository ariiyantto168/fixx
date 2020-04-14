/*
Tranpose the Matrix
================
Description: matrixTranspose adalah sebuah fungsi untuk menukar posisi baris dan kolom
              dari sebuah matriks
Examples:
1. input = [
  [1, 2],
  [3, 4],
  [5, 6]
]
  output = [
    [1, 3, 5],
    [2, 4, 6]
  ]
2. input = [
    [1, 2]
]
  output = [
    [1],
    [2]
  ]
*/
function matrixTranspose(matriks) {
    hasil = []
    
    for (var i = 0; i < matriks[0].length; i++) {
        temp = []

        for (var j = 0; j < matriks.length; j++) {
            temp.push(matriks[j][i])
        }

        hasil.push(temp)
    }

    return hasil
}
  console.log(matrixTranspose([[1, 2], [3, 4], [5, 6]]))
  /*
    input:
    [
      [1, 2],
      [3, 4],
      [5, 6]
    ]
    output :
    [
      [1, 3, 5],
      [2, 4, 6]
    ]
  */
  console.log(matrixTranspose([[1, 2], [3, 4]]));
  /*
    input:
    [
      [1, 2],
      [3, 4]
    ]
    output :
    [
      [1, 3],
      [2, 4]
    ]
  */
  console.log(matrixTranspose([[1, 2]]))
  /*
    input:
    [
      [1, 2]  
    ]
    output :
    [
      [1],
      [2]
    ]
  */
  console.log(matrixTranspose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
  /*
    input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
      output = [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
      ]
  */