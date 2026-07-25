/*==========================================
    PORTAFOLIO DANIEL MILLAN GUTIERREZ
==========================================*/

// MENÚ RESPONSIVO

const menuMovil = document.getElementById("menuMovil");
const menu = document.getElementById("menu");

menuMovil.addEventListener("click", () => {

    menu.classList.toggle("activo");

});

// CERRAR MENÚ AL DAR CLIC EN UNA OPCIÓN

document.querySelectorAll("nav a").forEach(enlace => {

    enlace.addEventListener("click", () => {

        menu.classList.remove("activo");

    });

});

// BOTÓN SUBIR

const subir = document.getElementById("subir");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        subir.style.display = "block";

    } else {

        subir.style.display = "none";

    }

});

subir.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ANIMACIÓN AL HACER SCROLL

const elementos = document.querySelectorAll(
    ".card, .habilidad, .info, .evento"
);

function mostrarElementos() {

    const altoPantalla = window.innerHeight;

    elementos.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;

        if (posicion < altoPantalla - 100) {

            elemento.classList.add("mostrar");

        }

    });

}

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();

// EFECTO DE ESCRITURA EN EL TÍTULO

const titulo = document.querySelector(".texto h1");

const texto = titulo.innerText;

titulo.innerText = "";

let i = 0;

function escribir() {

    if (i < texto.length) {

        titulo.innerHTML += texto.charAt(i);

        i++;

        setTimeout(escribir, 70);

    }

}

window.addEventListener("load", escribir);

// CAMBIO DE COLOR DEL HEADER AL HACER SCROLL

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#081626";
        header.style.boxShadow = "0px 5px 15px rgba(0,0,0,.35)";

    } else {

        header.style.background = "#0b1f3a";
        header.style.boxShadow = "0px 3px 10px rgba(0,0,0,.20)";

    }

});

// EFECTO HOVER EN LAS TARJETAS

const tarjetas = document.querySelectorAll(
    ".card, .habilidad, .info"
);

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("mouseenter", () => {

        tarjeta.style.transition = ".3s";
        tarjeta.style.transform = "translateY(-10px) scale(1.03)";

    });

    tarjeta.addEventListener("mouseleave", () => {

        tarjeta.style.transform = "translateY(0px) scale(1)";

    });

});

// MENSAJE DE BIENVENIDA

window.onload = () => {

    escribir();

    console.log("=======================================");
    console.log(" Portafolio Académico");
    console.log(" Daniel Millan Gutierrez");
    console.log(" Técnico en Sistemas Digitales");
    console.log("=======================================");

};

// RESALTAR LA SECCIÓN ACTIVA EN EL MENÚ

const secciones = document.querySelectorAll("section");
const enlaces = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let actual = "";

    secciones.forEach(seccion => {

        const top = seccion.offsetTop - 150;
        const alto = seccion.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + alto) {

            actual = seccion.getAttribute("id");

        }

    });

    enlaces.forEach(link => {

        link.classList.remove("activo");

        if (link.getAttribute("href") === "#" + actual) {

            link.classList.add("activo");

        }

    });

});

// AÑO AUTOMÁTICO EN EL FOOTER

const footer = document.querySelector("footer p");

const año = new Date().getFullYear();

footer.innerHTML = `© ${año} Daniel Millan Gutierrez | Portafolio Académico`;