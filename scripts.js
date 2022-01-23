let numerouno = 4;
let numerodos = 8;
let suma = numerouno + numerodos;

function sum(numerouno, numerodos) {
    this.numerouno = numerouno;
    this.numerodos = numerodos;
    return numerouno + numerodos;
}

console.log(suma);
console.log(sum(2, 3));

function saludar(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    return 'Hola, mi nombre es ' + nombre + ' ' + apellido + ', un gusto en conocerte';
}

console.log(saludar('Nahuel', 'Alvez'));

function multiplicar(numerouno, numerodos) {
    this.numerouno = numerouno;
    this.numerodos = numerodos;
    return numerouno * numerodos;
}

console.log(multiplicar(2, 3))

/* Comprobación de edad */

function comprobacionEdad(edad) {
    this.edad = edad;
    let mayoriaEdad = 18;
    if (edad >= mayoriaEdad) {
        return 'Sos mayor de edad, ahora sí podrías hacer prácticamente cualquier cosa que no sea reprochable legalmente'
    } else {
        return 'Sos menor de edad, andá a tomar la chocolatada, cuando cumplas ' + mayoriaEdad + ' nos vemos.'
    }
}

console.log(comprobacionEdad(21));



