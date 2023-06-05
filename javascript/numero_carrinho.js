
function aumentarNumero() {
  var numero_car = document.getElementById('carrinho-quantidade');
  var numeroAtual = parseInt(numero_car.textContent);
  numero_car.textContent = numeroAtual + 1;
}

aumentarNumero();