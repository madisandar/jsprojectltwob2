// UI
const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');

let activeslide = 0;

function  setbgbody(){
     body.style.backgroundImage = slides[activeslide].style.backgroundImage;
    }

setbgbody();

// remove active slide
function setactiveslide(){
    // remove slide from slidecontainer
    slides.forEach(slide=>slide.classList.remove('active'));
  
    // add slide to slidecontainer
    slides[activeslide].classList.add('active');
}

rightbtn.addEventListener('click',()=>{
    // console.log('I am right');
    activeslide++;

    if(activeslide > slides.length -1){
           activeslide = 0;
    }
    
    // console.log(activeslide);

    setbgbody();
    setactiveslide();
});

leftbtn.addEventListener('click',()=>{
    // console.log('i am left');
    activeslide--;

    if(activeslide < 0){
        activeslide = slides.length-1;
    }

      // console.log(activeslide);
      
    setbgbody();
    setactiveslide();

  
});