const time = new Date
const horas = time.getHours();
const minutos = time.getMinutes();
const segundos = time. getSeconds();

const divHora = document.querySelector('.timeH');
const divMin = document.querySelector('.timeM');
const divsecond = document.querySelector('.timeS');
divHora.innerHTML=horas;
divMin.innerHTML=minutos;
divsecond.innerHTML=segundos;
