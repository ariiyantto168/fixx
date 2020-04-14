/* 
Function mostFrequentItem adalah function yang menerima satu parameter berupa array of string.
Function akan menghitung setiap jumlah item di dalam array tersebut.
Function akan mereturn nilai berupa string dengan pola:
=> nama barang(3), nama barang kedua(5), nama barang ketiga(10).
Kemudian, setiap barang yang ditampilkan harus berurut jumlahnya dari yang terkecil ke terbesar.
[CONTOH]
input: ['asus', 'asus', 'samsung', 'iphone', 'iphone', 'asus', 'asus']));
output: 'samsung(1), iphone(2) , asus(4)'
*/
function mostFrequentItem(arr){
    var hasil = [];
    var temp = []
    var cetak = '';

    for (var i = 0; i < arr.length; i++) {
        var cek = false

        for (var h = 0; h < hasil.length; h++) {
            if (hasil[h][0] === arr[i]) {
                hasil[h][1]++
                cek = true
            }
        }

        if (!cek) {
            hasil[h] = [];
            hasil[h].push(arr[i],1)
        }
    }
    // console.log(hasil[i])
    // return hasil

    ///sort array hasil
    for (var a = 1; a < hasil.length; a++) {
        for (var b = 0; b < a; b++) {
            if (hasil[a][1] < hasil[b][1]) {
                var temp = hasil[a]
                hasil[a] = hasil[b]
                hasil[b] = temp
            }
        }
    }

    for (var j = 0; j < hasil.length; j++){
        var tempCetak = `${hasil[j][0]}(${hasil[j][1]})`
        if (j == hasil.length-1) {
            cetak += tempCetak
        }
        else {
            cetak += `${tempCetak}, `
        }
    }
    temp.push(cetak)
    return temp
    // return cetak
}
console.log(mostFrequentItem(['asus', 'asus', 'samsung', 'iphone', 'iphone', 'asus', 'asus'])); // 'samsung(1), iphone(2) , asus(4)'
console.log(mostFrequentItem(['9', 'b', 'b', 'c', '9', '9', 'b', '9', '2', '2'])); // 'c(1) , 2(2) ,b(3) ,9(4)'
console.log(mostFrequentItem(['book', 'laptop', 'iPod'])); // 'book(1), laptop(1), iPod(1)'
