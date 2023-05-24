
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
 body {
        background-color: #f2f2f2;
        font-family: Arial, sans-serif;
        
      }

      .container {
        background-color: #fff;
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }

      h1 {
        text-align: center;
        margin-bottom: 20px;
      }

      label {
        display: block;
        margin-bottom: 5px;
      }

      input {
        display: block;
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: none;
        margin-bottom: 10px;
      }

      button {
        background-color: #4CAF50;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        margin-top: 10px;
      }

      button:hover {
        background-color: #3e8e41;
      }

      .mensagem-erro {
        color: #f00;
        font-weight: bold;
        margin-top: 10px;
      }

      .digitar-sozinho {
  font-size: 24px;
  font-family: monospace;
  overflow: hidden;
  white-space: nowrap;
  border-right: .15em solid orange;
  border-left: .15em solid orange;
  animation: digitar 2s steps(40, end) forwards;
}

@keyframes digitar {
  from { width: 0 }
  to { width: 100% }
}

    </style>
</head>
<body>
    <div class="container">
        <form action="inserir_usuario.php" method="post">
        <h1 class="digitar-sozinho"></h1>
        <label for="nome">nome:</label>
        <input type="text" id="nome" name="nome_usuario">
        <label for="senha">senha:</label>
        <input type="password" id="senha" name="senha_usuario">
            <button type="submit" id="botao-login" name="submit">login </button>
    </form>
    </div>
    
</body>
</html>