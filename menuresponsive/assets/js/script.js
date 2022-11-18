const btnMobile = document.querySelector('#btn-mobile');

function toggleMenu(){
  const nav = document.getElementById('nav');
  // nav.classList.add('active') pra adicionar ou remove para remover
  nav.classList.toggle('active')
  //toglle adiciona class caso não tenha e remove caso tenha 
}

btnMobile.addEventListener('click', toggleMenu);
//ao clicar vai acionar a função 
