/**
 * Elementalist Battle.
 * 
 * Function akan menerima input berupa object player dan array berisi serangan yang akan dihadapi player tersebut. 
 * Seorang player memiliki nama, health, dan element. 
 * -health : merupakan nyawa dari pemain, dari  0 - 100
 * -element: merupakan elemen dari pemain
 * 
 * Terdapat 3 jenis element: wind, fire, dan water.
 * Tiap elemen memiliki DAMAGE yang sama yaitu 25
 * Berikut ini aturan untuk elemen tersebut:
 * 
 * -fire bisa memberikan damage kepada wind    fire > wind
 * -water bisa memberikan damage fire          water > fire
 * -wind bisa memberikan damage water          wind > water
 * 
 * damage
 * Selain 3 itu, tidak ada efeknya, misal untuk kasus water:
 * water tidak bisa memberikan damage kepada wind
 * water tidak bisa memberikan damage kepada water
 * 
 * -Jika health player sudah 0, maka keluarkan output "Player `name` meninggal"
 * -Jika health player masih ada, maka output object player tersebut
 * 
 * RULES:
 *  - Tuliskan Pseudocode kalian, No pseudocode = 0 !!!
 *  - Dilarang menggunakan .filter .reduce .in
 */

 /**
  * PSEUDOCODE
  * INPUT "player" with object and "attacks" wtih array
  * SET "hasil" to object that have key "name" IS player.name, "health" IS player.health, "element" IS player.element
  * 
  * FOR "i" = 0 until "i" = attacks.length-1
  *     IF "player".element IS 'wind' THEN
  *         IF "attacks"[i] IS 'fire' THEN "hasil".health is minus by 25
  *         ELSE "hasil".health is minus by 0
  *         ENDIF
  *     ELSE IF "player".element IS 'water' THEN
  *         IF "attacks"[i] IS 'wind' THEN "hasil".health is minus by 25
  *         ELSE "hasil".health is minus by 0
  *         ENDIF
  *     ELSE
  *         IF "attacks"[i] IS 'water' THEN "hasil".health is minus by 25
  *         ELSE "hasil".health is minus by 0
  *         ENDIF
  *     ENDIF
  * ENDFOR
  * 
  * IF "hasil".health > 0 THEN DISPLAY "hasil"
  * ELSE DISPLAY 'Player "hasil".name meninggal'
  * ENDIF
  */
function elementBattle(player, attacks) {
    hasil = {
        name: player.name,
        health : player.health,
        element: player.element
    }    

    for (var i = 0; i < attacks.length; i++) {
        if (player.element == 'wind') {
            if (attacks[i] == 'fire') {
                hasil.health -= 25
            }
            else {
                hasil.health -= 0
            }
        }
        else if (player.element == 'water') {
            if (attacks[i] == 'wind') {
                hasil.health -= 25
            }
            else {
                hasil.health -= 0
            }
        }
        else {
            if (attacks[i] == 'water') {
                hasil.health -= 25
            }
            else {
                hasil.health -= 0
            }
        }
    }

    if (hasil.health > 0) {
        return hasil;
    }
    else {
        return `Player ${hasil.name} meninggal`
    }
}
  console.log(elementBattle({
    name: "Aang",
    health: 100,
    element: "wind"
  }, ["water", "fire", "fire", "wind"]));
  //{ name: 'Aang', health: 50, element: 'wind' }
  
  
  console.log(elementBattle({
    name: 'Zuko', 
    element: "fire",
    health: 100
  }, ['water','water','water','water','water']))
  // Player Zuko meninggal

  console.log(elementBattle({
    name: 'Katara', 
    element: "water", 
    health: 25
  }, ['water','fire', 'fire', 'wind', 'fire']))
  // Player Katara meninggal