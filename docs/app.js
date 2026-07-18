const profiles = [
  { name: "Profe", role: "Profesor", folder: "Profe", file: "indexprofe.html", initial: "P" },
  { name: "Bowen", role: "Alumno", folder: "Bowen", file: "indexbowen.html", initial: "B" },
  { name: "Daniel", role: "Alumno", folder: "Daniel", file: "indexdaniel.html", initial: "D" },
  { name: "Diego", role: "Alumno", folder: "Diego", file: "indexdiego.html", initial: "D" },
  { name: "Haniel", role: "Alumno", folder: "Haniel", file: "indexhaniel.html", initial: "H" },
  { name: "Johan", role: "Alumno", folder: "Johan", file: "indexjohan.html", initial: "J" },
  { name: "Naarai", role: "Alumno", folder: "Naarai", file: "indexnaarai.html", initial: "N" },
];

const container = document.getElementById("profiles");

profiles.forEach((profile) => {
  const card = document.createElement("a");
  card.className = "card" + (profile.role === "Profesor" ? " card-profe" : "");
  card.href = `./${profile.folder}/${profile.file}`;

  card.innerHTML = `
    <div class="avatar">${profile.initial}</div>
    <div class="card-body">
      <h2 class="name">${profile.name}</h2>
      <p class="role">${profile.role}</p>
    </div>
    <span class="arrow">&rarr;</span>
  `;

  container.appendChild(card);
});
