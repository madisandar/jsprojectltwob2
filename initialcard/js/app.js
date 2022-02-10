// UI
const panels = document.querySelectorAll('.panel');
// console.log(panels);

panels.forEach(panel=>{
    // console.log(panel);

    panel.addEventListener('click',()=>{
        // console.log('hay');

        removeactivepreclass();

        panel.classList.add('active');
    });
});

function removeactivepreclass(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    }); 
}