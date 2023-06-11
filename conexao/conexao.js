const express = require('express');
const mysql = require('mysql');

const app = express();

// Configurações do banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'stock'
});

// Conexão com o banco de dados
connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL.');
});
// Configuração do servidor Express.js





app.post('/subtrair', (req, res) => {
    const { id, quantidade } = req.body;// na requisicao tem o ID do produto lido no QRCode e tambem a quantidade informada na tela Operacao.js
  
    // Consulta ao banco de dados para obter a quantidade atual do item
    const getQuery = `SELECT qtde FROM stock.produto WHERE idproduto = ${id}`;
    connection.query(getQuery, (error, results) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        if (results.length > 0) {
          const quantidadeAtual = results[0].quantidade;
  
          if (quantidadeAtual >= quantidade) {
            // Subtrair a quantidade informada do item
            const novaQuantidade = quantidadeAtual - quantidade;
  
            // Atualizar a quantidade no banco de dados
            const updateQuery = `UPDATE stock.produto SET qtde = ${novaQuantidade} WHERE idproduto = ${id}`;
            connection.query(updateQuery, (error, results) => {
              if (error) {
                res.status(500).json({ error });
              } else {
                res.json({ success: true });
              }
            });
          } else {
            res.json({ success: false, message: 'Quantidade insuficiente.' });
          }
        } else {
          res.json({ success: false, message: 'Item não encontrado.' });
        }
      }
    });
  });


  app.post('/somar', (req, res) => {
    const { id, quantidade } = req.body;// na requisicao tem o ID do produto lido no QRCode e tambem a quantidade informada na tela Operacao.js
  
    // Consulta ao banco de dados para obter a quantidade atual do item
    const getQuery = `SELECT qtde FROM stock.produto WHERE idproduto = ${id}`;
    connection.query(getQuery, (error, results) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        if (results.length > 0) {
          const quantidadeAtual = results[0].quantidade;
  
          if (quantidadeAtual >= quantidade) {
            // Subtrair a quantidade informada do item
            const novaQuantidade = quantidadeAtual + quantidade;
  
            // Atualizar a quantidade no banco de dados
            const updateQuery = `UPDATE stock.produto SET qtde = ${novaQuantidade} WHERE idproduto = ${id}`;
            connection.query(updateQuery, (error, results) => {
              if (error) {
                res.status(500).json({ error });
              } else {
                res.json({ success: true });
              }
            });
          } else {
            res.json({ success: false, message: 'Quantidade insuficiente.' });
          }
        } else {
          res.json({ success: false, message: 'Item não encontrado.' });
        }
      }
    });
  });



  
  // Iniciar o servidor
  app.listen(3306, () => {
    console.log('Servidor rodando na porta 3306.');
  });