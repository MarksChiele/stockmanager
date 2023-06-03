<?php

include_once "./conexao/conexao.php";

function buscaItem($iditem)// iditem e o valor capturado pelo QRCode
{
    try {
        $conn = criaConexao();

        $sql = "SELECT * FROM stock.produto where idproduto=? ";

        $stmt = $conn->prepare($sql);

        $stmt->execute([$iditem]);

        $conn = null;

        return true;

    } catch (PDOException $e) {
        print($e->getMessage());
        return false;
    }
}

function buscaCliente()
{
    try {
        $conn = criaConexao();

        $sql = "SELECT * FROM stock.cliente where idcliente=? ";

        $stmt = $conn->prepare($sql);

        $stmt->execute();

        $conn = null;

        return true;

    } catch (PDOException $e) {
        print($e->getMessage());
        return false;
    }
}

function atualizastockItem($idproduto, $qtde) //qtde e a quantidade nova do produto calculada pela funcao.... que fara a soma ou subtracao da quantidade atual X o digitado pelo usuario
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