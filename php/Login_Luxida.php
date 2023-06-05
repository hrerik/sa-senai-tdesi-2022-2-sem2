<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Luxida</title>

  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      padding-top: 70px;
      justify-content: center;
      background-color: rgb(223, 221, 221);
      background-image: url("https://images6.alphacoders.com/389/389877.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #fff;
      text-align: center;
    }

    .digitar-sozinho {
      font-size: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      overflow: hidden;
      white-space: nowrap;
      animation: digitar 4s steps(60, end) forwards;
    }

    @keyframes digitar {
      from {
        width: 0
      }

      to {
        width: 100%
      }
    }

    div {
      width: 500px;
      height: 400px;
      border: 2px solid black;
      display: block;
      background-color: rgb(223, 221, 221);
      background-image: url("https://img.freepik.com/vetores-gratis/fundo-branco-e-cinza-brilhante-com-linhas-onduladas_1017-25101.jpg?w=2000");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #fff;
      text-align: center;
    }

    form {
      text-align: center;
      padding-top: 50px;

    }

    label {
      font-size: large;
      display: flex;
      justify-content: center;
      color: rgb(252, 252, 252);
      flex-direction: row;
    }

    input {
      width: 50%;
      height: 20px;
      border: none;
      border-radius: 5px;
      margin-bottom: 5px;
    }

    .botao_login {
      width: 100px;
      padding: 5px;
      border: none;
      border-radius: 5px;
      background-color: #b0b6b5;
      color: rgb(0, 0, 0);
      cursor: pointer;
      padding-left: 30px;
      margin-top: 10px;
      margin-left: 350px;
    }

    button {
      display: flex;
      flex-direction: row;
    }

    h1 {
      color: black;
      font-size: 14;
    }
  </style>
</head>

<body>
  <div class="container">
    <form action="" method="post">
      <img src="https://github.com/hrerik/sa-senai-tdesi-2022-2-sem2/blob/main/logos/Luxida%20Icon.png?raw=true" alt=""
        width="100px" height="100px">
      <h1 class="digitar-sozinho"></h1>
      <label for="nome"></label>
      <input type="text" id="nome" name="nome_usuario" placeholder="Seu usuário aqui!">
      <label for="senha"></label>
      <input type="password" id="senha" name="senha_usuario" placeholder="Sua senha aqui!">
      <button type="submit" id="botao-login" name="submit" class="botao_login">Login!</button>
      <p id="form-text"></p>
    </form>
  </div>
  <script>
    window.onload = function () {
      const msg = "Olá, Seja bem-vindo faça seu Cadastro!";
      const sozinho = document.querySelector('.digitar-sozinho');
      sozinho.textContent = msg;
    }
  </script>


</body>

</html>