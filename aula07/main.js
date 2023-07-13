function addDocElements(element, text, ref, classDef) {
    const constant = document.createElement(element);
    constant.innerText = text;
    ref.appendChild(constant);
    if(classDef){
        constant.className = classDef
    }
}

function render() {
    const app = document.getElementById("app");
    if (app.firstChild) {
        app.firstChild.remove();
    }

    const panel = document.createElement("div");

    const cores = ["red", "blue", "green"]
    const grafico = document.createElement("div");

    grafico.className = "grafico"

    let highestNum = 0
    
    for (const mes of ano2023.meses){
        if (mes.detalhesDoMes.saldo > highestNum){
            highestNum = mes.detalhesDoMes.saldo;
        }
    }

    for (const mes of ano2023.meses){
        console.log(mes)
        const column = document.createElement("div");
        column.className = "grafico-coluna";
        const color = document.createElement("div");
        color.className = "grafico-coluna-torre";
        color.style.height = ((mes.detalhesDoMes.saldo * 200) / highestNum);
        color.style.background = cores.pop();
        const monthName = document.createElement("div");
        monthName.className = "grafico-coluna-nome"
        monthName.innerText = mes.nome;
        column.appendChild(color);
        column.appendChild(monthName);
        grafico.appendChild(column);
    }

    panel.appendChild(grafico);

    for (const mes of ano2023.meses) {
        addDocElements("h2", mes.nome, panel);

        const tableCreation = document.createElement("table");
        tableCreation.className = "tableStyle";

        const lineTitle = document.createElement("tr");
        addDocElements("th", "categoria", lineTitle);
        addDocElements("th", "valor", lineTitle);
        tableCreation.appendChild(lineTitle);

        for (const lancamento of mes.lancamentos) {
            const lineCreation = document.createElement("tr");
            addDocElements("td", lancamento.categoria, lineCreation);
            addDocElements("td", moneyFormat(lancamento.valor), lineCreation);
            tableCreation.appendChild(lineCreation);
            panel.appendChild(tableCreation);

            if (lancamento.tipo == 'despesa') {
                lineCreation.className = "despesa";
            }
            else if (lancamento.tipo == 'receita') {
                lineCreation.className = "receita";
            }
        }

        const lineRendimentos = document.createElement("tr");
        addDocElements("th", "rendimentos", lineRendimentos);
        addDocElements("th", moneyFormat(mes.detalhesDoMes.rendimentos), lineRendimentos);
        tableCreation.appendChild(lineRendimentos);

        const lineJuros = document.createElement("tr");
        addDocElements("th", "juros", lineJuros);
        addDocElements("th", moneyFormat(mes.detalhesDoMes.juros), lineJuros);
        tableCreation.appendChild(lineJuros);

        const lineSaldo = document.createElement("tr");
        addDocElements("th", "total", lineSaldo);
        addDocElements("th", moneyFormat(mes.detalhesDoMes.saldo), lineSaldo, "totais");
        tableCreation.appendChild(lineSaldo);
    }

    app.appendChild(panel);
}

render();

function addLancamento() {
    const month = document.getElementById("mes");
    const type = document.getElementById("tipo");
    const value = document.getElementById("valor");
    const category = document.getElementById("categoria");
    ano2023.adicionarLancamento(month.value, new Lancamento(type.value, parseFloat(value.value), category.value));
    ano2023.calcularSaldo();
    render();
    month.value = "";
    type.value = "";
    value.value = "";
    category.value = "";
    console.log(month.value);
}

const botao = document.getElementById("botao");
botao.addEventListener("click", addLancamento);

const mesSelect = document.getElementById("mes");

for (mes of ano2023.meses) {
    const option = document.createElement("option");
    option.text = mes.nome;
    mesSelect.appendChild(option);
}

const totais = document.getElementsByClassName('totais')
console.log(totais)