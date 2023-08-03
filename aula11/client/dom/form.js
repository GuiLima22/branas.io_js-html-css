class Form {
    receiveInput() {
        const month = document.getElementById("mes").value;
        const type = document.getElementById("tipo").value;
        const value = document.getElementById("valor").value;
        const category = document.getElementById("categoria").value;
        return [month, type, value, category];
    }

    optionsPull(choices, id) {
        for (const choice of choices) {
            const monthInput = document.getElementById(id);
            const option = document.createElement("option");
            option.text = choice;
            monthInput.appendChild(option);
        }
    }
}