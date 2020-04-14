/*
PROBLEM
=======
Bilangan prima adalah sebuah bilangan dimana hanya bisa habis dibagi oleh angka 1 dan angka itu sendiri.
Contoh:
7 adalah bilangan prima, karena hanya habis dibagi angka 1 dan 11.
22 bukan bilangan prima, karena habis dibagi 1, 2, 11, dan 22.
Deret bilangan prima
2, 3, 5, 7, 11, 13, 17, 19, 23, dst
Buatlah sebuah function getPrime dimana menerima sebuah parameter bertipe Number.
Function tersebut mengembalikan/me-return array kumpulan deret bilangan prima sampai parameter tersebut.
Contoh 1:
input: 10
output: [ 2, 3, 5, 7 ]
//karena di-range angka 10 hanya bilangan 2, 3, 5 dan 7 saja yang merupakan bilangan prima
Contoh 2:
input: 44
output: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
// karena di-range angka 44 hanya bilangan di atas saja yang merupakan bilangan prima
RULES:
- wajib membuat algoritma/pseudocode untuk program getPrime
note: pastikan tidak menggunakan sintaks javascript, tapi fokus ke logika
REMINDER ABOUT PSEUDOCODE
=========================
Contoh Pseudocode yang Kurang Tepat (tidak ada hubungan dengan soal):
var num
for i = 0 , i < 8, i++
  if i = 5
    num++
Contoh Pseudocode yang Benar (tidak ada hubungan dengan soal):
STORE num with any value
WHILE i < 8
  IF i equals to 5
    ADD num by 1

    PSEUDOCODE
    SET "num" with array of number
    SET "hasil" with empty array

    FOR "i" = 2 - "i" <= num
        SET "tes" TO "i"
        SET "flag" TO 'true'

        FOR "j" = 2 - "j" < "tes"
            IF "tes" mod by "j" IS 0 THEN "flag" IS 'false'
            ENDIF
        ENDFOR

        IF "flag" IS 'true' THEN PUSH "tes" TO "hasil"
        ENDIF
    ENDFOR

    DISPLAY "hasil"
*/
function getPrime(num) {
    var hasil = []

    for (var i = 2; i <= num; i++) {
        var tes = i
        var flag = true

        for (var j = 2; j < tes; j++) {
            if (tes % j == 0) {
                flag = false
            }
        }

        if (flag) {
            hasil.push(tes)
        }
    }
    
    return hasil
}
  console.log(getPrime(10)); // [ 2, 3, 5, 7 ]
  console.log(getPrime(23)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
  console.log(getPrime(44)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
  console.log(getPrime(1)); // []
  console.log(getPrime(5)); // []