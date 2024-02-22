// Código cabeçalho início
function btnNav() {
  const listaHeader = document.querySelector(".listaHeader");

  document.addEventListener("click", (e) => {
    const el = e.target;

    if (el.classList.contains("material-symbols-outlined")) {
      const display = listaHeader.style.display === "none" ? "" : "none";
      listaHeader.style.display = display;
    }
  });
}
btnNav();
// Código cabeçalho fim
