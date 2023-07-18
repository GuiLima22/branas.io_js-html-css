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

    arrMeses(prop){
        const arr = [];
        const highest = this.maiorSaldo();
        for (const mes of this.meses){
            if(prop == "names"){
                arr.push(mes.nome);
            }
            else if (prop == "values"){
                arr.push(mes.detalhesDoMes.saldo);
            }
            else if (prop == "graphProportion"){
                arr.push(mes.detalhesDoMes.saldo * 200 / highest);
            }
        }

        return arr;
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


