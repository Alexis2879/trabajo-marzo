//Ahoa vamos a ver como podemos utilizar la libreria que acabamos de instalar
//! La forma antigua en la cual usabamos una libreria es usando require
//* const dateFormat = requiere("date-format");
//! el "nuevo"  standart es usando import
import format from "date-format";

// Luego de importar el format podemos utilizarlo
const fechaActual = new Date();
const fechaFormateada = format.asString("dd-MM-yyyy", fechaActual);
console.log(fechaFormateada);
