// Cara untuk mmebuat Object pada javascript
// 1. Object Literal - Problem: tidak efektif untuk objek yang banyak.

// let mahasiswa1 = {
//     nama: 'Tharreq',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }
// }

// let mahasiswa2 = {
//     nama: 'Reysa',
//     energi: 25,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }
// }

//---

// 2. Function Declaration

// const methodMahasiswa = {
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     },
//     main: function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`)
//     },
//     tidur: function(jam){
//         this.energi += jam*2;
//         console.log(`Halo ${this.nama}, selamat tidur!`)
//     }
// }

// function Mahasiswa(nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let tharreq = Mahasiswa('Tharreq', 10);
// let reysa = Mahasiswa('Reysa', 20);

//---

// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;

//     // return mahasiswa;
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat main!`;
// }

// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam*2;
//     return `Halo ${this.nama}, selamat tidur!`;
// }

// let tharreq = new Mahasiswa('Tharreq', 10);

//---

// versi Class
class Mahasiswa{
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }

    main(jam){
        this.energi -= jam;
        return `Halo ${this.nama}, selamat main!`;
    }

    tidur(jam){
        this.energi += jam*2;
        return `Halo ${this.nama}, selamat tidur!`;
    }
}

// let tharreq = new Mahasiswa('Tharreq', 10);
// let reysa = new Mahasiswa('Reysa', 5);

//---

// 3. Constructor Function
// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }

//     this.main = function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`)
//     }

// }

// let Tharreq = new Mahasiswa('Tharreq', 10);
// let Reysa = new Mahasiswa('Reysa', 20);


//---

// 4. Object .create()