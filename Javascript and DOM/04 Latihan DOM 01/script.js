//Change Color
const tombolUbahWarna = document.getElementById('tombolUbahWarna');
tombolUbahWarna.onclick = function() {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda')
}


// Random Button
const newRandomButton = document.createElement('button');
const textRandomButton = document.createTextNode('Acak warna');

newRandomButton.appendChild(textRandomButton);
newRandomButton.setAttribute('type', 'button');

tombolUbahWarna.after(newRandomButton);

newRandomButton.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


// Progaram dengan Slider
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
    sMerah.value;
});

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
    sMerah.value;
});

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
    sMerah.value;
});


//Change Color based on Mouse Position
document.body.addEventListener('mousemove', function(event) {
    // posisi mouse
    // event.clientX
    // ukuran browser
    // window.innerWidth

    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',' + 100 + ')'
});