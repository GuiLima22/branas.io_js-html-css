class Display {
    constructor() {
        this.form = new Form();
        this.page = new HTML_Elements();
        
        const ano = new Ano(2023);
        ano.adicionarMes(janeiro);
        ano.adicionarMes(fevereiro);
        ano.adicionarMes(marco);
        ano.calcularSaldo();
        this.year = ano;

        this.app = this.page.takeById("app");
        this.panel = this.page.create("div");
    }

    graphGenerate() {
        const grafico = new Graph();
        for (let i = 0; i < this.year.arrMeses("names").length; i++) {
            grafico.addColumn(this.year.arrMeses("graphProportion")[i], this.year.arrMeses("names")[i]);
        }
        this.panel.appendChild(grafico.element);
    }

    pullTableElements() {
        for (const mes of this.year.meses) {
            const title = this.page.create("h2");
            this.page.addText(title, mes.nome);
            this.page.elementPull(title, this.panel);

            const tableCreation = new Table("tableStyle");
            tableCreation.addRow('th', ["Categoria", "Valor"]);

            for (const lancamento of mes.lancamentos) {
                tableCreation.addRow('td', [lancamento.categoria, moneyFormat(lancamento.isNumberNeg())], lancamento.tipo);
            }

            tableCreation.addRow('th', ['Rendimentos', moneyFormat(mes.detalhesDoMes.rendimentos)]);
            tableCreation.addRow('th', ['Juros', moneyFormat(mes.detalhesDoMes.juros)]);
            tableCreation.addRow('th', ['Total', moneyFormat(mes.detalhesDoMes.saldo)]);

            this.panel.appendChild(tableCreation.element);
        }
    }

    clearForm() {
        document.getElementById("mes").value = "";
        document.getElementById("tipo").value = "";
        document.getElementById("valor").value = "";
        document.getElementById("categoria").value = "";
    }

    giveOptionsToForm() {
        const monthList = this.year.arrMeses("names");
        this.form.optionsPull(monthList, "mes");
        this.form.optionsPull(["Receita", "Despesa"], "tipo");
    }

    displayConstruction() {
        this.panel.innerText = "";
        this.page.elementPull(this.panel, this.app);
        this.graphGenerate();
        this.pullTableElements();
        this.clearForm();
    }

    formAction() {
        const data = this.form.receiveInput();
        this.year.adicionarLancamento(data[0], new Lancamento(data[1].toLowerCase(), Number(data[2]), data[3]));
        this.year.calcularSaldo();
        this.displayConstruction();
    }

    button() {
        document.getElementById("botao").addEventListener("click", this.formAction.bind(this));
    }


    render() {
        this.giveOptionsToForm();
        this.displayConstruction();
        this.button();
    }
}