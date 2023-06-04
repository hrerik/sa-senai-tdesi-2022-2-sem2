const menuLateral = document.getElementById("menu-lateral");
const menuCarrinho = document.getElementById("menu-carrinho");
const fundo = document.getElementById("menu-fundo");

function exibirMenuLateral() {
  menuLateral.style.display = "block";
  fundo.style.display = "block";
}

function exibirMenuCarrinho() {
  menuCarrinho.style.display = "block";
  fundo.style.display = "block";
}

function esconderMenuLateral() {
  menuLateral.style.display = "none";
  fundo.style.display = "none";
}


function esconderMenuCarrinho() {
  menuCarrinho.style.display = "none";
  fundo.style.display = "none";
}