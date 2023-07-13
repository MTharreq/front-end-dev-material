// const nama = 'Muhammad Tharreq';
// const umur = 20;

// function coba(strings, ...values){
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);


//---

//highlight
const nama = 'Muhammad Tharreq';
const umur = 20;

function highlight(strings, ...values){
    return strings.reduce((result, str, i) => `${result}${str}<span class="h1">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun.`;
document.body.innerHTML = str;