//COMILLAS INVERTIDAS Y CONTENIDO DINAMICO
let nombre = `David`;
let edad = 20;
let imagen = "/imagenes/A.png";
let añoActual = new Date().getFullYear()
let resultado = "mi nombre es" + nombre;
let resultado2 = `mi nombre es ${nombre} y mi edad son ${edad} años y naci en el año ${calcularAño()}`;  //las comillas invertidas permiten agergar la variable dentro dentro del string

function calcularAño(){
    return añoActual - edad; 
}

document.querySelector("body").innerHTML=`
<div class = "info">
    <h1>${resultado2}<h1>
</div>
<div class = "imagen">
    <img src="/imagenes/A.png"
</div>
`
