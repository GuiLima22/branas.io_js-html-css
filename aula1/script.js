function areaTriangulo(base, altura) {
    const area = (base * altura) / 2;
    return `A área do triângulo que possui base ${base} e altura ${altura} é ${area}`
};

function areaRetangulo(base, altura) {
    const area = (base * altura);
    if (base == altura) {
        return `A área do quadrado que possui lado ${altura} é ${area}`
    }
    else {
        return `A área do retângulo que possui base ${base} e altura ${altura} é ${area}`
    }
};

const base1 = 3;
const altura1 = 5;

const base2 = 9;
const altura2 = 16;

console.log(areaTriangulo(base1, altura1));
console.log(areaRetangulo(base2, altura2));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers);

const lancamentosJaneiro = [
    { tipo: "receita", valor: 3000 },
    { tipo: "despesa", valor:  100 },
    { tipo: "despesa", valor:  500 },
    { tipo: "despesa", valor:  400 },
    { tipo: "despesa", valor:  300 },
    { tipo: "receita", valor: 5000 },
    { tipo: "receita", valor: 1000 }
];

const lancamentosFevereiro = [
    { tipo: "receita", valor: 3000 },
    { tipo: "despesa", valor:  100 },
    { tipo: "despesa", valor:  500 },
    { tipo: "despesa", valor:  400 },
    { tipo: "despesa", valor: 2000 }
];

function calculoSaldo(lancamentos) {
    let saldo = 0

    for (lancamento of lancamentos) {
        if (lancamento.tipo === 'receita') {
            saldo += lancamento.valor
        }
        if (lancamento.tipo === 'despesa') {
            saldo -= lancamento.valor
        }
    }

    return saldo
};

console.log(calculoSaldo(lancamentosJaneiro));


function avisoSaldo(saldo) {
    if (saldo > 0) {
        return (`seu saldo é de ${saldo}`)
    }
    else if (saldo == 0) {
        return (`você não está em dívida, mas também não há saldo`)
    }
    else {
        return (`sua despeza é de ${saldo}`)
    }
};

console.log(avisoSaldo(calculoSaldo(lancamentosJaneiro)));
console.log(avisoSaldo(calculoSaldo(lancamentosFevereiro)));