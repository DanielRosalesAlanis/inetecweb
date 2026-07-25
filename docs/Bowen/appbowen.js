/**
 * Archivo: appbowen.js
 * Funcionalidades: Animaciones de scroll, manejo de navbar y utilidades interactivas.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Cambio de estilo de la barra de navegación al hacer scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Efecto Reveal (Aparición suave de elementos al hacer scroll)
    const reveals = document.querySelectorAll('.reveal');

    const revealFunction = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    // Ejecutar una vez al cargar para los elementos que ya están en pantalla
    revealFunction();
    // Ejecutar cada vez que se hace scroll
    window.addEventListener('scroll', revealFunction);

    // 3. Manejo del formulario de contacto (Simulación)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Aquí iría la lógica para enviar el correo (ej. usando Formspree, EmailJS, etc.)
            alert("¡Gracias por tu mensaje! Me pondré en contacto contigo muy pronto.");
            contactForm.reset();
        });
    }

    // 4. Interacción para el botón de "Tijerasos"
    const btnTijerasos = document.querySelector('#tijerasos .btn-secondary');
    if (btnTijerasos) {
        btnTijerasos.addEventListener('click', () => {
            alert("Bienvenido a Tijerasos. Nuestro catálogo de servicios de jardinería y cortes especializados estará disponible próximamente.");
        });
    }
});