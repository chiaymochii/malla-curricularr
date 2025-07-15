const cursos = [
  {
    ciclo: "I",
    color: "bg-1",
    cursos: [
      { nombre: "Filosofía", creditos: 3 },
      { nombre: "Antropología", creditos: 3 },
      { nombre: "Relaciones Interpersonales", creditos: 2 },
      { nombre: "Metodología del Estudio", creditos: 3 },
      { nombre: "Deporte y Recreación", creditos: 1 },
    ],
  },
  {
    ciclo: "II",
    color: "bg-2",
    cursos: [
      { nombre: "Expresión Artística", creditos: 1 },
      { nombre: "Herramientas Digitales", creditos: 3 },
      { nombre: "Redacción y Elocución", creditos: 3 },
      { nombre: "Investigación Formativa", creditos: 3 },
      { nombre: "Matemática Superior", creditos: 3 },
    ],
  },
  // [...] Agrega los ciclos III al XII siguiendo el mismo patrón
];

// Generar ciclos
const container = document.getElementById("ciclos-container");

cursos.forEach((c, i) => {
  const cicloDiv = document.createElement("div");
  cicloDiv.className = `ciclo ${c.color}`;
  cicloDiv.innerHTML = `<h2>Ciclo ${c.ciclo}</h2>`;
  const lista = document.createElement("div");
  lista.className = "cursos";

  c.cursos.forEach((curso) => {
    const div = document.createElement("div");
    div.className = "curso";
    div.textContent = curso.nombre;
    div.onclick = () => mostrarModal(curso);
    lista.appendChild(div);
  });

  cicloDiv.appendChild(lista);
  container.appendChild(cicloDiv);
});

// Modal
function mostrarModal(curso) {
  document.getElementById("curso-nombre").textContent = curso.nombre;
  document.getElementById("curso-creditos").textContent = curso.creditos;
  document.getElementById("curso-prereqs").textContent = curso.prerequisitos
    ? `<strong>Prerequisitos:</strong> ${curso.prerequisitos}`
    : \"\";
  document.getElementById("modal").classList.remove("hidden");
}

function cerrarModal() {
  document.getElementById("modal").classList.add("hidden");
}

