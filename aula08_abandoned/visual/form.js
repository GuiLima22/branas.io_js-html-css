class Form {
    receiveInput() {
        const month = document.getElementById("mes");
        const type = document.getElementById("tipo");
        const value = document.getElementById("valor");
        const category = document.getElementById("categoria");
        ano2023.adicionarLancamento(month.value, new Lancamento(type.value, Number(value.value), category.value));
        ano2023.calcularSaldo();
        chart.render();
        month.value = "";
        type.value = "";
        value.value = "";
        category.value = "";
    }

    monthPush(monthList) {
        for (const nomeMes of monthList) {
            const monthInput = document.getElementById("mes");
            const option = document.createElement("option");
            option.text = nomeMes;
            monthInput.appendChild(option);
        }
    }

    addLancamento(monthList) {
        this.monthPush(monthList);

        const botao = document.getElementById("botao");
        botao.addEventListener("click", this.receiveInput);
    }

}