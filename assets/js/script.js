// Código cabeçalho início
function btnMenu() {
  const listaHeader = document.querySelector(".listaHeader");

  const width = window.innerWidth <= 770 ? "none" : "";
  listaHeader.style.display = width;

  document.addEventListener("click", (e) => {
    const el = e.target;

    if (el.classList.contains("material-symbols-outlined")) {
      const display = listaHeader.style.display === "none" ? "" : "none";
      listaHeader.style.display = display;
    }
  });
}
btnMenu();
// Código cabeçalho fim


