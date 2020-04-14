/**
  Diberikan sebuah function hitungSaya yang menerima sebuah parameter array of string.
  Function ini akan me-return object literal dimana isi dari object tersebut berisi
  jumlah karakter pada array of string
  Contoh:
  input: [ 'fadhil', 'ismail', 'budi' ]
  output:
    {
      a: 2,
      b: 1,
      d: 2,
      f: 1,
      h: 1,
      i: 4,
      l: 2,
      m: 1,
      s: 1,
      u: 1
    }
**/
/**
 * 
 * 
**/
function hitungSaya(nama) {
    var hasilArray = [];
    var hasil = {};
    var abjad = 'abcdefghijklmnopqrstuvwxyz';
    for (var a = 0; a < abjad.length; a++) {
        for (var i = 0; i < nama.length; i++) {
            for (var j = 0; j < nama[i].length; j++) {
                if (abjad[a] == nama[i][j]) {
                    if (hasil[nama[i][j]] === undefined) {
                        hasil[nama[i][j]] = 0
                    }
                    hasil[nama[i][j]] += 1
                }
            }
        }
    }
    hasilArray.push(hasil);
    return hasilArray;
}
  console.log(hitungSaya(['fadhil', 'ismail', 'budi', 'untung']));
 /**
 * a: 2,
 * b: 1,
 * d: 2,
 * f: 1,
 * h: 1,
 * i: 4,
 * l: 2,
 * m: 1,
 * n: 2,
 * s: 1,
 * u: 3,
**/