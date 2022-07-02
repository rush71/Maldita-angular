const mainMenu = document.querySelector('.mainMenu')
const menu = document.querySelector('.menu')
const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openMenu')

openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)

function show (){
  mainMenu.style.display = 'flex'
  mainMenu.style.top = '0'
  mainMenu.style.background ='blue'
  menu.style.fontSize = '30px'
}

function close (){
  mainMenu.style.top = '-100%'
  mainMenu.style.background ='inherit'
  menu.style.fontSize = '1.2rem;'
}