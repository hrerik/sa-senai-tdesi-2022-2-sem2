<?php

include_once('conexao_php.php');
$nome = $_POST['nome'];
$senha_usuario = $_POST['senha'];

$result = mysqli_query($conexao, "INSERT INTO usuario (login_usuario, senha_usuario) VALUES ('$name', '$senha_usuario')");

/*if ($result) {
    echo "Data inserted successfully.";
} else {
    echo "Error inserting data: " . mysqli_error($conexao);
}
*/

header("Location:cadastrar.php");
?>
