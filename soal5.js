  /**
 * ============================
 * Outstanding Students Finder
 * ============================
 *
 * Diberikan array berisi nilai livecode suatu kelas, carilah nilai rata-rata dari kelas tersebut, 
 * lalu carilah student yang mendapatkan nilai diatas rata-rata beserta nilainya.
 *
 * Function getStudents menerima 2 parameter, grades adalah array berisi nilai, dan names adalah array yang berisi
 * nama dari student-student tersebut.
 *
 * Panjang array grades dan names selalu sama, 
 * karena index merepresentasikan student ke - i dengan nama di names[i] dan nilai di grades[i].
 *
 * contoh 
 * nilai: [5, 7, 2, 9, 3, 4] -> rata-rata = 5
 * murid: ["aron", "raka", "fauzan", "rivan", "ulul", "ramadhan"] 
 * 
 * maka murid yang nilai nya di atas rata - rata adalah: 
 * ["raka", "rivan"]
 * 
 * RULES: 
 *  - WAJIB MENGGUNAKAN PSEUDOCODE
 *  - Dilarang menggunakan .reduce .map .filter .indexOf .set .includes
 * 
 * 
 * PSEUDOCODE
 * INPUT "grades" wtih array that have value student score, and "names" with array that have value students name
 * SET "jumlah" without any value
 * SET "hasil" wtih empty array
 * 
 * IF "grades".length IS 0 THEN DISPLAY 'grades should not be empty'
 * ELSE IF "grades".length IS 0 THEN DISPLAY 'student name should not be empty'
 * ELSE
 *   FOR "i" = 0 until "i" = "grades".length-1
 *      "jumlah" IS add by "grades"[i]
 *   ENDFOR
 * 
 *   SET "rerata" TO "jumlah" divide by "grades".lenght
 * 
 *   FOR "j" = 0 until "j" = grades.length-1
 *      IF "grades"[j] > rerata THEN PUSH "names"[j] TO "hasil"
 *      ENDIF
 *   ENDFOR
 * 
 *   DISPLAY "hasil"
 */
function getStudents(grades, names) {
    var jumlah = 0;
    var hasil = [];

    if (grades.length == 0) {
        return 'grades should not be empty'
    }
    else if (names.length == 0) {
        return 'student name should not be empty'
    }
    
    for (var i = 0; i < grades.length; i++) {
        jumlah += grades[i];
    }
    
    var rerata = jumlah / grades.length;

    for (var j = 0; j < grades.length; j++) {
        if(grades[j] > rerata) {
            hasil.push(names[j]);
        }
    }
    
    return hasil;
}

  var grades1 = [10, 9, 8, 7, 6, 8];
  var studentNames1 = ['Tony', 'Tifa', 'Cloud', 'Aerith', 'Stark', 'Asd'];
  console.log(getStudents(grades1,studentNames1));

  // getStudents(grades1,studentNames1);
  // console.log(getStudents(grades1, studentNames1));
  // [ 'Tony', 'Tifa' ]
      // console.log(names[i]);
  var grades2 = [3, 9, 4, 6];
  var studentNames2 = ['Aron', 'Rama', 'Gigih', 'Fauzan'];
  console.log(getStudents(grades2, studentNames2));
  // [ 'Rama', 'Fauzan' ]
  var grades3 = [];
  var studentNames3 = ["Rivan", "Raka", "Afif", "Gusti"];
  console.log(getStudents(grades3, studentNames3));
  // grades should not be empty
  var grades4 = [5, 3, 2, 10, 5];
  var studentNames4 = [];
  console.log(getStudents(grades4, studentNames4));
  // student name should not be empty