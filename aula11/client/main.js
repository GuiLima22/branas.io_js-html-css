const myBody = document.body;
const formulario = new HTML_Elements();

const arrElementsBody = ["h1", "div", "div"];
const arrElementsBody_id = ["title", "form-lancamento", "app"];
const arrDisplay = [];

for (let i = 0; i < arrElementsBody.length; i++){
    arrDisplay.push(formulario.create(arrElementsBody[i], arrElementsBody_id[i]));
}

const arrForm = [];

const arrSelect = ["mes", "tipo"];
for (let i = 0; i < arrSelect.length; i++){
    const element = formulario.createSelectWithOptions(arrSelect[i], arrSelect[i], [toTitleCase(arrSelect[i])], arrSelect[i]);
    arrForm.push(element);
}

const arrElementsInput_id = ["valor", "categoria"];
const arrElementsInput_type = ["number", "text"];

for (let i = 0; i < arrElementsInput_id.length; i++){
    const element = formulario.createInput(arrElementsInput_id[i], arrElementsInput_type[i], toTitleCase(arrElementsBody_id[i]));
    arrForm.push(element);
}

const formButton = formulario.create("button", "botao");
arrForm.push(formButton);

formulario.addText(arrDisplay[0], "Finanças Pessoais"); 
formulario.addText(formButton, "Adicionar Lançamento");

for (const element of arrForm){
    formulario.elementPull(arrDisplay[1], element);
}

for (const element of arrDisplay){
    formulario.elementPull(myBody, element);
}

const placeholderMes = document.getElementById("mes").options[0];
placeholderMes.value = "";

const placeholderTipo = document.getElementById("tipo").options[0];
placeholderTipo.value = "";

const display = new Display();
display.render();