//Ejercicio programación 2
var years = [1960, 1945, 1990, 2008, 1919, 2010];
var ages = [];

for (var i = 0; i < years.length; i++ ) {
    var age = 2018 - years[i];
    ages.push(age);
}
for ( i = 0 ; i < ages.length ; i++) {
    if (ages[i] < 18 ) {
        console.log('Perrito no es mayor de edad, pues tiene '+ages[i]+' años');
    } else {
        console.log('Perrito ya está viejo, tiene '+ages[i]+' años');
    }
}