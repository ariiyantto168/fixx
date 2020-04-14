/**
  Square Number
  Diberikan sebuah function squareNumber dimana menerima inputan berupa angka.
  Function ini akan mengembalikan array multidimensi angka x angka yang isi value
  dari array multidimensi tersebut menyerupai `board snakes and ladders`
  Contoh 1:
  input: 3
  output:
      [
        [7, 8, 9],
        [6, 5, 4],
        [1, 2, 3]
      ]
  Contoh 2:
  input: 4
  output:
      [
        [ 16, 15, 14, 13 ],
        [ 9, 10, 11, 12 ],
        [ 8, 7, 6, 5 ],
        [ 1, 2, 3, 4 ]
      ]
NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'
 - NILAI FULL(100) AKAN DIBERIKAN JIKA BERHASIL MENYELESAIKAN KASUS DIATAS
 - NILAI 80 AKAN DIBERIKAN JIKA value angka di dalam array tersebut tidak persis
   menyerupai snakes and ladders TAPI angka 1 harus tetap berada di kolom paling bawah!
   CONTOH:
     [
       [ 13, 14, 15, 16 ],
       [ 9, 10, 11, 12 ],
       [ 5, 6, 7, 8 ],
       [ 1, 2, 3, 4 ]
     ]
**/
function squareNumber(num) {
    if (num < 3) {
        return 'Minimal input adalah 3'
    }
    else {
        hasil = []
        var angka = 1;

        if (num % 2 == 1) {
            for (var i = 0; i < num; i++) {
                temp = []
                for (var j = 0; j < num; j++) {
                    temp.push(angka)
                    angka++
                }
                hasil.push(temp)
            }
    
            for (var a = 1; a < hasil.length; a++) {
                for (var b = 0; b < a; b++) {
                    if (hasil[a][0] > hasil[b][0]) {
                        var temp = hasil[a]
                        hasil[a] = hasil[b]
                        hasil[b] = temp
                    }
                }
            }
    
            for (var h = 0; h < hasil.length; h++) {
                if (h % 2 == 1) {
                    for (var j = 1; j < hasil[h].length; j++) {
                        for (var k = 0; k < j; k++) {
                            if (hasil[h][j] > hasil[h][k]) {
                                var tempo = hasil[h][j]
                                hasil[h][j] = hasil[h][k]
                                hasil[h][k] = tempo
                            }
                        }
                    }
                }
            }
        }

        else {
            for (var i = 0; i < num; i++) {
                temp = []
                for (var j = 0; j < num; j++) {
                    temp.push(angka)
                    angka++
                }
                hasil.push(temp)
            }

            for (var a = 1; a < hasil.length; a++) {
                for (var b = 0; b < a; b++) {
                    if (hasil[a][0] > hasil[b][0]) {
                        var temp = hasil[a]
                        hasil[a] = hasil[b]
                        hasil[b] = temp
                    }
                }
            }

            for (var h = 0; h < hasil.length; h++) {
                if (h % 2 == 0) {
                    for (var j = 1; j < hasil[h].length; j++) {
                        for (var k = 0; k < j; k++) {
                            if (hasil[h][j] > hasil[h][k]) {
                                var tempo = hasil[h][j]
                                hasil[h][j] = hasil[h][k]
                                hasil[h][k] = tempo
                            }
                        }
                    }
                }
            }
        }
        return hasil
    }
}
console.log(squareNumber(3));
// [ [ 7, 8, 9 ], [ 6, 5, 4 ], [ 1, 2, 3 ] ]
console.log(squareNumber(4));
// // // [ [ 16, 15, 14, 13 ],
// // //   [ 9, 10, 11, 12 ],
// // //   [ 8, 7, 6, 5 ],
// // //   [ 1, 2, 3, 4 ] ]
console.log(squareNumber(5));
// // [ [ 21, 22, 23, 24, 25 ],
// //   [ 20, 19, 18, 17, 16 ],
// //   [ 11, 12, 13, 14, 15 ],
// //   [ 10, 9, 8, 7, 6 ],
// //   [ 1, 2, 3, 4, 5 ] ]
console.log(squareNumber(2)); // Minimal input adalah 3