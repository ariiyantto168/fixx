/**
================
Hitung Kembalian
================
buatlah function yang akan menghitung nominal dan jumlah pecahan pengembalian transaksi.
function tersebut akan menerima 2 parameter parameter pertama adalah nilai pembayaran, 
parameter kedua adalah nilai yang harus dibayarkan. 
Code dibuat se dinamis mungkin untuk menghandle apabila ketersediaan uang nominal dan jumlahnya
diubah-ubah dan asumsi uang kembaliannya selalu cukup dengan jumlah ketersediaan uang
1. kurangi bayar - harga
2. hitung kembalian dalam pecahan 5000/20000/50000/10000
*/
function hitungKembalian(bayar, harga){
    var kembalian = bayar - harga
    hasil = {}

    if (harga > bayar) {
        return 'Uang tidak cukup'
    }
    else if (kembalian == 0) {
        return hasil
    }
    else {
        maks100 = 5;
        maks50 = 5;
        while (kembalian > 0) {
            if (kembalian >= 100000 && maks100 > 0) {
                if (hasil['100000'] === undefined) {
                    hasil['100000'] = 0
                }
                hasil['100000']++
                kembalian -= 100000
                maks100--
            }
            else if (kembalian >= 50000 && maks50 > 0) {
                if (hasil['50000'] === undefined) {
                    hasil['50000'] = 0
                }
                hasil['50000']++
                kembalian -= 50000
                maks50--
            }
            else if (kembalian >= 20000) {
                if (hasil['20000'] === undefined) {
                    hasil['20000'] = 0
                }
                hasil['20000']++
                kembalian -= 20000
            }
            else if (kembalian >= 10000) {
                if (hasil['10000'] === undefined) {
                    hasil['10000'] = 0
                }
                hasil['10000']++
                kembalian -= 10000
            }
            else if (kembalian >= 5000) {
                if (hasil['5000'] === undefined) {
                    hasil['5000'] = 0
                }
                hasil['5000']++
                kembalian -= 5000
            }
        }
        return hasil
    }
}
// Test Case
console.log(hitungKembalian(1000000, 755000));
/*
output
  { 
    '5000': 1, 
    '20000': 2, 
    '100000': 2 
  }
*/
// Test Case
console.log(hitungKembalian(40000, 35000));
/*
output
  { '5000': 1 }
*/
// Test Case 3
console.log(hitungKembalian(920000, 80000));
/*
output
  { 
    '10000': 1, 
    '20000': 4, 
    '50000': 5, 
    '100000': 5 
  }
*/
// TEST CASE 4
console.log(hitungKembalian(50000,50000)); // {}
//TEST CASE 5
console.log(hitungKembalian(50000,500000)); // Uang tidak cukup