/* =========================================================
   PORTAFOLIO — Johan Kaleth
   Lógica de navegación estilo XMB (Cross Media Bar)
   ========================================================= */

// ---------- Contenido del portafolio ----------
// Edita aquí los textos, números y datos: todo el contenido vive en este objeto.
const DATA = {
  "inicio": [
    {
      title: "Bienvenido",
      tag: "INICIO",
      html: `
        <p class="detail-body">Hola, soy <strong>Johan Kaleth</strong>. Este es mi espacio de trabajo:
        compra y venta de videojuegos, consolas, y soporte de informática básica.</p>
        <p class="detail-body">Usa las flechas <strong>◀ ▶</strong> para moverte entre secciones y
        <strong>▲ ▼</strong> para ver las opciones de cada una, tal como en el menú de una PS3.</p>
      `
    }
  ],

  "sobre-mi": [
    {
      title: "Johan Kaleth",
      tag: "PERFIL",
      html: `
        <p class="detail-body">Me dedico a la <strong>compra y venta de videojuegos</strong> (físicos y
        digitales, consolas y accesorios) y ofrezco servicios de <strong>informática básica</strong>:
        formateo, instalación de programas, mantenimiento y asesoría para quien busca equipo o
        videojuegos en buen estado y a buen precio.</p>
        <p class="detail-body">Me gusta el trato directo y claro con cada cliente, y resolver rápido
        cualquier duda técnica.</p>
      `
    }
  ],

  "habilidades": [
    {
      title: "Compra y venta de videojuegos",
      html: `<p class="detail-body">Evalúo, compro y vendo videojuegos físicos y digitales para
        distintas consolas, cuidando siempre el estado y el precio justo para ambas partes.</p>`
    },
    {
      title: "Compra y venta de consolas",
      html: `<p class="detail-body">Revisión, compra y reventa de consolas (retro y actuales),
        verificando que funcionen correctamente antes de entregarlas.</p>`
    },
    {
      title: "Formateo e instalación de sistemas",
      html: `<p class="detail-body">Formateo de equipos, instalación de sistema operativo desde cero
        y configuración inicial para que la PC quede lista para usarse.</p>`
    },
    {
      title: "Instalación de programas y drivers",
      html: `<p class="detail-body">Instalación de software, controladores y programas esenciales,
        incluyendo solución de errores comunes de arranque o rendimiento.</p>`
    },
    {
      title: "Asesoría para compra de equipo",
      html: `<p class="detail-body">Orientación para elegir consola, PC o videojuego según el
        presupuesto y lo que realmente necesita el cliente.</p>`
    },
    {
      title: "Trato directo 🔥",
      html: `<p class="detail-body">Buena disposición para explicar, negociar y cerrar tratos claros:
        me proyecto directo con el cliente, sin vueltas.</p>`
    }
  ],

  "proyectos": [
    {
      title: "Venta de consolas restauradas",
      tag: "PROYECTO",
      html: `<p class="detail-body">Consolas de generaciones pasadas y actuales, revisadas y
        limpiadas, listas para jugar desde el primer día.</p>`
    },
    {
      title: "Compra-venta de videojuegos",
      tag: "PROYECTO",
      html: `<p class="detail-body">Catálogo rotativo de videojuegos físicos y digitales para
        distintas plataformas, con evaluación honesta de cada pieza.</p>`
    },
    {
      title: "Soporte técnico a domicilio",
      tag: "PROYECTO",
      html: `<p class="detail-body">Formateo, instalación de programas y mantenimiento básico de
        computadoras directamente en el domicilio del cliente.</p>`
    }
  ],

  "contacto": [
    {
      title: "WhatsApp",
      html: `<p class="detail-body">Escríbeme directo por WhatsApp:</p>
        <p class="detail-body"><a class="detail-link" href="https://wa.me/527776535444" target="_blank" rel="noopener">
        +52 777 653 5444</a></p>`
    },
    {
      title: "Correo electrónico",
      html: `<p class="detail-body">También puedes escribirme por correo:</p>
        <p class="detail-body"><a class="detail-link" href="mailto:johan88879@hotmail.com">
        johan88879@hotmail.com</a></p>`
    }
  ]
};

const CATEGORY_LABELS = {
  "inicio": "Inicio",
  "sobre-mi": "Sobre mí",
  "habilidades": "Habilidades",
  "proyectos": "Proyectos",
  "contacto": "Contacto"
};

const CATEGORY_ORDER = ["inicio", "sobre-mi", "habilidades", "proyectos", "contacto"];

// ---------- Estado de navegación ----------
let state = {
  catIndex: 0,
  itemIndex: 0
};

// ---------- Referencias DOM ----------
const categoryButtons = Array.from(document.querySelectorAll(".category"));
const itemsColumn = document.getElementById("itemsColumn");
const detailPanel = document.getElementById("detailPanel");
const activeCatTitle = document.getElementById("activeCatTitle");
const clockEl = document.getElementById("clock");
const catIndicator = document.getElementById("catIndicator");
const xmbBg = document.querySelector(".xmb-bg");

// Escalonar la animación de entrada de cada ícono
categoryButtons.forEach((btn, i) => btn.style.setProperty("--i", i));

// ---------- Partículas ambientales tipo XMB ----------
function spawnParticles(count){
  for(let i = 0; i < count; i++){
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = (14 + Math.random() * 14) + "s";
    p.style.animationDelay = (Math.random() * 18) + "s";
    p.style.opacity = (0.2 + Math.random() * 0.4).toFixed(2);
    xmbBg.appendChild(p);
  }
}
spawnParticles(18);

// ---------- Reloj tipo XMB ----------
function updateClock(){
  const now = new Date();
  const dias = ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"];
  const dia = dias[now.getDay()];
  const hh = String(now.getHours()).padStart(2,"0");
  const mm = String(now.getMinutes()).padStart(2,"0");
  clockEl.textContent = `${dia}  ${hh}:${mm}`;
}
updateClock();
setInterval(updateClock, 1000 * 10);

// ---------- Render ----------
function renderCategories(){
  categoryButtons.forEach((btn, i) => {
    btn.classList.toggle("active", i === state.catIndex);
  });
  const catKey = CATEGORY_ORDER[state.catIndex];
  activeCatTitle.textContent = CATEGORY_LABELS[catKey];
  positionIndicator();
}

function positionIndicator(){
  const activeBtn = categoryButtons[state.catIndex];
  if(!activeBtn || !catIndicator) return;
  const navRect = activeBtn.parentElement.getBoundingClientRect();
  const btnRect = activeBtn.getBoundingClientRect();
  const iconEl = activeBtn.querySelector(".icon");
  const iconRect = iconEl.getBoundingClientRect();
  catIndicator.style.left = (iconRect.left - navRect.left) + "px";
  catIndicator.style.width = iconRect.width + "px";
}

function renderItems(){
  const catKey = CATEGORY_ORDER[state.catIndex];
  const items = DATA[catKey];
  itemsColumn.innerHTML = "";

  items.forEach((item, i) => {
    const row = document.createElement("div");
    row.className = "xmb-item" + (i === state.itemIndex ? " selected" : "");
    row.setAttribute("role", "button");
    row.setAttribute("tabindex", "0");
    row.innerHTML = `<span class="item-index">${String(i+1).padStart(2,"0")}</span><span>${item.title}</span>`;
    row.addEventListener("click", () => {
      state.itemIndex = i;
      renderItems();
      renderDetail();
    });
    itemsColumn.appendChild(row);
  });
}

function renderDetail(){
  const catKey = CATEGORY_ORDER[state.catIndex];
  const item = DATA[catKey][state.itemIndex];
  detailPanel.innerHTML = `
    ${item.tag ? `<span class="detail-tag">${item.tag}</span>` : ""}
    <h2 class="detail-heading">${item.title}</h2>
    ${item.html}
  `;
}

function renderAll(){
  renderCategories();
  renderItems();
  renderDetail();
}

// ---------- Navegación por clic en categorías ----------
categoryButtons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    state.catIndex = i;
    state.itemIndex = 0;
    renderAll();
  });
});

// ---------- Navegación por teclado (flechas, como en PS3) ----------
document.addEventListener("keydown", (e) => {
  const catKey = CATEGORY_ORDER[state.catIndex];
  const itemsCount = DATA[catKey].length;

  switch(e.key){
    case "ArrowLeft":
      state.catIndex = (state.catIndex - 1 + CATEGORY_ORDER.length) % CATEGORY_ORDER.length;
      state.itemIndex = 0;
      renderAll();
      break;
    case "ArrowRight":
      state.catIndex = (state.catIndex + 1) % CATEGORY_ORDER.length;
      state.itemIndex = 0;
      renderAll();
      break;
    case "ArrowUp":
      state.itemIndex = (state.itemIndex - 1 + itemsCount) % itemsCount;
      renderItems();
      renderDetail();
      break;
    case "ArrowDown":
      state.itemIndex = (state.itemIndex + 1) % itemsCount;
      renderItems();
      renderDetail();
      break;
  }
});

// ---------- Gestos táctiles (swipe) para móvil ----------
let touchStartX = 0, touchStartY = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].clientX;
  touchStartY = e.changedTouches[0].clientY;
}, { passive: true });

document.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  const absX = Math.abs(dx), absY = Math.abs(dy);
  const threshold = 40;

  if(absX < threshold && absY < threshold) return; // toque simple, no swipe

  const catKey = CATEGORY_ORDER[state.catIndex];
  const itemsCount = DATA[catKey].length;

  if(absX > absY){
    // Swipe horizontal → cambia de sección (categoría)
    if(dx < 0){
      state.catIndex = (state.catIndex + 1) % CATEGORY_ORDER.length;
    } else {
      state.catIndex = (state.catIndex - 1 + CATEGORY_ORDER.length) % CATEGORY_ORDER.length;
    }
    state.itemIndex = 0;
    renderAll();
  } else {
    // Swipe vertical → navega entre elementos de la sección
    if(dy < 0){
      state.itemIndex = (state.itemIndex + 1) % itemsCount;
    } else {
      state.itemIndex = (state.itemIndex - 1 + itemsCount) % itemsCount;
    }
    renderItems();
    renderDetail();
  }
}, { passive: true });

// Reposicionar el indicador si cambia el tamaño de ventana o cargan las fuentes
window.addEventListener("resize", positionIndicator);
window.addEventListener("load", positionIndicator);

// ---------- Inicio ----------
renderAll();
setTimeout(positionIndicator, 1600); // reajusta tras la animación de arranque