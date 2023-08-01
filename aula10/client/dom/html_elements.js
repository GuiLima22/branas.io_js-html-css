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

    elementPull(what, where) {
        return where.appendChild(what);
    }

    removeFirstChild(where) {
        if (where.firstChild) {
            return where.firstChild.remove();
        }
    }
}