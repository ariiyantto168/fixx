/*
================
Format Uang (KBBI)
================
[INSTRUCTIONS]
formatUang adalah sebuah function yang menerima satu parameter berupa number.
function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
Rp1.500,00
[RULE]
- Wajib menggunakan Pseudocode/Algoritma
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!
[EXAMPLE]
formatUang(2000)
output: Rp2.000,00
    PSEUDOCODE
    SET "number" with any value
    SET "hasil" wtih string 'Rp'
    SET "numStr" TO String("number")

    FOR "i" = 0 - "i" < "numStr".length
        IF "numStr".length < 4 THEN "hasil" is plus by "numStr[i]"
        ELSE IF "numStr".length IS 4 THEN
            IF "i" IS 1 THEN "hasil" is plus by '.'
            ENDIF
            "hasil" is plus by "numStr[i]"
        ELSE IF "numStr".length IS 6 THEN
            IF "i" IS 3 THEN "hasil" is plus by '.'
            ENDIF
            "hasil" is plus by "numStr[i]"
        ELSE IF "numStr".length IS 7 THEN
            IF "i" IS 1 OR 4 THEN "hasil" is plus by '.'
            ENDIF
            "hasil" is plus by "numStr[i]"
        ENDIF
    ENDFOR

    "hasil" is plus by ',00'
    DISPLAy "hasil"

*/
function formatUang(number) {
    var hasil = 'Rp'
    var numStr = String(number)

    for (var i = 0; i < numStr.length; i++) {
        if (numStr.length < 4) {
            hasil += numStr[i]
        }
        else if (numStr.length == 4) {
            if (i == 1) {
                hasil += '.'
            }
            hasil += numStr[i]
        }
        else if (numStr.length == 6) {
            if (i == 3) {
                hasil += '.'
            }
            hasil += numStr[i]
        }
        else if (numStr.length == 7) {
            if (i == 1 || i == 4) {
                hasil += '.'
            }
            hasil += numStr[i]
        }
    }

    hasil += ',00'

    return hasil
}
  console.log(formatUang(7500)); // Rp7.500,00
  console.log(formatUang(250)); // Rp250,00
  console.log(formatUang(100000)); // Rp100.000,00
  console.log(formatUang(1000000)); // Rp1.000.000,00
  console.log(formatUang(4999999)); // Rp4.999.999,00

///waktu 17 menit 55 detik