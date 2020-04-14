/* 
menentukan jarak antara dari character o dan x 
pada array multidimensi, preview : 
[
  ['','','o',''],
  ['','','',''],
  ['','','',''],
  ['x','','','']
]
[EXAMPLE]
console.log(jarak([
  ['','','o',''],
  ['','','',''],
  ['','','',''],
  ['x','','','']
]))
step by step solving :
[
    ['', '', 'o',''],
    ['', '', '1',''],
    ['', '', '2',''],
    ['x5','4','3','']
]
jika kita perhatikan urutan angka - angka diatas, maka jarak antara 
o dan x adalah 5. dimana posisi x dihitung sebagai 1 langkah 
maka output : 5
*/
function jarak(board) {
    var posO = [];
    var posX = [];
    var hasil = 0;

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'o') {
                posO.push(i,j);
            }
            else if (board[i][j] === 'x') {
                posX.push(i,j);
            }
        }
    }

    hasil = Math.abs(posO[0]-posX[0]) + Math.abs(posO[1]-posX[1]);
    return hasil;
}
  console.log( jarak([
     ['','','o',''],
     ['','','',''],
     ['','','',''],
     ['x','','','']
  ])) // 5
  console.log( jarak([
     ['','','',''],
     ['','x','',''],
     ['','','',''],
     ['o','','','']
  ])) // 3
  console.log( jarak([
    ['','','','o'],
    ['','','',''],
    ['','','',''],
    ['x','','','']
  ])) // 6
  console.log( jarak([
    ['','','','x'],
    ['','','',''],
    ['','','',''],
    ['','','','o']
  ])) // 3