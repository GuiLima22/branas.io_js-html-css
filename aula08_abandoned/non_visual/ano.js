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