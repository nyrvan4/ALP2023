let nota1 = Number(prompt("Digite sua primeira nota:"));

let nota2 = Number(prompt("Digite sua segunda nota:"));

let nota3 = Number(prompt("Digite sua terceira nota:"));

let media = (nota1 + nota2 + nota3)/3
 if (media >= 7){
     document.write(`Você foi aprovado`)
 } else if (media <7 && media >= 5){
    document.write(`Você está de recuperação`)
 } else{
    document.write(`Você foi reprovado`)
 }