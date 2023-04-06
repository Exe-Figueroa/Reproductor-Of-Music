const slider = document.querySelector('#slider');
let arraySongs = document.querySelectorAll('.song-icon-container');
let ultimaCancion = arraySongs[arraySongs.length - 1];
const btnLeft = document.querySelector('.btn-left');
const btnrigth = document.querySelector('.btn-rigth');
slider.insertAdjacentElement('afterbegin', ultimaCancion);
let topicCounter = 0;

const time = document.querySelector('.time-song');
const timeContainer = document.querySelector('.time-container');
/**Acá creo el array que va a contener el  */
const arraySongsName = [
    {
        name: 'High Hopes',
        artists: 'Panic at the Disco',
        src: '../songs/highHopes.mp3'
    },
    {
        name: 'Payphone',
        artists: 'Maroon 5 & Wiz Khalifa',
        src: '../songs/payphone.mp3'
    },
    {
        name: 'Lose Yourself',
        artists: 'Eminem',
        src: '../songs/eminem.mp3'
    },
    {
        name: 'Past Life',
        artists: 'Trevor Daniel & Selena Gomez',
        src: '../songs/pastLife.mp3'
    }
]
/**Acá creo la función para poder cambiar al siguiente tema y también para volver al anterior */
let songDescription = document.querySelector('.description-song-container')
let mySong = document.querySelector('audio.audio')
function colocarTexto(){
    const songDescription1 = `
        <span class="name-song">
            ${arraySongsName[topicCounter].name}
        </span>
        <span class="description-song">
            ${arraySongsName[topicCounter].artists}
        </span>
    `
    mySong.src = `${arraySongsName[topicCounter].src}`
    mySong.load()
    mySong.play()
    songDescription.innerHTML = songDescription1

    mySong.addEventListener('canplay',()=>{
        mySong.play
    })
}
function next(){
    let primerCanción = document.querySelectorAll('.song-icon-container')[0];
    slider.style.marginLeft = '-151%';
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
function back(){
    let arraySongs = document.querySelectorAll('.song-icon-container');
    let ultimaCancion = arraySongs[arraySongs.length - 1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 0.3s ease';
    setTimeout(()=>{
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', ultimaCancion);
        slider.style.marginLeft = '-71%'
    },100)
    if (topicCounter >0 && topicCounter<4){
        topicCounter--
    }else {
        topicCounter=3
    }
    colocarTexto();
}

btnLeft.addEventListener('click', back);
btnrigth.addEventListener('click', next);
//Acá agrego las funciones a los botones del reproductor
const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-back');
const btnPlay = document.querySelector('.btn-play');
btnPlay.addEventListener('click', ()=>{
    if(mySong.paused){
        mySong.play();
    }else{
        mySong.pause();
    }
})
btnBack.addEventListener('click', back);
btnNext.addEventListener('click', next);
//Acá se realizan las funciones para la barrita y su porcentaje

function obtenerPorcentajeAudio() {
    const audio = document.querySelector('audio'); 
    const duracion = audio.duration; 
    const tiempoActual = audio.currentTime; 
    const porcentaje = (tiempoActual / duracion) * 100; 
    const porcentajeActual = porcentaje.toFixed(2); 

    const barrita = document.querySelector('.progressbar-barra');
    barrita.style.width = `${porcentajeActual}%`;
    // Hacer algo con los valores obtenidos
    console.log(`El porcentaje actual es ${porcentajeActual}%`);
}
const barrita = document.querySelector('.progressbar-barra');
let progreso = 0;
const interval = setInterval(() => {
if (progreso >= 100) {
    progreso = 0;
    barrita.style.width = `${progreso}%`;
} else {
    progreso++;
    barrita.style.width = `${progreso}%`;
    obtenerPorcentajeAudio(); 
}
}, 1000);
