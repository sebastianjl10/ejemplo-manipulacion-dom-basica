const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

form.addEventListener("submit", sumarInputValues); //no se le coloca los parentesis a las funciones que colocamos SOLO el nombre

function sumarInputValues(event) {
    event.preventDefault();
  const sumaImputs = Number(input1.value) + Number(input2.value); //transformamos los strings en numeros y los guardamos en una variable
  pResult.innerText = "Resultado: " + sumaImputs;
}