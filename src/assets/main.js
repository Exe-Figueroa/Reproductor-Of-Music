const barrita = document.querySelector('.progressbar-barra');
let width = 0;
const interval = setInterval(() => {
  if (width >= 100) {
    clearInterval(interval);
  } else {
    width++;
    barrita.style.width = `${width}%`;
  }
}, 1000);