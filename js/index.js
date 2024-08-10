let lastScrollTop = 0;
let timer;

window.addEventListener('scroll', function () {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;
    
    if (currentScroll <= 0) {
        document.getElementById('navbar').style.top = '0';
        clearTimeout(timer); // Detenemos el temporizador si el usuario está en la parte superior
    } else if (currentScroll < lastScrollTop) {
        // Usuario está desplazándose hacia arriba
        document.getElementById('navbar').style.top = '0';
        clearTimeout(timer); // Detenemos el temporizador y reiniciamos
        timer = setTimeout(() => {
            document.getElementById('navbar').style.top = '-100px';
        }, 2000); // Muestra el menú por 2 segundos después de desplazar hacia arriba
    } else {
        // Usuario está desplazándose hacia abajo
        document.getElementById('navbar').style.top = '-100px';
        clearTimeout(timer); // Detenemos el temporizador si el usuario está desplazándose hacia abajo
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
