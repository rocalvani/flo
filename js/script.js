// // CONDICIONALES

// let color = prompt("Elegí un color");

// if (color) {
//   console.log("Elegiste el color " + color);
// } else {
//   alert("No elegiste ningún color");
// }

// let cantidadFlores = Number(prompt("¿Cuántas flores llevás?"));

// if (cantidadFlores == 0) {
//   console.log("no lleva flores");
// } else if (cantidadFlores < 12) {
//   console.log("lleva menos de 12");
// } else if (cantidadFlores == 12) {
//   console.log("lleva una docena");
// } else if (cantidadFlores < 24) {
//   console.log("lleva más de 12 pero menos de 24");
// } else {
//   console.log("lleva demasiadas flores");
// }

// if (color && cantidadFlores > 0) {
//   alert("Tu ramo tiene" + cantidadFlores + "flores de color" + color);
// } else {
//   alert("Tu pedido está incompleto");
// }

// // CICLO

// let ramoColor = prompt("¿Qué color NO querés en tu ramo?");

// switch (ramoColor) {
//   case "azul":
//     console.log("elegiste el color" + ramoColor);
//     break;
//   case "rojo":
//     console.log("elegiste el color " + ramoColor);
//     break;
//     case "violeta":
//       console.log("elegiste el color " + ramoColor);
//     break;
//     case "blanco":
//       console.log("elegiste el color " + ramoColor);
//     break;
//     case "amarillo":
//     console.log("elegiste el color " + ramoColor);
//     break;
//     case "rosa":
//       console.log("elegiste el color " + ramoColor);
//     break;
//     case "naranja":
//       console.log("elegiste el color " + ramoColor);
//     break;
//     case "negro":
//       console.log("elegiste el color " + ramoColor);
//     break;
//   default:
//     if (ramoColor="") {
//       alert("¿Estás seguro de querer todos los colores?")
//     }else {
//       alert("No elegiste un color válido.")
//     }
//     break;
// }

// let carrito = 0;
// let agregar = Number(prompt("¿Cuántos quiere agregar al carrito?"));

// do {
//   let total = carrito + agregar;
//   console.log("Usted tiene " + total + "productos en el carrito");
// } while ((carrito + agregar) < 3);


// for(let i=0; i<1; i++) {
//   mensaje = prompt("Ingrese un mensaje para la tarjeta del ramo.");
//   if (mensaje=="") {
//     console.log("usted no ha ingresado ningún mensaje.")
//   } else{
//     console.log("ingresaste un mensaje existosamente.");
//   }
  
// }

// // FUNCION

// function seleccion(flor) {
//   console.log("usted eligió una" + flor);
// }

// let flor = prompt("elija una flor");
// seleccion(flor);

// let cantidad01 = prompt("elija la cantidad de" + flor);
// let cantidad02 = prompt("elija la cantidad de rosas");

// const suma = (cantidad01, cantidad02) => {return cantidad01 + cantidad02;}

// let ramoCompleto = suma(cantidad01, cantidad02);
// console.log("está llevando: " + ramoCompleto + "flores");

// // OBJETOS

// const manzanilla = {
//   flor: "manzanilla",
//   color: "blanco",
//   stock: 57,
//   precio: 125,
// };

// console.log(manzanilla);
// console.log(manzanilla.precio);

// manzanilla.stock = 0;

// if (manzanilla.stock == 0) {
//   alert("este producto está sin stock.");
// }

// function Producto(flor, color, stock, precio) {
//   this.flor = flor;
//   this.color = color;
//   this.stock = stock;
//   this.precio = precio;

//   this.hablar = function () {
//     console.log("esto es" + this.flor);
//   };
// }

// const Producto001 = new Producto("lavanda", "lavanda", 595, 225);

// console.log(Producto001);

// Producto001.hablar();

// class Flor {
//   constructor(nombre, precio) {
//     this.nombre = nombre.toUpperCase();
//     this.precio = parseFloat(precio);
//     this.stock = false;
//   }
//   sumaIva() {
//     this.precio = this.precio * 1.21;
//   }
//   vender() {
//     this.stock = true;
//   }
// }
// const producto1 = new Flor("lavanda", "125");

// console.log(producto1.precio);
// producto1.sumaIva();
// console.log(producto1.precio);
// producto1.vender();
// console.log(producto1.stock);

// // OBJETO CON FUNCION DE IVA

// let precio = manzanilla.precio;

// function conIva() {
//   console.log("el precio total es:" + ((precio * 21) / 100 + precio));
// }

// conIva();

// //ARRAYS 

// let nombres = ["rosa", "lila", "lavanda", "marimonia"]

// console.log(nombres[1]);

// for(let i=0; i<nombres.length; i++) {
//   console.log (nombres[i]);
// }

// let colores =[];

// for(let i=0; i<3; i++) {
//   colores[i] =prompt("ingrese un color");
// }


