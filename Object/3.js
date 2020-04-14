function kelompokSiswa(siswa) {
  //implement here
  //---
  //rata-rata
  let total = 0;
  for (i = 0; i < siswa.length; i++) {
    total += siswa[i].score;
  }
​
  //pembagian
  let avg = total / siswa.length;
  let obj = {};
  let above = [];
  let under = [];
  for (j = 0; j < siswa.length; j++) {
    if (siswa[j].score >= avg) {
      above.push(siswa[j].name);
    } else {
      under.push(siswa[j].name);
    }
  }
​
  if (above.length) {
    obj.above = above;
  }
​
  if (under.length) {
    obj.under = under;
  }
​
  return obj;
}
//test-cases
console.log(
  kelompokSiswa([
    { name: 'Dimitri', score: 90 },
    { name: 'Sergei', score: 70 },
    { name: 'Alisa', score: 50 },
    { name: 'Viktor', score: 65 },
    { name: 'Vladimir', score: 40 },
    { name: 'Alexei', score: 70 },
  ])
);
// {
// above: [ 'Dimitri', 'Sergei', 'Viktor', 'Alexei' ],
// under: [ 'Alisa', 'Vladimir' ]
// }
console.log(
  kelompokSiswa([
    { name: 'Foo', score: 100 },
    { name: 'Bar', score: 100 },
    { name: 'Baz', score: 100 },
  ])
);
// { above: [ 'Foo', 'Bar', 'Baz' ] }
console.log(kelompokSiswa([]));
//{}