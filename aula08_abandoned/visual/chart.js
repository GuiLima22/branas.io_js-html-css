class Chart {
    constructor (){
        this.app = document.getElementById("app");
    }

    removeFirstChild(){
        if (this.app.firstChild) {
            this.app.firstChild.remove();
        }
    }

    graphConstruction(where, towerHeight, monthName){
        const grafico = new Graph();
        for (let i; i < towerHeight.length; i++) {
            grafico.addColumn(towerHeight, monthName);
        }
        where.appendChild(grafico.element);
    }

    render(towerHeight, monthName) {
        const panel = document.createElement("div");

        this.removeFirstChild();
        this.graphConstruction(panel, towerHeight, monthName);

        for (const mes of ano2023.meses) {
            addDocElements("h2", mes.nome, panel);

            const tableCreation = new Table("tableStyle");
            tableCreation.addRow('th', ["Categoria", "Valor"]);

            for (const lancamento of mes.lancamentos) {
                tableCreation.addRow('td', [lancamento.categoria, moneyFormat(lancamento.isNumberNeg())], lancamento.tipo)
            }

            tableCreation.addRow('th', ['Rendimentos', moneyFormat(mes.detalhesDoMes.rendimentos)]);
            tableCreation.addRow('th', ['Juros', moneyFormat(mes.detalhesDoMes.juros)]);
            tableCreation.addRow('th', ['Total', moneyFormat(mes.detalhesDoMes.saldo)]);

            panel.appendChild(tableCreation.element);
        }

        this.app.appendChild(panel);
    }
}