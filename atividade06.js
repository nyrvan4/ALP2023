let num1 = Number(prompt("Digite o 1° número"));
let num2 = Number(prompt("Digite o 2° número"));
let num3 = Number(prompt("Digite o 3° número"));

if(num1 > num2 && num1 > num3){
    document.write(`O maior número é ${num1}`)
}
else if(num2 > num1 && num2 > num3){
    document.write(`O maior número é ${num2}`)
}
else if(num3 > num1 && num3 > num2){
    document.write(`O maior número é ${num3}`)
}
else{
    document.write(`Todos são iguais`)
}
