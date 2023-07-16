function arredondar(valor) {
    return Math.round(valor * 100) / 100
}

function moneyFormat(valor){
    return new Intl.NumberFormat("pt-br", { currency: "BRL", style: "currency"}).format(valor);
}

function addDocElements(element, text, ref, classDef) {
    const constant = document.createElement(element);
    constant.innerText = text;
    ref.appendChild(constant);
    constant.className = classDef;
}

function inputCleaner(array){
    for(const item of array){
        item.value = "";
    }
}
