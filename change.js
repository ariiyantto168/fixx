/**
  Diberikan sebuah function change dimana menerima inputan berupa number dan karakter.
  Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
  proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS) TAPI
  alih-alih menuliskan value angka kamu akan menuliskan simbol/karakter dengan syarat sebagai berikut:
  - jika value merupakan bilangan angka maka diganti menjadi karakter 'o'
  - jika value merupakan karakter maka diganti menjadi karakter 'x'
  - jika value merupakan simbol '@#$%^&*' di ganti dengan 'y'
  -  
  Contoh 1:
  ==========
  input: 3
  proses:
          [
            [ 1, 'a', 'b' ],
            [ '#', 5, 4 ],
            [ '*', 'a', 9 ]
          ]
  output:
          [
            [o, x, x],
            [y, o, o],
            [y, x, o]
          ]

          angka = o
          huruf = x
          simbol = y
**/
function change(arr) {
    var hasil = []
    var huruf = 'abcdefghijklmnopqrstuvwxyz'
    var angka = '0123456789'
    var simbol = '@#$%^&*'

    for (var i = 0; i < arr.length; i++) {
        hasil[i] = []
        for (var j = 0; j < arr[i].length; j++) {
            ///ngecek di huruf
            for (var h = 0; h < huruf.length; h++) {
                if (arr[i][j] === huruf[h]) {
                    hasil[i].push('x')
                }
            }

            ///ngecek di angka
            for (var a = 0; a < angka.length; a++) {
                if (arr[i][j] == angka[a]) {
                    hasil[i].push('o')
                }
            }

            ///ngecek di simbol
            for (var s = 0; s < simbol.length; s++) {
                if (arr[i][j] === simbol[s]) {
                    hasil[i].push('y')
                }
            }
        }
    }

    return hasil
}
  console.log(change([
      ['a','a',4,5,'$'],
      ['@','$',5,'d','#'],
      [9,8,'g','t','%'],
  ]));
/**
 * [ 
 * [x,x,o,o,x],
 * [y,y,o,x,y],
 * [o,o,x,x,y]
 * 
 * ]
  **/
 console.log(change([
  ['a','$',4,'*','$'],
  ['@','$',5,'d','#'],
  [9,8,'g','t','%'],
]));
/**
* [ 
* [x,y,o,y,y],
* [y,y,o,x,y],
* [o,o,x,x,y]
* 
* ]
**/

console.log(change([
    ['a'],
  ]));