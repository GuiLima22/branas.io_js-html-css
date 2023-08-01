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