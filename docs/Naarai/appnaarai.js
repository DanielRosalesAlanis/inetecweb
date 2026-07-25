// Esperamos a que todo el documento HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Saludo Dinámico en la Portada
    const elementoSaludo = document.getElementById('saludo');
    const horaActual = new Date().getHours();
    let mensajeSaludo = '';

    if (horaActual >= 6 && horaActual < 12) {
        mensajeSaludo = '¡Buenos días! Bienvenidos a mi Portafolio';
    } else if (horaActual >= 12 && horaActual < 19) {
        mensajeSaludo = '¡Buenas tardes! Bienvenidos a mi Portafolio';
    } else {
        mensajeSaludo = '¡Buenas noches! Bienvenidos a mi Portafolio';
    }
    
    // Reemplaza el texto del H1 con el saludo correspondiente
    elementoSaludo.textContent = mensajeSaludo;


    // 2. Animación de las tarjetas al hacer scroll (Intersection Observer)
    const tarjetas = document.querySelectorAll('.tarjeta');
    
    const configuracionObserver = {
        threshold: 0.1 // Se activa cuando el 10% de la tarjeta es visible
    };

    const observarTarjetas = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                // Cuando aparece en pantalla, cambiamos la opacidad y posición
                entrada.target.style.opacity = '1';
                entrada.target.style.transform = 'translateY(0)';
            }
        });
    }, configuracionObserver);

    tarjetas.forEach(tarjeta => {
        // Estado inicial de las tarjetas (ocultas y ligeramente desplazadas hacia abajo)
        tarjeta.style.opacity = '0';
        tarjeta.style.transform = 'translateY(30px)';
        tarjeta.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        
        // Empezamos a observar cada tarjeta
        observarTarjetas.observe(tarjeta);
    });
});