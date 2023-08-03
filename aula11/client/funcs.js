function arredondar(valor) {
    return Math.round(valor * 100) / 100
}

function moneyFormat(valor){
    return new Intl.NumberFormat("pt-br", { currency: "BRL", style: "currency"}).format(valor);
}

function toTitleCase(string){
    const firstLetter = string.slice(0, 1).toUpperCase();
    const rest = string.slice(1).toLowerCase();
    return firstLetter + rest;
}