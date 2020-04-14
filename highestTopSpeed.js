/**
Highest Top Speed
=================
Implementasikan function `highestTopSpeed` untuk mencari
top speed yang paling tinggi dari data yang diberikan.
Function ini akan menerima satu parameter yaitu `data`
yang memiliki tipe data string.
Di dalam string `data` terdapat nama orang dan top speed orang
tersebut. Tiap orang akan dipisah dengan tanda koma ','
Tugas kamu adalah untuk mencari top speed tertinggi dari
string yang telah diberikan
# Contoh I/O
Contoh input dan output bisa kamu lihat di test case
# Kondisi khusus
- Jika string kosong, maka tampilkan 'No data'
# Constraints
- DILARANG menggunakan built-in function .map, .filter, .reduce
- DILARANG menggunakan built-in object Math
- DILARANG menggunakan built-in function .sort
- DILARANG menggunakan built-in function .indexOf
*/
function highestTopSpeed(data) {
    var speed = []
    var hasil = ''
    var temp = ''
    var angka = '0123456789'

    for (var i = 0; i < data.length; i++) {
        for (var a = 0; a< angka.length; a++) {
            if (data[i] === angka[a]) {
                temp += data[i]
            }
        }

        if (data[i] === ' ') {
            speed.push(temp)
            temp = ''
        }
    }

    if (speed.length == 0) {
        return 'No data'
    }

    for (a = 1; a < speed.length; a++) {
        for (b =0; b <a; b++) {
            if (speed[a] > speed[b]) {
                var tukar = speed[a]
                speed[a] = speed[b]
                speed[b] = tukar
            }
        }
    }

    hasil = speed[0]
    return hasil
}
  console.log(highestTopSpeed('Nakazato:140 km/h,Ryosuke:180 km/h,Iketani:110 km/h'));
  // 180
  console.log(highestTopSpeed('Bunta:200 km/h,Takumi:180 km/h,Sudo:160 km/h'));
  // 200
  console.log(highestTopSpeed('Joshima:175 km/h,Hoshino:150 km/h,Inui:175 km/h'));
  // 175
  console.log(highestTopSpeed(''));
  // No data

  ///waktu pengerjaan 9 menit 3 detik