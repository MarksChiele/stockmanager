<?php

//PHP Data Objects (PDO) - https://www.php.net/manual/pt_BR/book.pdo.php

function criaConexao()
{
    $host = "mysql:host=localhost;dbname=stock";
    // $host = "127.0.0.1";
    $username = "root";
    $password = "root";

    try {
        $connection = new PDO($host, $username, $password);
        // echo "Conexao criada com sucesso";
        
        return $connection;

    } catch (PDOException $e) {
        print($e->getMessage());
    }
}
