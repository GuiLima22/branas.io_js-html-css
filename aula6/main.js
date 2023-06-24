for (const rep of ano2023.meses){
    console.log(rep)
}

function render(){
    const app = document.getElementById("app");
    
    for (const mes of ano2023.meses){
        const nomeMes = document.createElement("h2");
        nomeMes.innerText = mes.nome;
        app.appendChild(nomeMes);
        for (const lancamento of mes.lancamentos){
            const detalhesLancamento = document.createElement("p");
            detalhesLancamento.innerText = `${lancamento.tipo}  R$${lancamento.valor},00 ${lancamento.categoria}`
            nomeMes.appendChild(detalhesLancamento)
        }
        const saldo = document.createElement("h3");
        saldo.innerText = `Saldo: R$${mes.detalhesDoMes.saldo}`
        app.appendChild(saldo)
        app.appendChild(document.createElement("hr"))
    }

}

render();