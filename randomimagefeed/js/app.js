// UI
const container = document.querySelector('.container');

const url = 'https://source.unsplash.com/random/';
const rows = 10;

for(let i = 0; i < rows * 3; i++){
	const img = document.createElement('img');
	img.src = `${url}${getrandomsize()}`;
	// console.log(img);

	container.appendChild(img);
}

function getrandomnum(){
	return Math.floor(Math.random() * 10) + 300;
}

// console.log(getrandomnum());

function getrandomsize(){
    return `${getrandomnum()}x${getrandomnum()}`;
}

console.log(getrandomsize());
