// Código cabeçalho início
function btnMenu() {
  // Pegando a lista
  const listaHeader = document.querySelector(".listaHeader");

  // Informando para começar o menu com display none se a tela for maior que 760px
  const width = window.innerWidth <= 760 ? "none" : "";
  listaHeader.style.display = width;

  // Adicionando um evento para clique de botão, que faz com que o menu fique ou não com display none
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


