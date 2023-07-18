const chart = new Chart();
chart.render(ano2023.arrMeses("graphProportion"), ano2023.arrMeses("names"));

const form = new Form();
form.addLancamento(ano2023.arrMeses("names"));

console.log(ano2023.arrMeses("graphProportion"))