const btn = document.getElementById('btn-menu')

btn.addEventListener('click',toggleMenu)
function toggleMenu(event){
  const menu = document.getElementById('menu')
  menu.classList.toggle('active')
}