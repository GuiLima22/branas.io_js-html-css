create schema financas_pessoais;

create table financas_pessoais.lancamento (
    id_lancamento serial primary key,
    mes text,
    categoria text,
    tipo text,
    valor numeric
);

insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Janeiro', 'Salário', 'receita', 3000);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Janeiro', 'Aluguel', 'despesa', 1000);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Janeiro', 'Conta de Luz', 'despesa', 200);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Janeiro', 'Conta de Água', 'despesa', 100);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Janeiro', 'Internet', 'despesa', 100);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Janeiro', 'Transporte', 'despesa', 300);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Janeiro', 'Lazer', 'despesa', 300);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Janeiro', 'Alimentação', 'despesa', 500);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Janeiro', 'Condomínio', 'despesa', 300);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Janeiro', 'Farmácia', 'despesa', 100);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Janeiro', 'Freela', 'receita', 3000);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Fevereiro', 'Salário', 'receita', 3000);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Fevereiro', 'Aluguel', 'despesa', 1200);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Fevereiro', 'Conta de Luz', 'despesa', 250);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Fevereiro', 'Conta de Água', 'despesa', 100);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Fevereiro', 'Internet', 'despesa', 100);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Fevereiro', 'Transporte', 'despesa', 500);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Fevereiro', 'Alimentação', 'despesa', 1000);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Fevereiro', 'Condomínio', 'despesa', 400);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Fevereiro', 'Freela', 'receita', 5000);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Março', 'Salário', 'receita', 4000);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Março', 'Aluguel', 'despesa', 1200);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Março', 'Conta de Luz', 'despesa', 200);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Março', 'Conta de Água', 'despesa', 100);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Março', 'Internet', 'despesa', 200);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Março', 'Transporte', 'despesa', 500);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Março', 'Lazer', 'despesa', 800);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Março', 'Alimentação', 'despesa', 1000);
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) values('Março', 'Condomínio', 'despesa', 400);