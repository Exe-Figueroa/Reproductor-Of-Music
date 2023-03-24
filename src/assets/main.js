const slider = document.querySelector('#slider');
let arraySongs = document.querySelectorAll('.song-icon-container');
let ultimaCancion = arraySongs[arraySongs.length - 1];
const btnLeft = document.querySelector('.btn-left');
const btnrigth = document.querySelector('.btn-rigth');
slider.insertAdjacentElement('afterbegin', ultimaCancion);
let topicCounter = 0;

/**Acá creo el array que va a contener el  */
const arraySongsName = [
    {
        name: 'High Hopes',
        artists: 'Panic at the Disco'
    },
    {
        name: 'Payphone',
        artists: 'Maroon 5 & Wiz Khalifa'
    },
    {
        name: 'Lose Yourself',
        artists: 'Eminem'
    },
    {
        name: 'Past Life',
        artists: 'Trevor Daniel & Selena Gomez'
    }
]
/**Acá creo la función para poder cambiar al siguiente tema y también para volver al anterior */
let songDescription = document.querySelector('.description-song-container')
function colocarTexto(){
    const songDescription1 = `
        <span class="name-song">
            ${arraySongsName[topicCounter].name}
        </span>
        <span class="description-song">
            ${arraySongsName[topicCounter].artists}
        </span>
    `
    songDescription.innerHTML = songDescription1
}

const next=()=>{
    let primerCanción = document.querySelectorAll('.song-icon-container')[0];
    slider.style.marginLeft = '-142%';
    slider.style.transition = 'all 0.3s ease';
    setTimeout(()=>{
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', primerCanción);
        slider.style.marginLeft = '-71%'
    },100);
    if (topicCounter >=0 && topicCounter < 3){
        topicCounter++
    } else {
        topicCounter = 0
    }
    colocarTexto();
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
    topicCounter--
    colocarTexto();
}

btnrigth.addEventListener('click', next);
btnLeft.addEventListener('click', back);
/**Acá hago lo del crecimiento de la barrita */

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


