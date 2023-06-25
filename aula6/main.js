function addDocElements (element, text, ref){
    const constant = document.createElement(element);
    constant.innerText = text;
    ref.appendChild(constant);
}

function render(){
    const app = document.getElementById("app");
    if (app.firstChild){
        app.firstChild.remove();
    }

    const panel = document.createElement("div");
    
    for (const mes of ano2023.meses){
        addDocElements("h2", mes.nome, panel);

        for (const lancamento of mes.lancamentos){
            const adicionarLancamentos = `tipo: ${lancamento.tipo} | valor: ${lancamento.valor} | categoria: ${lancamento.categoria}`
            addDocElements("p", adicionarLancamentos, panel);
        }

        const valorSaldo = `Saldo: ${mes.detalhesDoMes.saldo}`;
        addDocElements("h3", valorSaldo, panel)
        
        panel.appendChild(document.createElement("hr")); 
    }

    app.appendChild(panel)
}

render();