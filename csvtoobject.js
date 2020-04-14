/**
CSV to Object
==============
Implementasikan function `csvToObject` untuk merubah string yang
diberikan menjadi sebuah object baru.
`csvToObject` menerima 2 parameter yaitu `keys` dan `values`
yang merupakan sebuah CSV (Comma Separated Values)
Keys & values di dalam object baru nantinya akan diambil dari kedua
parameter yang diberikan.
Contoh:
- Input: 'name,age', 'Aang,112'
  Output: { name: 'Aang', age: '112' }
- Input: 'title,description,content', 'Foobar,Foo and Bar,Foobar content'
  Output: { title: 'Foobar', description: 'Foo and Bar', content: 'Foobar Content' }
- Input: '', ''
  Output: { }
*/
function csvToObject (keys, values) {
    var hasil = {}
    var key = []
    var value = []
    var keyTemp = ''
    var valueTemp = ''

    if (keys == '' && values == '') {
        return hasil
    }

    ///ambil key
    for (var k = 0; k < keys.length; k++) {
        if (keys[k] == ',') {
            key.push(keyTemp)
            keyTemp = ''
        }
        else if (k == keys.length-1) {
            keyTemp += keys[k]
            key.push(keyTemp)
        }
        else {
            keyTemp += keys[k]
        }
    }

    ///ambil value
    for (var v = 0; v < values.length; v++) {
        if (values[v] == ',') {
            value.push(valueTemp)
            valueTemp = ''
        }
        else if (v == values.length-1) {
            valueTemp += values[v]
            value.push(valueTemp)
        }
        else {
            valueTemp += values[v]
        }
    }

    for (var h = 0; h < key.length; h++) {
        hasil[key[h]] = value[h]
    }

    return hasil
}
  console.log(csvToObject('name,phoneNumber', 'Dimitri,+666123654'));
  // { name: 'Dimitri', phoneNumber: '+666123654' }
  console.log(csvToObject('firstName,lastName,nationality', 'Sergei,Dragunov,Russia'));
  // { firstName: 'Sergei', lastName: 'Dragunov', nationality: 'Russia' }
  console.log(csvToObject('', ''));
  // { }

  ///3 soal total waktu 30 menit