// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'Tharreq'

// creation phase pada Global Context
//  nama var = undefined
// nama function = fn()
// hoisting - menaikan semua var/function ke baris paling atas
// window = global object
// this = window

//execution phase

//---

console.log(sayHello());

var nama = 'Tharreq';
var umur = 33;

function sayHello(){
    return `Halo, nama saya ${nama}, saya ${umur} tahun`;
}