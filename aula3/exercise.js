//Calculo de percentual de cada despesa no final do mês

const lancamentosJaneiro = [
    {tipo: 'receita', valor: 1500, categoria: 'salario'},
    {tipo: 'despesa', valor:  100, categoria: 'contaDeAgua'},
    {tipo: 'despesa', valor:  150, categoria: 'contaDeLuz'},
    {tipo: 'despesa', valor:  350, categoria: 'condominio'},
    {tipo: 'despesa', valor:  300, categoria: 'alimentacao'}
];

let despesaTotal = 0;
let percentualDespesas = [];

for (lancamento of lancamentosJaneiro){
    if (lancamento.tipo === 'despesa'){
        despesaTotal += lancamento.valor;
    };
};

for (lancamento of lancamentosJaneiro){
    if (lancamento.tipo === 'despesa'){
        let percentual = Math.round((lancamento.valor / despesaTotal) * 100);
        percentualDespesas.push({percentual: percentual + "%", categoria: lancamento.categoria});
    };
};

console.log(percentualDespesas);