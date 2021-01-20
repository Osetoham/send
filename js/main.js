const dropDown = document.querySelector('.js-dropdown')
const arrow =document.querySelector('.arrow')
let showMenu = false;

dropDown.addEventListener('click', toggleMenu)

function toggleMenu(){
    console.log("emitted click event")
    if(!showMenu){
        dropDown.classList.add('open');
        arrow.classList.add('open')
        showMenu = true;
    }else{
        dropDown.classList.remove('open');
        arrow.classList.remove('open')
        showMenu = false;
    }
}