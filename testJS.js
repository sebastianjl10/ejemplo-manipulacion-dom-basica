//punto 4 variables,  Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:Nombre completo (nombre y apellido),Dinero real (dinero ahorrado menos deudas)

var nombre = "Sebastian";
var apellido = "Jimenez";
var userName = "sebasjl";
var edad = 26;
var email = "sebasjilo@hotmail.com";
var esMayorDeEdad = true;
var ahorros = 20000;
var deudas = 25000;

var nombreCompleto = (nombre + " " + apellido);
console.log(nombreCompleto);

var dineroReal = (ahorros - deudas);
console.log(dineroReal);

//punto 2 funciones, Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:


function nombreCompleto(nombre, apellido) {
    return nombre + " " + apellido; 
}

function presentacion(nombre, apellido, userName) {
    const completeName = nombreCompleto(nombre, apellido);
    return ("Mi nombre es " + completeName + ", pero prefiero que me digas " + userName + ".")
}

presentacion("victor", "jimenez", "vajjimenez") //me retornara la respuesta

//punto 1 condicionales: ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

//IF (else y else if), Switch El codicional if (con else y else if) nos permite hacer validaciones completamente distintas en cada validación o condional. En cambio, en el switch todos los cases se comparan con la misma variable o condición que definimos en el switch.
//¿Puedo combinar funciones y condicionales?

//Sí. Las funciones pueden encapsular cualquier bloque de código, incluyendo condicionales.

//punto 2 condicionales, Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

var tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien mas pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log("No tienes ninguna suscripcion")
}

//punto 3 condicionales, Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

var typeSuscripción = [
    "Free",
    "Basic", 
    "Expert", 
    "ExpertPlus"
];

var infoSuscripcion = [
    "Solo puedes tomar los cursos gratis",
    "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Puedes tomar casi todos los cursos de Platzi durante un año",
    "Tú y alguien mas pueden tomar TODOS los cursos de Platzi durante un año"
]

function userSuscripcion(suscripcion) {
    for (var i = 0; i < typeSuscripción.length; i++) {
        if (suscripcion == typeSuscripción[i]) {
            console.log(infoSuscripcion[i])
        }
    }
    
}

userSuscripcion("ExpertPlus")// o la que quiera comprobar


// punto 2 ciclos, Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}//convertir a while

var i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    ++i;
}

var i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

//punto 3 ciclos, Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
function validar (){
    var respuesta = prompt("¿cuanto es 2+2?");

    if (respuesta == "4") {
        alert("Felicitaciones🎉🎉");
    } else {
        alert("Vuelve a intentarlo 😒");
        validar();
    }
}

// punto 2 arrays, Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

var caballos = ["Rey", "Magnus", "Prodigio", "Tormento", "Mixtura"];

function imprimir (caballos) {
    return (caballos[0]);
}
imprimir(caballos);


//punto 3 array Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

var caballos = ["Rey", "Magnus", "Prodigio", "Tormento", "Mixtura"];

function nombrarCaballos (caballo) {
    console.log(`${caballo}`);
}
for (var caballo of caballos) {
    nombrarCaballos(caballo);
}

//punto 4 Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

var miCaballo = {
    nombre: "ReyMagnus",
    color: "Castaño",
    edad: 20
}

function nombrarCaballo(caballo) {
    for (let key in caballo) {
        console.log(caballo[key]);
    }
}
nombrarCaballo(miCaballo);

/////////     punto4              //segunda solucion

var miCaballo = {
    nombre: "ReyMagnus",
    color: "Castaño",
    edad: 20
}

const miCaballoArr = Object.values(miCaballo);//object.values me devuelve los valores de las propiedades del objeto (en array), object.keys me devuelve los nombres de las propiedades (en array), hay muchas mas

function nombrarMiCaballo (miCaballoArr) {
    for (let i = 0; i < miCaballoArr.length; i++) {
    console.log(miCaballoArr[i]);
    }
}


