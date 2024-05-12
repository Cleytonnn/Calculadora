function calcular(){
    let peso=document.forms.tPeso.value;
    let altura=document.forms.tAlt.value;
    let imc;
    let situacao = "";

    if (peso && altura) {
        imc = peso / (altura * altura);
        imc = parseInt(imc * 100) / 100;
    
    if (imc < 18.5){
        situacao = "De acordo com seu IMC voce está Abaixo do Normal."
    } else if (imc < 24.9) {
        situacao = "Seu Indice de Massa Corporal está Normal."
    } else if (imc < 29.9){
        situacao = "De acordo com seu IMC voce está com Sobrepeso."
    } else if (imc < 34.9){
        situacao = "De acordo com seu IMC voce está com Obesidade Grau I."
    } else if (imc < 39.9){
        situacao = "De acordo com seu IMC voce está com Obesidade Grau II."
    } else { 
    situacao = "De acordo com seu IMC voce está com Obesidade Grau III."
}
document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc + ". " + situacao;
    }
}
