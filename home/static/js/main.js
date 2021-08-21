const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const listItems = document.querySelectorAll('.menu_nav_item')
let showMenu = false;


menuBtn.addEventListener('click',()=>{
    if(!showMenu)
    {
        burger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        listItems.forEach(item=> item.classList.add('open'));
        showMenu = true;
    }
    else{
        burger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        listItems.forEach(item=> item.classList.remove('open'));
        showMenu =false;
    }
})



const toggle = document.querySelector("#toggle");
toggle.addEventListener("click", modeSwitch);

let isLight = true;

function modeSwitch() {
  isLight = !isLight;
  let root = document.body;
  
  isLight ? toggle.innerText = "🌞" : toggle.innerText = "🌚";
  
  root.classList.toggle("lightMode");
}

