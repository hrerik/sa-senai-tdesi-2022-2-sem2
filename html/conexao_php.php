<?php

$dbHost = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbname = 'senai_sa';

$conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbname);

/*if($conexao->connect_errno) {
    echo "Conexão com o banco de dados falhou!";
} else {
    echo "Conexão efetuada com sucesso";
}*/

if(isset($_POST['submit'])){
    print_r($_POST['nome']);
    print_r($_POST['senha']);
    }
?>