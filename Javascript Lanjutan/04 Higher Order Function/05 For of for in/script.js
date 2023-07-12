// for..of
// array
// const mhs = ['Tharreq', 'Reysa', 'Gigih'];

// for(const m of mhs){
//     console.log(m);
// }

// ---

// // string

// const nama = 'Tharreq';
// for( const n of nama ){
//     console.log(n);
// }


// ---

// const mhs = ['Tharreq', 'Reysa', 'Gigih'];

// mhs.forEach((m,i) => {
//     console.log(`${m} adalah mahasiswa ke=${i+1}`);
// });

// ---

// //NodeList
// const liNama = document.querySelectorAll('.nama');
// // console.log(liNama);
// // liNama.forEach(n => console.log(n.textContent));
// for(n of liNama){
//     console.log(n.innerHTML);
// }


// ---

// // arguments
// function jumlahAngka(){
//     let jumlah = 0;
//     for(a of arguments){
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahAngka(1,2,3,4,5,6));

// ---

//for..in
const mhs = {
    nama: 'Tharreq',
    umur: 33,
    email: 'mtharreq@gmail.com'
}

for( m in mhs ){
    console.log(m);
}