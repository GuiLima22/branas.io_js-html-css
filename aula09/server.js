const express = require("express");
const app = express();
app.use("/app", express.static("./client"));

const lancamentos = [
{ mes: "janeiro", categoria: "Salário", tipo: 'receita', valor: 3000 },
{ mes: "janeiro", categoria: "Aluguel", tipo: 'despesa', valor: 1000 },
{ mes: "janeiro", categoria: "Conta de Luz", tipo: 'despesa', valor: 200 },
{ mes: "janeiro", categoria: "Conta de Água", tipo: 'despesa', valor: 100 },
{ mes: "janeiro", categoria: "Internet", tipo: 'despesa', valor: 100 },
{ mes: "janeiro", categoria: "Transporte", tipo: 'despesa', valor: 300 },
{ mes: "janeiro", categoria: "Lazer", tipo: 'despesa', valor: 300 },
{ mes: "janeiro", categoria: "Alimentação", tipo: 'despesa', valor: 500 },
{ mes: "janeiro", categoria: "Condomínio", tipo: 'despesa', valor: 300 },
{ mes: "janeiro", categoria: "Farmácia", tipo: 'despesa', valor: 100 },
{ mes: "janeiro", categoria: "Freela", tipo: 'receita', valor: 3000 },

{ mes: "fevereiro", categoria: "Salário", tipo: 'receita', valor: 3000 },
{ mes: "fevereiro", categoria: "Aluguel", tipo: 'despesa', valor: 1200 },
{ mes: "fevereiro", categoria: "Conta de Luz", tipo: 'despesa', valor: 250 },
{ mes: "fevereiro", categoria: "Conta de Água", tipo: 'despesa', valor: 100 },
{ mes: "fevereiro", categoria: "Internet", tipo: 'despesa', valor: 100 },
{ mes: "fevereiro", categoria: "Transporte", tipo: 'despesa', valor: 500 },
{ mes: "fevereiro", categoria: "Alimentação", tipo: 'despesa', valor: 1000 },
{ mes: "fevereiro", categoria: "Condomínio", tipo: 'despesa', valor: 400 },
{ mes: "fevereiro", categoria: "Freela", tipo: 'receita', valor: 5000 },

{ mes: "marco", categoria: "Salário", tipo: 'receita', valor: 4000 },
{ mes: "marco", categoria: "Aluguel", tipo: 'despesa', valor: 1200 },
{ mes: "marco", categoria: "Conta de Luz", tipo: 'despesa', valor: 200 },
{ mes: "marco", categoria: "Conta de Água", tipo: 'despesa', valor: 100 },
{ mes: "marco", categoria: "Internet", tipo: 'despesa', valor: 200 },
{ mes: "marco", categoria: "Transporte", tipo: 'despesa', valor: 500 },
{ mes: "marco", categoria: "Lazer", tipo: 'despesa', valor: 800 },
{ mes: "marco", categoria: "Alimentação", tipo: 'despesa', valor: 1000 },
{ mes: "marco", categoria: "Condomínio", tipo: 'despesa', valor: 400 }
];

app.get("/api/lancamentos", function (req, res){
    res.json(lancamentos);
});

app.listen(3000);