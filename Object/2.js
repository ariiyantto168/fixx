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
  //your code here
  let obj = {};
  let kamus = 'abcdefghijklmnopqrstuvwxyz';

  for (i = 0; i < kamus.length; i++) {
    for (k = 0; k < nama.length; k++) {
      for (l = 0; l < nama[k].length; l++) {
        if (kamus[i] === nama[k][l]) {
          if (obj[kamus[i]] === undefined) {
            obj[kamus[i]] = 0;
          }
          obj[kamus[i]] += 1;
        }
      }
    }
  }

  console.log(obj);
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
