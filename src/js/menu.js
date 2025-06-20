//Config para o menu mobile
const openMenu = document.getElementById('openMenu'); //btn para abrir o menu
const closeMenu = document.getElementById('closeMenu'); // btn para fechar o menu
const menu = document.getElementById('menu') // navbar

openMenu.addEventListener('click', () =>{ // verifica se o btn openMenu possue a classe right
    menu.classList.remove('right-[-100%]'); // se tiver, remove
    menu.classList.add('right-0'); // se não tiver, adiciona
});

//mesma coisa, só que ao contrário
closeMenu.addEventListener('click', () =>{ 
    menu.classList.remove('right-0');
    menu.classList.add('right-[-100%]');
});


//Config animacao para o menu desktop
const itens = document.querySelectorAll(".menu-item"); //seleciona todos os links

itens.forEach(item => { // adiciona evento de click em todos os links
    item.addEventListener('click', () =>{
       itens.forEach(link =>{
        link.classList.remove('border-b-3', 'border-ttblue')
       })

       item.classList.add('border-b-3', 'border-ttblue'); // adiciona a classe no item clicado

    })
})