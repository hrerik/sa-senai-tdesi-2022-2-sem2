<?php
  require_once('conexao_php.php');

 
      $nome = $_POST['nome_usuario'];
      $senha = $_POST['senha_usuario'];
      
      $sql = "SELECT nome_usuario, senha_usuario FROM usuario WHERE nome_usuario = '$nome' && senha_usuario = '$senha'";
      $result = mysqli_query($conexao, $sql);
      
      if (mysqli_num_rows($result) > 0) { // caso o login seja sucedido, redirecione
        header ("Location: https://bfe6-187-72-213-85.ngrok-free.app/html/home.html ");
      } else {
      echo("<script>document.getElementById('form-text').textContent = 'E-mail ou senha inválidos'</script>");
        header ("Location: https://bfe6-187-72-213-85.ngrok-free.app/html/home.html ");
      };
  
  
  mysqli_close($conexao);

?>