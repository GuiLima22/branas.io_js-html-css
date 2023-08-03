const myBody = document.body;
const formulario = new HTML_Elements();

const title = formulario.create("h1", "title");
const div_form = formulario.create("div", "form-lancamento");
const div_app = formulario.create("div", "app")

const selectMonth = formulario.createSelectWithOptions("mes", "mes", ["Mes"], "mes");
const selectType = formulario.createSelectWithOptions("tipo", "tipo", ["Tipo"], "tipo");
const inputValue = formulario.createInput("valor", "number", "Valor");
const inputCategory = formulario.createInput("categoria", "text", "Categoria");
const formButton = formulario.create("button", "botao")

formulario.addText(title, "Finanças Pessoais"); 
formulario.addText(formButton, "Adicionar Lançamento"); 

formulario.elementPull(div_form, selectMonth);
formulario.elementPull(div_form, selectType);
formulario.elementPull(div_form, inputValue);
formulario.elementPull(div_form, inputCategory);
formulario.elementPull(div_form, formButton);

formulario.elementPull(myBody, title);
formulario.elementPull(myBody, div_form);
formulario.elementPull(myBody, div_app);

const placeholderMes = document.getElementById("mes").options[0];
placeholderMes.value = "";
placeholderMes.selected = true;

const placeholderTipo = document.getElementById("tipo").options[0];
placeholderTipo.value = "";
placeholderTipo.selected = true;

const display = new Display();
display.render();