var x = prompt("combien de voyelles dans un mot ")
function nbrcar(letr, mot) {
  mot = mot.split('')
  var nbrft = 0
  for (var i = 0; i < mot.length; i++) {
    if (letr == mot[i])
      nbrft++
  }
  return nbrft
}
console.log(" la lettre e est répété", nbrcar('e', x), "fois")
console.log(" la lettre o est répété", nbrcar('o', x), "fois")
console.log(" la lettre u  est répété", nbrcar('u', x), "fois")
console.log(" la lettre i est répété", nbrcar('i', x), "fois")
console.log(" la lettre y est répété", nbrcar('y', x), "fois")
console.log(" la lettre a est répété", nbrcar('a', x), "fois")
function compteMots(s){
  var words = s.split(' ');
  return words.length;
}
var dadi = prompt("combien de mots dans une phrases")
console.log(compteMots(dadi) , "mots dans cette phrase")
var f = prompt("nombre de lettres")
console.log("nombre de caractére est " , f.length)


