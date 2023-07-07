// DOM SELECTION
// document.getElementById() -> element
const judul = document.getElementById('judul');

judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Hai'

// document.getElementsByTagName() -> HTML Collection (Array)
const p = document.getElementsByTagName('p');

for(let i=0;i<p.length;i++){
    p[i].style.backgroundColor = 'lightblue';
}

// document.getElementsByClassName() -> HTML Collection (Array)
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dari javascript'

//document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

//document.querySelectorAll() -> NodeList
const p2 = document.querySelectorAll('p');
p[2].style.backgroundColor = 'yellow';