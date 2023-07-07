// //element.innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Tureeeeeeeq<em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div>hello world!<div>';

//---

// //element.style.<property>
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';

//---

//setAttribute()
const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name','tareq');

const a = document.querySelector('a')
a.setAttribute('id', 'link');

//---

//element.class
const p2 = document.querySelector('.p2');
p2.classList.item(2);

//---

//Manipulasi Node - Menambahkan paragraf baru dengan appendChild
// buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

// simpan tulisan kedalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

//---

//Manipulasi Node - Menambahkan list baru dengnan InsertBefore
const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('Item baru');

liBaru.appendChild(textLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)'); //ubah nilai indeks disini

ul.insertBefore(liBaru, li2);

//---

//Manipulasi Node - Remove Link
// const sectionA = document.getElementById('a'); //SUDAH ADA DI ATAS

const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);

//---

//Manipulasi Node - Replace Paragraf 4
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';
