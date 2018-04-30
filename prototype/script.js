//Function constructor

var juan = {
  nombre: 'Juan',
  fechaNacimiento: 1990,
  trabajo: 'Profesor'
};

var Persona = function(nombre, fechaNacimiento, trabajo) {
  this.nombre = nombre;
  this.fechaNacimiento = fechaNacimiento;
  this.trabajo = trabajo;
  this.calcularEdad = function() {
    console.log(2018 - fechaNacimiento);
  };
}

var alicia = new Persona('Alicia', 1982, 'Musico');

alicia.calcularEdad();
