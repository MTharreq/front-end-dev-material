// let mahasiswa = ['Muhammad Tharreq', 'Hilmy Aziz', 'Zaidan Luthfi'];

// //Function Expression
// let jumlahHuruf = mahasiswa.map(function (nama){
//     return nama.length;
// });
// console.log(jumlahHuruf)

// //---

// //Arrow Function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

//---

// //Arrow Function return Object
// let jumlahHuruf = mahasiswa.map(nama => ({ nama, jumlahHuruf: nama.length }));
// console.table(jumlahHuruf);

//---

//this pada Arrow Function

// // Constructor Function
// const Mahasiswa = function(){
//     this.nama = 'Tharreq';
//     this.umur = 33;
//     this.sayHello = function(){
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const tharreq = new Mahasiswa();

//---

// // Arrow Function (ERROR)
// const Mahasiswa = function(){
//     this.nama = 'Tharreq';
//     this.umur = 33;
//     this.sayHello () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// const tharreq = new Mahasiswa();

//---

const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
})