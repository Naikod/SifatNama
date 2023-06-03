var prompt = require("prompt-sync")()
var color = require("colors")
let sifat = ["Penasaran", "Sabar", "Terbuka", "Murah hati", "Percaya diri", "Baik hati", "Pemaaf", "Ambisius", "Penuh kasih", "Penyayang", "Kreatif", "Cerdas", "Jujur", "Dermawan", "Mandiri", "Sabar", "Bertanggung jawab", "Penuh semangat", "Disiplin", "Antusias", "Ramah", "Konsisten", "Berani", "Religius", "Fleksibel", "Rendah hati", "Terorganisir", "Ramah tamah", "Menghargai keberagaman", "Kritis", "Berjiwa pemimpin", "Inovatif", "Adil", "Berempati", "Tekun", "Sopan", "Kemandirian", "Gigih", "Kolaboratif", "Semangat juang", "Bersemangat", "Santun", "Penyabar", "Teliti", "Ramah lingkungan", "Sportif", "Berpikir analitis", "Humoris", "Berpikiran terbuka", "Optimis"]

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let txt = []
let storednama = []
let storedsifatnama = []
function GetSifat(nama){
  if(storednama.indexOf(nama.toUpperCase())==-1){
    storednama.push(nama.toUpperCase())
    let sifatnya = `${sifat[getRandomNumber(0,49)]}, ${sifat[getRandomNumber(0,49)]}, Dan ${sifat[getRandomNumber(0,49)]}.` 
    storedsifatnama.push(sifatnya)
    switch(getRandomNumber(0,6)) {
      case 0:
        txt+=`${nama.toUpperCase()}\t\t${sifatnya}\n`.bold.red
        break;
      case 1:
        txt+=`${nama.toUpperCase()}\t\t${sifatnya}\n`.bold.green
        break;
      case 2:
        txt+=`${nama.toUpperCase()}\t\t${sifatnya}\n`.bold.yellow
        break;
      case 3:
        txt+=`${nama.toUpperCase()}\t\t${sifatnya}\n`.bold.blue
        break;
      case 4:
        txt+=`${nama.toUpperCase()}\t\t${sifatnya}\n`.bold.cyan
        break;
      case 5:
        txt+=`${nama.toUpperCase()}\t\t${sifatnya}\n`.bold.magenta
        break;
      case 6:
        txt+=`${nama.toUpperCase()}\t\t${sifatnya}\n`.bold.white
        break;
    }
    return txt
  } else {
    txt+=`${nama.toUpperCase()}\t\t${storedsifatnama[storednama.indexOf(nama.toUpperCase())]}\n`
    return txt
  }
}

while(true){
  let names = prompt("Nama: ")
  console.clear()
  console.log(GetSifat(names))
}

/*

  README:

    Program akan membutuhkan data sebuah nama, jika nama tidak ada didalam array, maka program akan membuat data baru berupa nama yang disimpan di storednama dan sifat yang disimpan di storedsifatnama.
  dan jika nama sudah ada di dalam array, maka array txt akan mengambil data di dalam stored variable menggunakan indexof

*/
