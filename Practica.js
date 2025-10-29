//VARIABLES
let edad= 20;//Puede cambiar
var vivo= true;//Puede cambiar
//no es recomedable usar
const NOMBRE= "David"; //Le damos un valor y no puede cambiar
//incrementa seguridad
//evita errores
//facilita depuracion
//mejora rendimiento, prq son datos inmutables

//NOMBRAR BIEN LAS VARIABLES
let miNombre= "David" //camelCase
let Minombre= "David" //SnakeCase
let mi_nombre= "David" //kebab_case
let MI_NOMBRE= "David"//UPER_CASE
//solo empieza con letras y sin espacios

//TIPOS DE VARIABLES
let imagen={nombre: "Black"} //Objeto
console.log(imagen.nombre)

let puntos;  //Undefined/Variable=bull
let edad2= 20; //Number
let nota= 4.3; 
let nombre2= "David" //String 
let vida= false; //Boolean
let nombres= ["David", "Cristian"] //Arrays
console.log(nombres[1])

let usuarios= [
    {nombre: "David", edad: 20, vida: true},
    {nombre: "Juan", edad: 20, vida: false}
] //Arrays de objetos
console.log(usuarios[0].nombre)


//EJERCICIO #1
let nota2 = 5;
subirNota();
console.log(nota2+1)        //IMPRIME 6 "Es NAN, prq no se le ha dado valor a nota2"

    function subirNota(){
        let nota2 = 5;
        nota2 = 9;
        console.log(nota2);     //IMPRIME 5 "Es 9, prq el nota2 se reescribe el la funcion"
        console.log(typeof nota2);      //IMPRIME NUMBER
    }


//EJERCICIO #2
let nota3 = 0;
subirNota2();
console.log(extra);      //NAN "7, prq extra se vuelve global"
console.log(PUNTOS);     //10 "Error, prq la constante muere en la funcion, no se vuelve global"

    function subirNota2(){
        nota3 = 2;
        extra = 7;
        console.log(nota3);      //IMPRIME 2
        const PUNTOS = 10;
    }



//EJERCICIO #3
console.log(miNombre2);     //IMPRIME ERROR "Undefinded, prq no esta definido todavia"
let color = "Rojo";
if (true){
    var miNombre2 = "David";
    let color = "Cafe"
}
console.log(miNombre2)       //IMPRIME David
console.log(color)      //IMPRIME ROJO O ERROR

