function getTimeFromSeconds (segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    });
}

// console.log(getTimeFromSeconds(10));

const relogio = document.querySelector('.relogio');
// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
// const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);    
}

document.addEventListener('click', function(event){
    const element = event.target;
    
    if (element.classList.contains('zerar')) {
        relogio.classList.add('zerado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }

    if (element.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        relogio.classList.remove('zerado');
        clearInterval(timer);
        iniciaRelogio();
    }

    if (element.classList.contains('pausar')) {
        relogio.classList.add('pausado');
        clearInterval(timer);
    }
});

// iniciar.addEventListener('click', function(event) {
//    relogio.classList.remove('pausado');
//    relogio.classList.remove('zerado');
//    clearInterval(timer);
//    iniciaRelogio();
// });

// pausar.addEventListener('click', function(event) {
//    relogio.classList.add('pausado');
//    clearInterval(timer);
// });

// zerar.addEventListener('click', function(event) {
//    relogio.classList.add('zerado');
//   clearInterval(timer);
//   relogio.innerHTML = '00:00:00';
//    segundos = 0;
// });