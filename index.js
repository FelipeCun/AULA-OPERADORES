//Exercício 1:
/*
//A
let temperK = (77 - 32) * (5/9) + 273.15;
console.log("Temperatura em °K é: " + temperK);

//B
let temperF = (80) * (9/5) + 32;
console.log("Temperatura em °F é: " + temperF);

//C
let temper1 =  (30) * (9/5) + 32;
let temper2 = (temper1 - 32) * (5/9) + 273.15;
console.log("Temperatura em °K é: " + temper2 + " Temperatura em °F é: " + temper1);

//D
let celsius = parseFloat(prompt("Insira o valor em °C: "));
let temper3 = (celsius) * (9/5) + 32;
console.log("A temperatura em °C é: " + temper3);
*/

//Exercício 2:

//A
/*
let valorConta = parseFloat(prompt("Quantos quilowatt-hora você utilizou neste mês? "));
let valorWatt = 0.05;

alert("Você já gastou R$ " + valorConta * valorWatt + " de luz elétrica neste mês.");
*/

//B
/*
let quantWatts = parseFloat(prompt("Quantos quilowatt-hora você utilizou neste mês? "));
let valorWatt = 0.05;
let somaValor = quantWatts * valorWatt
let percent = (quantWatts * valorWatt) * 0.85;

alert("Você já gastou R$ " + quantWatts * valorWatt + " de luz elétrica neste mês." + "\nE terá um desconto de 15% devido ao seu cadastro positivo." +" \nSua conta de luz agora é de: " + percent + ".");
*/

//Execício 3:

prompt("Digite seu nome: ");

let resultado1 = parseFloat(prompt("Digite sua nota: "));
let resultado2 = parseFloat(prompt("Digite sua nota: "));
let resultado3 = parseFloat(prompt("Digite sua nota: "));

let somaNotas = (resultado1 + resultado2 + resultado3) / 3;

mediaAprovar = somaNotas >= 6;


console.log("Sua média de notas foi: " + somaNotas + ". Você foi aprovado? " + mediaAprovar);





