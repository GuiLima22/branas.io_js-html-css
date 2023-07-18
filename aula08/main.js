class HTML_Elements{
    creation(element, id){
        const newElement = document.createElement(element);
        if (id){
            newElement.id = id;
        }
        return newElement;
    }
}

function render() {
    const app = document.getElementById("app");
    if (app.firstChild) {
        app.firstChild.remove();
    }

    const panel = new HTML_Elements().creation('div');
    console.log(panel)

    const grafico = new Graph();
    for (let i = 0; i < ano2023.arrMeses("names").length; i++) {
        grafico.addColumn(ano2023.arrMeses("graphProportion")[i], ano2023.arrMeses("names")[i]);
    }
    panel.appendChild(grafico.element);

    for (const mes of ano2023.meses) {
        addDocElements("h2", mes.nome, panel);

        const tableCreation = new Table("tableStyle");
        tableCreation.addRow('th', ["Categoria", "Valor"]);

        for (const lancamento of mes.lancamentos) {
            tableCreation.addRow('td', [lancamento.categoria, moneyFormat(lancamento.isNumberNeg())], lancamento.tipo);
        }

        tableCreation.addRow('th', ['Rendimentos', moneyFormat(mes.detalhesDoMes.rendimentos)]);
        tableCreation.addRow('th', ['Juros', moneyFormat(mes.detalhesDoMes.juros)]);
        tableCreation.addRow('th', ['Total', moneyFormat(mes.detalhesDoMes.saldo)]);

        panel.appendChild(tableCreation.element);
    }

    app.appendChild(panel);
}


class Form {
    receiveInput() {
        const month = document.getElementById("mes").value;
        const type = document.getElementById("tipo").value;
        const value = document.getElementById("valor").value;
        const category = document.getElementById("categoria").value;
        console.log([month, type, value, category]);
        // ano2023.adicionarLancamento(month.value, new Lancamento(type.value, Number(value.value), category.value));
        // ano2023.calcularSaldo();
        // render();
        // inputCleaner();
    }
    
    optionsPull(choices, id) {
        for (const choice of choices) {
            const monthInput = document.getElementById(id);
            const option = document.createElement("option");
            option.text = choice;
            monthInput.appendChild(option);
        }
    }
    
    inputPush() {
        const botao = document.getElementById("botao");
        botao.addEventListener("click", this.receiveInput);
    }
}

const form = new Form();

const monthList = ano2023.arrMeses("names")

form.optionsPull(monthList, "mes")
form.optionsPull(["receita", "despesa"], "tipo")
render(ano2023.arrMeses);
form.inputPush();