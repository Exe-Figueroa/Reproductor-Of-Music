const slider = document.querySelector('#slider');
let arraySongs = document.querySelectorAll('.song-icon-container');
let ultimaCancion = arraySongs[arraySongs.length - 1];
const btnLeft = document.querySelector('.btn-left');
const btnrigth = document.querySelector('.btn-rigth');
slider.insertAdjacentElement('afterbegin', ultimaCancion);

const next=()=>{
    let primerCanción = document.querySelectorAll('.song-icon-container')[0];
    slider.style.marginLeft = '-142%';
    slider.style.transition = 'all 0.3s ease';
    setTimeout(()=>{
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', primerCanción);
        slider.style.marginLeft = '-71%'
    },100)
}
const back=()=>{
    let primerCanción = document.querySelectorAll('.song-icon-container')[arraySongs.length -1]
    slider.style.marginLeft = '-72%';
    slider.style.transition = 'all 0.3s ease';
    setTimeout(()=>{
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', primerCanción);
        slider.style.marginLeft = '-150.5%'
    },100)
}

btnrigth.addEventListener('click', next);
btnLeft.addEventListener('click', back);


// margin-left: -70%;

































const barrita = document.querySelector('.progressbar-barra');
let progreso = 0;
const interval = setInterval(() => {
    if (progreso >= 100) {
        clearInterval(interval);
    } else {
        progreso++;
        barrita.style.width = `${progreso}%`;
    }
}, 1000);