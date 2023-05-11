let nota1 = Number(prompt("Digite sua primeira nota:"));

let nota2 = Number(prompt("Digite sua segunda nota:"));

if ((nota1 + nota2) / 2 >= 7) 
{
    document.write (`Você foi aprovado`);
}if ((nota1 + nota2) / 2 < 7)
{
    document.write (`Você foi reprovado`);
}
