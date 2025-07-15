const cursos = [
  {
    ciclo: "I",
    color: "bg-1",
    cursos: [
      { nombre: "Derecho Penal I", creditos: 3 },
      { nombre: "Derecho Penal II", creditos: 4 },
      { nombre: "Derecho Civil I", creditos: 3 },
      { nombre: "Derecho Civil II", creditos: 4 },
      { nombre: "Derecho Procesal", creditos: 3 },
    ],
  },
  {
    ciclo: "II",
    color: "bg-2",
    cursos: [
      { nombre: "Derecho Constitucional", creditos: 3 },
      { nombre: "Derecho Laboral", creditos: 4 },
      { nombre: "Derecho Administrativo", creditos: 3 },
      { nombre: "Derecho Ambiental", creditos: 4 },
      { nombre: "Derechos Humanos", creditos: 3 },
    ],
  },
  {
    ciclo: "III",
    color: "bg-3",
    cursos: [
      { nombre: "Criminología", creditos: 3 },
      { nombre: "Ética Profesional", creditos: 4 },
      { nombre: "Investigación Jurídica", creditos: 3 },
      { nombre: "Tesis I", creditos: 4 },
      { nombre: "Tesis II", creditos: 3 },
    ],
  },
  {
    ciclo: "IV",
    color: "bg-4",
    cursos: [
      { nombre: "Epistemología del Derecho", creditos: 3 },
      { nombre: "Derecho Internacional", creditos: 4 },
      { nombre: "Contratos", creditos: 3 },
      { nombre: "Obligaciones", creditos: 4 },
      { nombre: "Propiedad Intelectual", creditos: 3 },
    ],
  },
  {
    ciclo: "V",
    color: "bg-5",
    cursos: [
      { nombre: "Litigación Estratégica", creditos: 3 },
      { nombre: "Derecho Comercial", creditos: 4 },
      { nombre: "Derecho Tributario", creditos: 3 },
      { nombre: "Metodología Jurídica", creditos: 4 },
      { nombre: "Negociación y Arbitraje", creditos: 3 },
    ],
  },
  {
    ciclo: "VI",
    color: "bg-6",
    cursos: [
      { nombre: "Sociología Jurídica", creditos: 3 },
      { nombre: "Derecho Penal I", creditos: 4 },
      { nombre: "Derecho Penal II", creditos: 3 },
      { nombre: "Derecho Civil I", creditos: 4 },
      { nombre: "Derecho Civil II", creditos: 3 },
    ],
  },
  {
    ciclo: "VII",
    color: "bg-7",
    cursos: [
      { nombre: "Derecho Procesal", creditos: 3 },
      { nombre: "Derecho Constitucional", creditos: 4 },
      { nombre: "Derecho Laboral", creditos: 3 },
      { nombre: "Derecho Administrativo", creditos: 4 },
      { nombre: "Derecho Ambiental", creditos: 3 },
    ],
  },
  {
    ciclo: "VIII",
    color: "bg-8",
    cursos: [
      { nombre: "Derechos Humanos", creditos: 3 },
      { nombre: "Criminología", creditos: 4 },
      { nombre: "Ética Profesional", creditos: 3 },
      { nombre: "Investigación Jurídica", creditos: 4 },
      { nombre: "Tesis I", creditos: 3 },
    ],
  },
  {
    ciclo: "IX",
    color: "bg-9",
    cursos: [
      { nombre: "Tesis II", creditos: 3 },
      { nombre: "Epistemología del Derecho", creditos: 4 },
      { nombre: "Derecho Internacional", creditos: 3 },
      { nombre: "Contratos", creditos: 4 },
      { nombre: "Obligaciones", creditos: 3 },
    ],
  },
  {
    ciclo: "X",
    color: "bg-10",
    cursos: [
      { nombre: "Propiedad Intelectual", creditos: 3 },
      { nombre: "Litigación Estratégica", creditos: 4 },
      { nombre: "Derecho Comercial", creditos: 3 },
      { nombre: "Derecho Tributario", creditos: 4 },
      { nombre: "Metodología Jurídica", creditos: 3 },
    ],
  },
  {
    ciclo: "XI",
    color: "bg-11",
    cursos: [
      { nombre: "Negociación y Arbitraje", creditos: 3 },
      { nombre: "Sociología Jurídica", creditos: 4 },
      { nombre: "Derecho Penal I", creditos: 3 },
      { nombre: "Derecho Penal II", creditos: 4 },
      { nombre: "Derecho Civil I", creditos: 3 },
    ],
  },
  {
    ciclo: "XII",
    color: "bg-12",
    cursos: [
      { nombre: "Derecho Civil II", creditos: 3 },
      { nombre: "Derecho Procesal", creditos: 4 },
      { nombre: "Derecho Constitucional", creditos: 3 },
      { nombre: "Derecho Laboral", creditos: 4 },
      { nombre: "Derecho Administrativo", creditos: 3 },
    ],
  },
];

const container = document.getElementById("ciclos-container");

cursos.forEach((c) => {
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

function mostrarModal(curso) {
  document.getElementById("curso-nombre").textContent = curso.nombre;
  document.getElementById("curso-creditos").textContent = curso.creditos;
  document.getElementById("curso-prereqs").textContent = curso.prerequisitos
    ? `Prerequisitos: ${curso.prerequisitos}`
    : "";
  document.getElementById("modal").classList.remove("hidden");
}

function cerrarModal() {
  document.getElementById("modal").classList.add("hidden");
}
