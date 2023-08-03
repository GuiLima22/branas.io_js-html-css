class HTML_Elements {
    create(element, id) {
        const newElement = document.createElement(element);
        if (id) {
            newElement.id = id;
        }
        return newElement;
    }

    addClass(where, what) {
        return where.className = what;
    }

    takeById(id) {
        return document.getElementById(id);
    }

    addText(where, what) {
        return where.innerText = what;
    }

    elementPull(where, what) {
        return where.appendChild(what);
    }

    removeFirstChild(where) {
        if (where.firstChild) {
            return where.firstChild.remove();
        }
    }

    createSelectWithOptions(select_id, select_name, options, options_id) {
        const selectCreated = document.createElement("select");
        selectCreated.name = select_name;
        selectCreated.id = select_id;

        for (let i = 0; i < options.length; i++) {
            const optionCreated = document.createElement("option");
            optionCreated.innerText = options[i];
            if (options_id) {
                optionCreated.id = options_id + `${i + 1}`;
            }
            selectCreated.appendChild(optionCreated);
        }

        return selectCreated;
    }

    createInput(id, type, placeholder) {
        const myInput = document.createElement("input");
        myInput.id = id;
        myInput.type = type;
        myInput.placeholder = placeholder;
        return myInput;
    }
}