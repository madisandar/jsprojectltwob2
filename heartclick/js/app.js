// UI
const times = document.getElementById('times');
const loveme = document.querySelector('.loveme');

let timesclicked = 0;

let clicktimes = 0;

// dbl click

loveme.addEventListener('click',(e)=>{
    // console.log('hay');

    if(clicktimes === 0){
        clicktimes = new Date().getTime();
        // console.log(clicktimes);
    }else{
        
        if(new Date().getTime() - clicktimes < 1000){
           
            // console.log('I am dblclick');
            createheart(e);
            clicktimes = 0;
        }else{
            clicktimes = new Date().getTime();
        }
    }
});

const createheart = (e)=>{

    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    // console.log(heart);
    const cx = e.clientX;
    const cy =e.clientY;

    const offsetTop = e.target.offsetTop;
    const offsetLeft = e.target.offsetLeft;

    const xinside = cx-offsetLeft;
    const yinside = cy-offsetTop;

    heart.style.top = `${yinside}px`;
    heart.style.left = `${xinside}px`;

    loveme.appendChild(heart);
     
    // timesclicked+=1;
    // timesclicked++;
    // times.textContent = timesclicked;

    times.textContent = ++timesclicked;

    setTimeout(()=>heart.remove(),1000);
}

