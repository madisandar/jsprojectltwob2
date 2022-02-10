// UI
const searchel = document.querySelector('.search'),
       inputel = document.querySelector('.input'),
       btnel = document.querySelector('.btn');


btnel.addEventListener('click',()=>{
    // console.log('hay');

    searchel.classList.toggle('active');

    // for ready cursor
    inputel.focus();
})