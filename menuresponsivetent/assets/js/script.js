const btn = document.getElementById('btn-menu')
// const validar= valid();

btn.addEventListener('click',toggleMenu)
window.addEventListener('resize',()=>{
  const menu = document.getElementById('menu')
  if(window.innerWidth<=600){
    menu.classList.remove('active')
  }
});
function toggleMenu(event){
  const menu = document.getElementById('menu')
  menu.classList.toggle('active')
}

//atualemnte toda vez q eu entro e saio  ta indo e saidno o menu
//eu quero q ele altere de x para = quando sair e entrar 