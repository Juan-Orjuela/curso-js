//Function constructor

/*
En este caso se crea una copia de la funcion en cada instancia
var Persona = function(nombre, fechaNacimiento, trabajo) {
  this.nombre = nombre;
  this.fechaNacimiento = fechaNacimiento;
  this.trabajo = trabajo;
  this.calcularEdad = function() {
    console.log(2018 - fechaNacimiento);
  };
}
*/

//Modelo mas eficiente
var Persona = function(nombre, fechaNacimiento, trabajo) {
  this.nombre = nombre;
  this.fechaNacimiento = fechaNacimiento;
  this.trabajo = trabajo;
}

Persona.prototype.calcularEdad = function() {
    console.log(2018 - this.fechaNacimiento);
};

var juan = new Persona('Juan S', 1990, 'Diseñador');
var tavo = new Persona('Gustavo', 1978, 'Escritor');
var alicia = new Persona('Alicia', 1982, 'Musico');

juan.calcularEdad();
tavo.calcularEdad();
alicia.calcularEdad();

//Otro método para crear objetos y herencia object.create
var personProto = {
  calcularEdad : function() {
     console.log(2018 - this.fechaNacimiento);
  }
};

var regina = Object.create(personProto, {
  nombre : {value: 'Regina'},
  fechaNacimiento : {value: 1949},
  trabajo : {value : 'Docente'}
});
