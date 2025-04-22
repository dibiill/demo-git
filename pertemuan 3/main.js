let nama = 'Dina' //String 
let umur = 20 //Int
umur = 22
let tinggiBadan = 153.9 //titik as koma (float)
let BeratBadan = 50
let pacar = 1

// if (pacar == null){
//     pacar = 'Jeno'
// } else {
//     pacar = 'Bukan Jeno'
// }

// let fakultas = [
//     "FKIP",
//     "FASILKOM", 
//     "FT",
//    "FIKES"
// ]

switch(pacar) {
    case 1:
    pacar = 'punya 1'
    break
    case 2:
    pacar = 'punya 2'
    break
    default:
    pacar = 'belum ada'
}

let uang = 1000000000
let uangku = 2000000000
const uangmu = uang + uangku;

alert(`Uang yang kamu miliki ${uang} dan kamu punya tabungan ${uangku}, jadi  total uang kamu ${uangmu}`)
console.log(nama)
alert (`Nama Gue ${nama}, Berat Badan gue ${BeratBadan} kg, Usia Gue ${umur} tahun, Tinggi Gue ${tinggiBadan} cm, dan pacar gue ${pacar}`)
// console.log(fakultas[0])
// fakultas[2] = "FH";
// console.log(fakultas [2])
// fakultas[1] = 25;
// console.log(fakultas [1])