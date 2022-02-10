// UI 

const filterel = document.getElementById('search');
const resultel = document.getElementById('result');

const totalusers = 50;

const listitems = [];

async function getdata(){

    // fetch()
    // .then(res=>res.json())

    
    // Method 2

    const res = await fetch(`https://randomuser.me/api/?results=${totalusers}`);
    // console.log(res);

    // const data = await res.json();
    // console.log(data);

    // console.log(data.results);


    const {results} = await res.json();
    // console.log(results);

    resultel.innerText = '';


    results.forEach(user=>{
        // console.log(user);

        const li = document.createElement('li');    

        li.innerHTML= `
            <img src="${user.picture.large}" alt="${user.name.first}" />
            <div class="user-info">
            <h4>${user.name.title}. ${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city} , ${user.location.country}</p>
            </div>
        `;


        resultel.appendChild(li);

        listitems.push(li);

    });



    
}

getdata();

filterel.addEventListener('input',(e)=>filterdata(e.target.value));

function filterdata(search){
    // console.log(search);


    listitems.forEach(listitem=>{
        // console.log(listitem);

        if(listitem.innerText.toLocaleLowerCase().includes(search.toLowerCase())){
            listitem.classList.remove('hide');
        }else{
            listitem.classList.add('hide');
        }
    });

}