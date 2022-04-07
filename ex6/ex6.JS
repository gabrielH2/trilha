const nome = document.getElementById("ldn")
const sobre = document.getElementById("bnt")
const atribuir = document.getElementById("tbh")

function enviar(){
    alert("olá, "+ nome.value +" "+sobre.value);
    nome.value=""
    sobre.value=""
}