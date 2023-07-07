// //Event Handler (CARA LAMA)
// //--Inline HTML attribute (TIDAK DISARANKAN)
// const p3 = document.querySelector('.p3');
// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'lightblue';
// }

// //--Element method
// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'lightblue';
// }
// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;

// //addEventListener()
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item baru');
//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
// });


//---

//event akan ditimpa
const p3 = document.querySelector('.p3');
// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function() {
//     p3.style.color = 'red';
// }

//---

//event tidak akan menimpa
p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'white';
});
p3.addEventListener('click', function() {
    p3.style.color = 'red';
});