function aumentarNumero() {
  var numero_car = document.getElementById('carrinho-quantidade');
  var numeroAtual = parseInt(numero_car.textContent);
  numero_car.textContent = numeroAtual + 1;

  // Armazenar o valor no localStorage
  localStorage.setItem('quantidade', numeroAtual + 1);
}

// Verificar se há um valor armazenado no localStorage
var valorArmazenado = localStorage.getItem('quantidade');
if (valorArmazenado) {
  // Se houver um valor armazenado, atualizar o elemento da quantidade com o valor armazenado
  var numero_car = document.getElementById('carrinho-quantidade');
  numero_car.textContent = valorArmazenado;
}