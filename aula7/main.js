function addDocElements(element, text, ref) {
    const constant = document.createElement(element);
    constant.innerText = text;
    ref.appendChild(constant);
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

    for (const mes of ano2023.meses){
        const column = document.createElement("div");
        column.className = "grafico-coluna";
        const cor = document.createElement("div");
        cor.style.height = 120;
        cor.style.background = cores.pop();
        column.appendChild(cor);
        const nomeMes = document.createElement("div");
        column.innerText = mes.nome;
        column.appendChild(nomeMes);
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
        addDocElements("th", moneyFormat(mes.detalhesDoMes.saldo), lineSaldo);
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