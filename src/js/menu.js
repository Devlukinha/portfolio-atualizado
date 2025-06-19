const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu")

openMenu.addEventListener('click', () =>{
    menu.classList.remove('right-[-100%]');
    menu.classList.add('right-0');
});

closeMenu.addEventListener('click', () =>{
    menu.classList.remove('right-0');
    menu.classList.add('right-[-100%]');
})