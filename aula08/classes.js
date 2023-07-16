class Lancamento {
    constructor(tipo, valor, categoria) {
        if (tipo !== 'despesa' && tipo !== 'receita') {
            throw new Error('parameter "tipo" cannot be different than "despesa" or "receita"');
        };
        if (valor < 0) {
            throw new Error('parameter "valor" cannot be lower than 0');
        };
        if (categoria === '') {
            throw new Error('you must define a "categoria"');
        };
        this.tipo = tipo;
        this.valor = valor;
        this.categoria = categoria;
    }

    isNumberNeg() {
        //     if (this.tipo === 'despesa') {
        //         return this.valor * -1
        //     }
        //     else {
        //         return this.valor
        //     }
        // -------------------------------------------
        //      operador ternário
        return (this.tipo === 'despesa') ? this.valor * -1 : this.valor;
    }
}


class Mes {
    constructor(nome, saldoInicial) {
        if (nome === "") {
            throw new Error('"nome" cannot be empty');
        }
        this.nome = nome;
        this.saldoInicial = saldoInicial;
        this.lancamentos = [];
    }

    adicionarLancamentos(lancamento) {
        this.lancamentos.push(lancamento);
    }

    calcularSaldo() {
        this.detalhesDoMes.saldo += this.saldoInicial;
        for (const lancamento of this.lancamentos) {
            if (lancamento.tipo === "receita") {
                this.detalhesDoMes.saldo += arredondar(lancamento.valor);
                this.detalhesDoMes.receitas += arredondar(lancamento.valor);
            }
            if (lancamento.tipo === "despesa") {
                this.detalhesDoMes.saldo -= arredondar(lancamento.valor);
                this.detalhesDoMes.despesas += arredondar(lancamento.valor);
            }
        }
    }

    calcularPercentualDespesas() {
        for (const lancamento of this.lancamentos) {
            if (lancamento.tipo === "despesa")
                this.detalhesDoMes.percentualDespesas.push({ percentual: arredondar(lancamento.valor / this.detalhesDoMes.despesas * 100), categoria: lancamento.categoria })
        }
    }

    calcularJuros() {
        this.detalhesDoMes.juros = arredondar(this.detalhesDoMes.saldo * 0.1)
        this.detalhesDoMes.saldo -= this.detalhesDoMes.juros
    }

    calcularRendimentos() {
        this.detalhesDoMes.rendimentos = arredondar(this.detalhesDoMes.saldo * 0.005)
        this.detalhesDoMes.saldo += this.detalhesDoMes.rendimentos
    }

    definirJurosOuRendimento() {
        if (this.detalhesDoMes.saldo < 0) {
            this.calcularJuros();
        }
        if (this.detalhesDoMes.saldo > 0) {
            this.calcularRendimentos();
        }
    }

    calcularFinancas() {
        this.detalhesDoMes = { saldo: 0, juros: 0, rendimentos: 0, receitas: 0, despesas: 0, percentualDespesas: [] };
        this.calcularSaldo();
        this.calcularPercentualDespesas();
        this.definirJurosOuRendimento();
    }

}

class Ano {

    constructor(ano) {
        this.ano = ano;
        this.meses = [];
    }

    adicionarMes(mes) {
        this.meses.push(mes)
    }

    adicionarLancamento(nomeMes, lancamento) {
        for (const mes of this.meses) {
            if (mes.nome === nomeMes) {
                mes.adicionarLancamentos(lancamento);
                break;
            }
        }
    }

    calcularSaldo() {
        let saldoInicial = 0;
        for (const mes of this.meses) {
            mes.saldoInicial = saldoInicial;
            mes.calcularFinancas();
            saldoInicial = mes.detalhesDoMes.saldo;
        }
    }

    maiorSaldo() {
        let highest = 0
        for (const mes of this.meses) {
            if (mes.detalhesDoMes.saldo > highest) {
                highest = mes.detalhesDoMes.saldo
            }
        }
        return highest;
    }
}

class Table {
    constructor(className) {
        this.element = document.createElement('table');
        this.element.className = className
    }

    addRow(type, values, className) {
        const tr = document.createElement('tr');
        if (className == 'despesa') {
            tr.className = className
        } else if (className == 'receita') {
            tr.className = className
        }

        for (const value of values) {
            const td = document.createElement(type);
            td.innerText = value;
            tr.appendChild(td);
        }

        this.element.appendChild(tr);
    }

}

class Graph {
    constructor() {
        this.element = document.createElement("div");
        this.element.className = 'grafico';
        this.cores = ["red", "blue", "green"];
    }

    addColumn(tower, description) {
        const column = document.createElement("div");
        column.className = "grafico-coluna";
        const color = document.createElement("div");
        color.className = "grafico-coluna-torre";
        color.style.height = tower;
        color.style.background = this.cores.pop();
        const monthName = document.createElement("div");
        monthName.className = "grafico-coluna-nome"
        monthName.innerText = description;
        column.appendChild(color);
        column.appendChild(monthName);
        this.element.appendChild(column);
    }
}

class Chart {
    render() {
        const app = document.getElementById("app");
        if (app.firstChild) {
            app.firstChild.remove();
        }

        const panel = document.createElement("div");

        const grafico = new Graph();
        for (const mes of ano2023.meses) {
            const displayTower = (mes.detalhesDoMes.saldo * 200) / ano2023.maiorSaldo();
            grafico.addColumn(displayTower, mes.nome);
        }
        panel.appendChild(grafico.element);

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

        app.appendChild(panel);
    }
}


class Form {
    receiveInput() {
        const month = document.getElementById("mes");
        const type = document.getElementById("tipo");
        const value = document.getElementById("valor");
        const category = document.getElementById("categoria");
        ano2023.adicionarLancamento(month.value, new Lancamento(type.value, Number(value.value), category.value));
        ano2023.calcularSaldo();
        chart.render();
        inputCleaner([month, type, value, category]);
    }

    monthPush() {
        for (const mes of ano2023.meses) {
            const monthInput = document.getElementById("mes");
            const option = document.createElement("option");
            option.text = mes.nome;
            monthInput.appendChild(option);
        }
    }

    addLancamento() {
        this.monthPush();

        const botao = document.getElementById("botao");
        botao.addEventListener("click", this.receiveInput);
    }

}