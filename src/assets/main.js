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