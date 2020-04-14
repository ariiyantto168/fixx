/*
di data structure, yang harus student achieve:
- forming sebuah array berisikan object
- bisa mengakses isi terdalam dari array berisikan object
- bisa melakukan operasi filtering / grouping data
*/

/*
---------------
Students Report
---------------
PROBLEM
=======
Diberikan sebuah function bernama getReport.
Function akan menerima sebuah parameter array of object dengan format:
[
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  ...
]
Data di atas merupakan campuran seluruh nilai student dari kelas manapun.
Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:
[
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  ...
]
Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
Standard kelulusan adalah minimum 70.
*/

function getReport(studentGrades) {
    let result = [];
    
    for (let i = 0; i < grades1.length; i++) {
      let adaKelas = false;
      for (let j = 0; j < result.length; j++) {
        if (grades1[i].classCode === result[j].classCode) {
          adaKelas = true;
        }
      }
      
      
      if (!adaKelas) {
        let obj = {};
        obj.classCode = grades1[i].classCode;
        obj.passed = [];
        obj.failed = [];
        result.push(obj);
      }
  
      if (grades1[i].score >= 70) {
        for (let j = 0; j < result.length; j++) {
          if (result[j].classCode == grades1[i].classCode) {
            result[j].passed.push(grades1[i].name);
          }
        }
      } else {
        for (let j = 0; j < result.length; j++) {
          if (result[j].classCode == grades1[i].classCode) {
            result[j].failed.push(grades1[i].name);
          }
        }
      }
    }
  
  
    return result;  
  }
  
  var grades1 = [
    { name: 'John', score: 80, classCode: 'A' },
    { name: 'Mike', score: 60, classCode: 'B' },
    { name: 'Budi', score: 70, classCode: 'C' },
    { name: 'Siti', score: 50, classCode: 'A' },
    { name: 'Aaron', score: 10, classCode: 'A' },
    { name: 'Arthur', score: 10, classCode: 'C' },
    { name: 'Osass', score: 10, classCode: 'B' },
    { name: 'Yolo', score: 90, classCode: 'C' },
  ];
  
  console.log(getReport(grades1));
  
  /*
  [
    { classCode: 'A', passed: [ 'John' ], failed: [ 'Siti', 'Aaron' ] },
    { classCode: 'B', passed: [], failed: [ 'Mike', 'Osass' ] },
    { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur' ] },
  ]
  */
  