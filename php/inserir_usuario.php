<?php

include_once('conexao_php.php');
$nome = $_POST['nome_usuario'];
$senha = $_POST['senha_usuario'];

$result = mysqli_query($conexao, "INSERT INTO usuario (nome_usuario, senha_usuario) VALUES ('$nome', '$senha')");

/*if ($result) {
    echo "Data inserted successfully.";
} else {
    echo "Error inserting data: " . mysqli_error($conexao);
}
*/

header("Location:google.com.br");
?>
