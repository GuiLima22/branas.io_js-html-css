class Table {
    constructor(className) {
        this.element = document.createElement('table');
        this.element.className = className;
    }

    addRow(type, values, className) {
        const tr = document.createElement('tr');
        if (className == 'despesa') {
            tr.className = className;
        } else if (className == 'receita') {
            tr.className = className;
        }

        for (const value of values) {
            const td = document.createElement(type);
            td.innerText = value;
            tr.appendChild(td);
        }

        this.element.appendChild(tr);
    }

}