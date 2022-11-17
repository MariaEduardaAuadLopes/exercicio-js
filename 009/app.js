function Exibir(){
    let nome = document.getElementById('nome1').value
    let sobrenome = document.getElementById('sobrenome2').value
    
    let saudacao =  (nome) + " " + (sobrenome)
    
    document.getElementById('resultado').innerHTML = "Olá " + saudacao
}


