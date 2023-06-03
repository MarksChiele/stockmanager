<?php
include_once "./conexao/conexao.php";

function criaItem($descricao, $tipo, $idcliente)
{
    try {
        $conn = criaConexao();

        $sql = "INSERT INTO stock.produto (descricao, tipo, idcliente) VALUES(?, ?) ";

        $stmt = $conn->prepare($sql);

        $stmt->execute([$descricao, $tipo, $idcliente]);

        $conn = null;

        return true;

    } catch (PDOException $e) {
        print($e->getMessage());
        return false;
    }
}

function atualizastockItem($idproduto, $qtde)
{
    try {
        $conn = criaConexao();

        $sql = "UPDATE stock.produto SET qtde=? where idproduto=? ";

        $stmt = $conn->prepare($sql);

        $stmt->execute([$qtde, (int)$idproduto]);

        $conn = null;

        return true;

    } catch (PDOException $e) {
        print($e->getMessage());
        return false;
    }
}