function Realizaroperacoes(){
    let valor1 = document.getElementById('n1').value
    let valor2 = document.getElementById('n2').value

    let total1= parseFloat(valor1) + parseFloat(valor2)
    document.getElementById('resultado').innerHTML = total  
    let total2= parseFloat(valor1) - parseFloat(valor2)
    document.getElementById('resultado').innerHTML = total  
    let total3= parseFloat(valor1) * parseFloat(valor2)
    document.getElementById('resultado').innerHTML = total  
    let total4= parseFloat(valor1) / parseFloat(valor2)
    document.getElementById('resultado').innerHTML = total  




} 

