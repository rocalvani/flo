// STORE
class Planta {
  constructor(nombre, precio, stock, tipo, lugar) {
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.stock = stock;
    this.tipo = tipo;
    this.lugar = lugar;
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
    console.log(this.precio);
  }
  sinStock() {
    if (this.stock == 0) {
      console.log("Este producto no tiene stock.");
    } else {
      console.log("Puede agregarlo al carrito.");
    }
  }
}

const plantas = [];
plantas.push(new Planta("alocacia", 1800, 25, "perenne", "interior"));
plantas.push(new Planta("hoya pack", 3000, 1, "perenne", "interior"));
plantas.push(new Planta("margarita", 800, 35, "perenne", "exterior"));
plantas.push(new Planta("salvia", 500, 30, "perenne", "exterior"));
plantas.push(new Planta("nanouk", 1800, 7, "perenne", "interior"));
plantas.push(new Planta("ave del paraíso", 1800, 10, "perenne", "exterior"));
plantas.push(new Planta("hierba mariposa", 2500, 0, "perenne", "exterior"));
plantas.push(new Planta("geranio", 800, 23, "perenne", "exterior"));
plantas.push(new Planta("marimonia", 350, 35, "época", "exterior"));

for (const Planta of plantas) {
  Planta.sumaIva();
  Planta.sinStock();
}

const perenne = plantas.filter((el) => el.tipo.includes("perenne"));
const epoca = plantas.filter((el) => el.tipo.includes("época" || "epoca"));
const interior = plantas.filter((el) => el.lugar.includes("interior"));
const exterior = plantas.filter((el) => el.lugar.includes("exterior"));

const found = plantas.find((el) => el.tipo === "época");

console.log(found);
console.log(exterior);

// RAMOS
class Flor {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const ramo = [];
ramo.push(new Flor("rosa", 1000));
ramo.push(new Flor("fresia", 200));
ramo.push(new Flor("jazmín", 700));
ramo.push(new Flor("margarita", 400));
ramo.push(new Flor("lilium", 1500));
ramo.push(new Flor("peonia", 1500));
ramo.push(new Flor("lavanda", 150));
ramo.push(new Flor("gypsophila", 250));
ramo.push(new Flor("paniculata", 200));
ramo.push(new Flor("berries", 320));

let ramoCompleto = [];

let seleccion = document.getElementById("seleccion");
let florBoton = document.getElementsByClassName("florBoton");

let i = 0;
for (florBoton[i]; i < florBoton.length; i++) {
  florBoton[i].addEventListener("click", logged);
  let caso = florBoton[i].innerHTML;
  console.log(caso);

  function off () {
    if (ramoCompleto.length == 2) {
      ramoCompleto.shift();
    } else {
      
    }
  }

  function logged() {
    switch (caso) {
      case "rosa":
        seleccion.innerHTML = "<img src='../img/PngItem_332482.png'>";
        ramoCompleto.push(ramo[0]);
        off();
        console.log(ramoCompleto);
        break;
      case "fresia":
        seleccion.innerHTML = "<img src='../img/pngegg.png'>";
        ramoCompleto.push(ramo[1]);
        off();
        console.log(ramoCompleto);
        break;
      case "jazmin":
        seleccion.innerHTML = "<img src='../img/jazmin.png'>";
        ramoCompleto.push(ramo[2]);
        off();
        console.log(ramoCompleto);
        break;
      case "lilium":
        seleccion.innerHTML = "<img src='../img/lilium.png'>";
        ramoCompleto.push(ramo[3]);
        off();
        console.log(ramoCompleto);
        break;
      case "peonia":
        seleccion.innerHTML = "<img src='../img/peony.png'>";
        ramoCompleto.push(ramo[4]);
        off();
        console.log(ramoCompleto);
        break;
      case "crisantemo":
        seleccion.innerHTML = "<img src='../img/crisantemo.png'>";
        ramoCompleto.push(ramo[5]);
        off();
        console.log(ramoCompleto);
        break;
        case "ranunculo":
        seleccion.innerHTML = "<img src='../img/ranunculo.png'>";
        ramoCompleto.push(ramo[6]);
        off();
        console.log(ramoCompleto);
        break;
      default:
        seleccion.innerHTML = "<img src='../img/crisantemo.png'>";
        break;
    }
  }
}

let seleccionColor = document.getElementById("seleccionColor");
let florColor = document.getElementsByClassName("florColor");

console.log(florColor);

for (florColor[i=0]; i < florColor.length; i++) {
  florColor[i].addEventListener("click", colorFondo);
  let colorElegido = florColor[i].innerHTML;

  function colorFondo() {
    switch (colorElegido) {
      case "blanco":
        seleccionColor.style.backgroundColor = 'white';
        break;
      case "rojo":
        seleccionColor.style.backgroundColor = 'red';
        break;
        case "rosa":
        seleccionColor.style.backgroundColor = 'pink';
        break;
        case "amarillo":
        seleccionColor.style.backgroundColor = 'yellow';
        break;
        case "violeta":
        seleccionColor.style.backgroundColor = 'purple';
        break;
        case "naranja":
        seleccionColor.style.backgroundColor = 'orange';
        break;

    }
  }
}

let seleccionDos = document.getElementById("seleccionDos");
let florDos = document.getElementsByClassName("florDos");

for (florDos[i=0]; i < florDos.length; i++) {
  florDos[i].addEventListener("click", secundaria);
  let florSecundaria = florDos[i].innerHTML;
  console.log(florSecundaria);

  function secundaria() {
    switch (florSecundaria) {
      case "lavanda":
        seleccionDos.innerHTML = "<img src='../img/lavanda.png'>";
        ramoCompleto.push(ramo[7]);
        console.log(ramoCompleto);
        break;
        case "gypsophila":
        seleccionDos.innerHTML = "<img src='../img/gypso.png'>";
        ramoCompleto.push(ramo[8]);
        console.log(ramoCompleto);
        break;
        case "paniculata":
        seleccionDos.innerHTML = "<img src='../img/baby.png'>";
        ramoCompleto.push(ramo[9]);
        console.log(ramoCompleto);
        break;
        case "frutos rojos":
        seleccionDos.innerHTML = "<img src='../img/berry.png'>";
        ramoCompleto.push(ramo[10]);
        console.log(ramoCompleto);
        break;
        case "ninguno":
          seleccionDos.innerHTML = "<img src='../img/nada.png'>"
          break;
      default:
        seleccionDos.innerHTML = "<img src='../img/crisantemo.png'>";
        break;
    }
  }
}

let sumarRamo = document.getElementById("sumarRamo");

sumarRamo.addEventListener("click", alCarrito);

function alCarrito() {

  const ramoPrecio = ramoCompleto.map((el) => el.precio);
  const total = ramoPrecio.reduce((a, b) => a + b, 0);
  console.log(total);
  carrito.push(ramoCompleto); 
  console.log(carrito);

  cuentaTotal.innerHTML = carrito.length;
}

// CARRITO
let carrito = [];
let cartButton = document.getElementById("cartButton");
let addCart = document.getElementsByClassName("add__cart");
console.log(addCart);

for (addCart[i]; i < addCart.length; i++) {
  addCart[i].addEventListener("click", llevar);
  let id = addCart[i].innerHTML;
  console.log(id);

  function llevar() {
    carrito.push(plantas[id]);
    console.log(carrito);

    const plantasCompleto = carrito.map((el) => el.precio);
    const plantasTotal = plantasCompleto.reduce((a, b) => a + b, 0);
    console.log("el total a pagar es " + plantasTotal);

    cuentaTotal.innerHTML = carrito.length;

  }
}

const conRamo = carrito.concat(ramoCompleto);

const conRamoTotal = conRamo.map((el) => el.precio);
const precioTotal = conRamoTotal.reduce((a, b) => a + b, 0);

const conRamoLista = conRamo.map((el) => el.nombre);
console.log(conRamoLista);

console.log("el total a pagar es " + precioTotal);

 const cuentaTotal = document.createElement("p");
cartButton.appendChild(cuentaTotal);

// ASIDE DE CARRITO

let aside = document.getElementById("aside");
console.log(aside);
let carritoBox = document.createElement("div");

cartButton.addEventListener("click", abrirCarrito);

function abrirCarrito () {
  aside.appendChild(carritoBox);
}

let cerrar = document.createElement("div");
cerrar.innerHTML = "<button class='cerrado'>X</button>";

carritoBox.appendChild(cerrar);

cerrar.addEventListener("click", cerrado);

function cerrado () {
  carritoBox.remove(cerrar);
}

// DESCUENTOS

let codigo = prompt("Ingrese el código de descuento");

if (codigo == "FLO615V") {
  console.log("Se aplicó un 15% de descuento en tu compra.");
  let precioFinal = parseInt((precioTotal * 15) / 100 + precioTotal);
  console.log(precioFinal);
} else {
  console.log(
    "El código aplicado no existe. El precio total es " + precioTotal
  );
}

// CUOTAS
let cuotas = Number(prompt("¿En cuantas cuotas abona? 6, 12, o 24."));

switch (cuotas) {
  case 6:
    console.log(
      "Usted abonará en " +
        cuotas +
        " cuotas y el total será " +
        precioTotal / 6 +
        " por cuota."
    );
    break;
  case 12:
    console.log(
      "Usted abonará en " +
        cuotas +
        " cuotas y el total será " +
        precioTotal / 12 +
        " por cuota."
    );
    break;
  case 24:
    console.log(
      "Usted abonará en " +
        cuotas +
        " cuotas y el total será " +
        precioTotal / 24 +
        " por cuota."
    );
    break;
  default:
    console.log("Usted abonará en un pago, el total de " + precioTotal);
    break;
}

// // CONDICIONALES

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

// for(let i=0; i<1; i++) {
//   mensaje = prompt("Ingrese un mensaje para la tarjeta del ramo.");
//   if (mensaje=="") {
//     console.log("usted no ha ingresado ningún mensaje.")
//   } else{
//     console.log("ingresaste un mensaje existosamente.");
//   }

// }

// let colores =[];

// for(let i=0; i<3; i++) {
//   colores[i] =prompt("ingrese un color");
// }
