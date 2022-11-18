const btnMobile = document.querySelector('#btn-mobile');

function toggleMenu(event){
  if(event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('nav');
  // nav.classList.add('active') pra adicionar ou remove para remover
  nav.classList.toggle('active')
  const active = nav.classList.contains('active')
  //toglle adiciona class caso não tenha e remove caso tenha 
  event.currentTarget.setAttribute('aria-expanded', active)
  if(active){
    event.currentTarget.setAttribute('aria-label','fechar Menu');
  }else{
    event.currentTarget.setAttribute('aria-label','Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
// mobile emula um evento de tuch e demora 300 ms para fazelo 
//ao clicar vai acionar a função 
