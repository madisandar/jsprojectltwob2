// UI
const labels = document.querySelectorAll('label');
const codes = document.querySelectorAll('.code');
const btn = document.querySelector('.btn');
const time1 = document.getElementById('time1');
const time2 = document.getElementById('time2');
const time3 = document.getElementById('time3');
const likes = document.querySelector('.likes');
const loves = document.querySelector('.loves');
const angrys = document.querySelector('.angrys');
// console.log(labels);

labels.forEach(label=>{
    // console.log(label);
    // console.log(label.innerText);
    // console.log(label.innerText.split());
    // console.log(label.innerText.split(''));

    label.innerHTML = label.innerText
               .split('')
               .map((letter,index)=>
               `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
               .join('');

});

codes.forEach((code,index)=>{
	// console.log(code);
	codes[0].focus();
	code.addEventListener('keydown',(e)=>{

		if(e.key >= 0 && e.key <= 9){
			// console.log(e.key);
			codes[index].value='';

			if(index !== 5){
				// codes[index+1].focus();
				setTimeout(()=>codes[index+1].focus(),10);
			}
		}else{
			if(e.key === "Backspace"){

				if(index !== 0){
				setTimeout(()=>codes[index-1].focus(),10);
			}
			}
		}
	})
});

btn.addEventListener('click',()=>{
	// console.log('hay');
  
	
	
});

let timesclicked = 0;
let clicktimes = 0;

likes.addEventListener('click',(e)=>{
	// console.log('hay');
	createlike(e);
});

const createlike = (e)=>{
	const like = document.createElement('i');
	like.classList.add('fas');
	like.classList.add('fa-thumbs-up');

	const cx = e.clientX;
	const cy = e.clientY;

	const offsettop = e.target.offsetTop;
	const offsetleft = e.target.offsetLeft;

	const xinside = cx - offsetleft;
	const yinside = cy - offsettop;
   
   likes.style.top =`${yinside}px`;
   likes.style.left =`${xinside}px`;
	likes.appendChild(like);
	console.log(likes);
	// clicktimes++;
	time1.innerText = ++clicktimes;

	setTimeout(()=>{
		like.remove();
		time1.innerText = --clicktimes;
	}
		,1000);
}

loves.addEventListener('click',(e)=>{

	if(clicktimes === 0){
		clicktimes = new Date().getTime();
	}else{
		if(new Date().getTime() - clicktimes < 1000){
			createlove(e);
			clicktimes = 0;
		}else{
			clicktimes = new Date().getTime();
		}
	}
});

function createlove(e){
	// console.log('love');
	const love = document.createElement('i');
	love.classList.add('fas');
	love.classList.add('fa-heart');

	const cx = e.clientX;
	const cy = e.clientY;

	const offsettop = e.target.offsetTop;
	const offsetleft = e.target.offsetLeft;

	const xinside = cx - offsetleft;
	const yinside = cy - offsettop;
   
   loves.style.top =`${yinside}px`;
   loves.style.left =`${xinside}px`;

   loves.appendChild(love);
   time2.innerText = ++timesclicked;

   setTimeout(()=>{
		love.remove();
		time2.innerText = --timesclicked;
	}
		,1000);
}

