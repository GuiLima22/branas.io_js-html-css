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