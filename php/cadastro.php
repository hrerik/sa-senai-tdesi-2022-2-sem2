
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
 body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      padding-top: 200px;
      justify-content: center;
      background-color: rgb(223, 221, 221);
      background-image: url("https://i0.wp.com/diariorp.com.br/wp-content/uploads/2018/08/fundo-login-diario.jpg?fit=300%2C168&ssl=1");
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
      height: 300px;
      border: 2px solid black;
      display: block;
      background-color: rgb(223, 221, 221);
      background-image: url("https://i.pinimg.com/236x/4f/b7/35/4fb735450ccd37f844681e08fbaca7f8.jpg");
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
      color: rgb(255, 255, 255);
      flex-direction: row;
    }

    input {
      width: 50%;
      height: 15px;
      border: none;
      border-radius: 5px;
      margin-bottom: 5px;
    }

    .botao_login {
      width: 100px;
      padding: 5px;
      border: none;
      border-radius: 5px;
      background-color: #11e4d2;
      color: rgb(0, 0, 0);
      cursor: pointer;
      padding-left: 20px;
      margin-top: 10px;
      margin-left: 350px;
    }

    button {
      display: flex;
      flex-direction: row;
    }

    </style>
</head>
<body>
    <div class="container">
        <form action="inserir_usuario.php" method="post">
        <h1 class="digitar-sozinho"></h1>
        <label for="nome">Seu usuário:</label>
        <input type="text" id="nome" name="nome_usuario">
        <label for="senha">Sua Senha:</label>
        <input type="password" id="senha" name="senha_usuario">
            <button type="submit" id="botao-login" name="submit" class="botao_login">Sign Up!</button>
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
