alert(`Bievenido`);

const conv = 3.785;

let PrecioGalon = prompt("¿Cual es el precio del galon hoy?");
let CantidadLitros = prompt("¿Cuantos litros produjo hoy?");
let PGalon = parseFloat(PrecioGalon);
let litros = parseInt(CantidadLitros);
let conversion = conv*litros;
let ganancia = conversion*PGalon;

console.log("Tipos de datos: ");
console.log("tipo de dato de precio de galon: "+ typeof PGalon);
console.log("tipo de dato de cantidad en litros: "+ typeof litros);
console.log("tipo de dato de cantidad en galon: "+ typeof conv);
console.log("tipo de dato de ganancia : "+ typeof ganancia);

console.log(`Usted tiene en galones: ${conversion} galones`);
console.log(`La ganancia del dia con el precio del galon(${PGalon}) es de ${ganancia} nuevos soles`);

