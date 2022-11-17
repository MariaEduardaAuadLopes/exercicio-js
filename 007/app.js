function Somar(){

    let numero1 = document.getElementById('n1').value
    let numero2 = document.getElementById('n2').value
    let numero3 = document.getElementById('n3').value
    

    let numero4=  (parseFloat(numero1) + parseFloat (numero2) + parseFloat (numero3)) / 3

    document.getElementById('resposta').innerHTML = numero4
}