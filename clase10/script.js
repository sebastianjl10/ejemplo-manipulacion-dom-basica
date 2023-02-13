const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input")

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = "Patito <br> Feo";
h1.innerText = "Patito <br> Feo";
console.log(h1.getAttribute("class"));
h1.setAttribute("class", "rojo");

input.value = "456" //cambiar el valor del value desde js y no desde HTML

const img = document.createElement("img"); //crear un elemento html desde js
img.setAttribute("src", "https://image.spreadshirtmedia.net/image-server/v1/products/T1600A1PA5077PT10X10Y13D192301745W3830H3197/views/1,width=378,height=378,appearanceId=1,backgroundColor=F2F2F2/caricatura-de-tortuga.jpg");
console.log(img);

pid.appendChild(img);
