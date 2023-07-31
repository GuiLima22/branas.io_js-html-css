const express = require("express");
const app = express();
app.use("/app", express.static("./client"));

const lancamentos = [
{ mes: "Janeiro", categoria: "Salário", tipo: 'receita', valor: 3000 },
{ mes: "Janeiro", categoria: "Aluguel", tipo: 'despesa', valor: 1000 },
{ mes: "Janeiro", categoria: "Conta de Luz", tipo: 'despesa', valor: 200 },
{ mes: "Janeiro", categoria: "Conta de Água", tipo: 'despesa', valor: 100 },
{ mes: "Janeiro", categoria: "Internet", tipo: 'despesa', valor: 100 },
{ mes: "Janeiro", categoria: "Transporte", tipo: 'despesa', valor: 300 },
{ mes: "Janeiro", categoria: "Lazer", tipo: 'despesa', valor: 300 },
{ mes: "Janeiro", categoria: "Alimentação", tipo: 'despesa', valor: 500 },
{ mes: "Janeiro", categoria: "Condomínio", tipo: 'despesa', valor: 300 },
{ mes: "Janeiro", categoria: "Farmácia", tipo: 'despesa', valor: 100 },
{ mes: "Janeiro", categoria: "Freela", tipo: 'receita', valor: 3000 },

{ mes: "Fevereiro", categoria: "Salário", tipo: 'receita', valor: 3000 },
{ mes: "Fevereiro", categoria: "Aluguel", tipo: 'despesa', valor: 1200 },
{ mes: "Fevereiro", categoria: "Conta de Luz", tipo: 'despesa', valor: 250 },
{ mes: "Fevereiro", categoria: "Conta de Água", tipo: 'despesa', valor: 100 },
{ mes: "Fevereiro", categoria: "Internet", tipo: 'despesa', valor: 100 },
{ mes: "Fevereiro", categoria: "Transporte", tipo: 'despesa', valor: 500 },
{ mes: "Fevereiro", categoria: "Alimentação", tipo: 'despesa', valor: 1000 },
{ mes: "Fevereiro", categoria: "Condomínio", tipo: 'despesa', valor: 400 },
{ mes: "Fevereiro", categoria: "Freela", tipo: 'receita', valor: 5000 },

{ mes: "Março", categoria: "Salário", tipo: 'receita', valor: 4000 },
{ mes: "Março", categoria: "Aluguel", tipo: 'despesa', valor: 1200 },
{ mes: "Março", categoria: "Conta de Luz", tipo: 'despesa', valor: 200 },
{ mes: "Março", categoria: "Conta de Água", tipo: 'despesa', valor: 100 },
{ mes: "Março", categoria: "Internet", tipo: 'despesa', valor: 200 },
{ mes: "Março", categoria: "Transporte", tipo: 'despesa', valor: 500 },
{ mes: "Março", categoria: "Lazer", tipo: 'despesa', valor: 800 },
{ mes: "Março", categoria: "Alimentação", tipo: 'despesa', valor: 1000 },
{ mes: "Março", categoria: "Condomínio", tipo: 'despesa', valor: 400 }
];

app.get("/api/lancamentos", function (req, res){
    res.json(lancamentos);
});

app.listen(3000);