// Destructuring Variable/Assignment
// // Destructuring Array
// const perkenalan = ['Halo', 'nama', 'saya', 'MTharreq'];
// // const [salam, satu, dua, nama] = perkenalan;
// // skip items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

//---

// // swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);

// [a,b]=[b,a];
// console.log(a);
// console.log(b);

// ---

// // return value pada function
// function coba(){
//     return [1,2];
// }

// const [a, b] = coba();
// console.log(b);

// ---

// // rest parameter
// const [a, ...values] = [1,2,3,4,5];
// console.log(a);
// console.log(values);

// ---

// // Destructuring Object
// const mhs = {
//     nama: 'Muhammad Tharreq',
//     umur: 23
// }

// const { nama, umur } = mhs;
// console.log(nama);

//---

// //Assignment tanpa deklarasi object
// ({nama, umur}) = { nama: 'Muhammad Tharreq', umur: 23 };
// console.log(nama);

// ---

// // Assign ke variabel baru
// const mhs = {
//     nama: 'Muhammad Tharreq',
//     umur: 23
// }

// const { nama: n, umur:u } = mhs;
// console.log(n);

// ---

// // Memberikan Default Value
// const mhs = {
//     nama: 'Muhammad Tharreq',
//     umur: 23
// }

// const { nama, umur, email='mtharreq@gmail.com' } = mhs;
// console.log(nama);

// ---

// // Memberikan nilai default + assign ke variabel baru
// const mhs = {
//     nama: 'Muhammad Tharreq',
//     umur: 23
// }

// const { nama: n, umur: u, email: e = 'mtharreq@gmail.com' } = mhs;
// console.log(nama);

// ---

// // Menggunakan rest parameter
// const mhs = {
//     nama: 'Muhammad Tharreq',
//     umur: 23,
//     email: 'mtharreq@gmail.com'
// }

// const { nama, ...values } = mhs;
// console.log(nama);

// ---

// // Mengambil field pada object, setelah dikirm sebagai parameter untuk function
// const mhs = {
//     id: 123,
//     nama: 'Muhammad Tharreq',
//     umur: 23,
//     email: 'mtharreq@gmail.com'
// }

// function getIdMhs({ id }){
//     return id;
// }
// console.log(getIdMhs(mhs));

// ---

// BEDA VIDEO
// // Destructuring
// function kalkulasi(a,b){
//     return [a+b, a-b, b*b, a/b];
// }

// const [tambah, kurang, kali, bagi] = kalkulasi(2,3);
// console.log(tambah);
// console.log(kali);

// ---

// // using object
// function kalkulasi(a,b){
//     return {
//         tambah: a+b, 
//         kurang: a-b,
//         kali: b*b,
//         bagi: a/b
//     }
// }

// const {kurang, tambah, kali, bagi} = kalkulasi(2,3);
// console.log(tambah);
// console.log(kali);

// ---

// Destructuring function arguments
const mhs1 = {
    nama: 'Muhammad Tharreq',
    umur: 22,
    email: 'mtharreq@gmail.com'
}

function cetakMhs({nama, umur}){
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
}

console.log(cetakMhs(mhs1))