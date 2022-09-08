
let nombre;
let primeranota;
let segundanota;
let promedio;
let counter = 0;

function profesor (nombre, edad, materia){
    this.nombre = nombre;
    this.edad = edad;
    this.materia = materia;
};
var profesor1 = new profesor("Santino",18,"Matematica");
console.log(profesor1);


while (counter < 3){
nombre = prompt("Nombre del alumno");
primeranota = parseFloat(prompt("Primer nota"));
segundanota = parseFloat(prompt("Segunda nota"));
promedio = (primeranota+segundanota)/2;

if(promedio >=6){
    alert("El promedio del alumno "+nombre+" esta aprobado con una nota de "+promedio+". Felicitaciones!")
}else{
    alert("El promedio de "+nombre+" esta desaprobado")
}
console.log(nombre+" tuvo un promedio final de "+ promedio)
counter++;
}

let alumnos = ["La cantidad total de alumnos son "+counter]
console.log(alumnos); 


let personas = document.getElementById("profesores");
let profesores = ["Los encargados de este curso fueron: Santino, Pedro, Ramiro, Javier"];
for (const profesor of profesores){
    let li = document.createElement ("li");
    li.innerHTML = profesor
    personas.appendChild(li);
}

let Matematica = document.createElement ("h1");
titulo.innerHTML = "<h1>Estas notas pertenecieron a la clase de matematicas</h1>";
document.body.append (Matematica);

let MeGusta = 
document.getElementById("btnMeGusta")
MeGusta.addEventListener("click", respuestaClick)
function respuestaClick (){
    alert("A la persona le gusto esta pagina. Gracias por su opinion!")
}

