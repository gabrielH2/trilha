let n1 = document.getElementById('num1')
let n2 = document.getElementById('num2')
const res = document.getElementById('resul')

function ver() {
    res.innerHTML += `A soma dos valores: ${parseInt(n1.value) + parseInt(n2.value)}<br>`
    res.innerHTML += `A subtração dos valores: ${n1.value - n2.value}<br>`
    res.innerHTML += `A multiplicação dos valores: ${n1.value * n2.value}<br>`
    res.innerHTML += `A divisão dos valores: ${n1.value/n2.value}<br>`
    res.innerHTML += `A potenciação dos valores: ${Math.pow(n1.value, n2.value)}`
}