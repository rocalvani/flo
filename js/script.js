// MÓDULO CON FUNCIONALIDAD PARA EL CARRITO Y TODOS LOS OBJETOS Y ARRAYS

// EXPORT

export {
  aside,
  carrito,
  plantas,
  eliminarProducto,
  cerrado,
  cuentaTotal,
  florPrincipal,
  florSecundaria,
  Flor,
  Color,
  colores,
  compra,
};

import { cart } from "./cart.js";

// BÁSICOS
const compra = (clave, valor) => localStorage.setItem(clave, valor);
let carrito = JSON.parse(localStorage.getItem("listaProductos")) || [];

// PRODUCTOS STORE
class Planta {
  constructor(nombre, precio, tipo, lugar, id, img) {
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.tipo = tipo;
    this.lugar = lugar;
    this.id = id;
    this.img = img;
  }
  sumaIva() {
    this.precio = parseInt(this.precio * 1.21);
  }
}

const plantas = [];
plantas.push(
  new Planta("peperomia pilea", 1100, "perenne", "interior", 1, "flores-01.png")
);
plantas.push(
  new Planta("fittonia", 1100, "perenne", "interior", 2, "flores-06.png")
);
plantas.push(
  new Planta("orquídea", 5900, "perenne", "interior", 3, "flores-02.png")
);
plantas.push(
  new Planta("monstera", 1200, "perenne", "interior", 4, "flores-05.png")
);
plantas.push(
  new Planta("begonia", 2600, "perenne", "interior", 5, "flores-03.png")
);
plantas.push(
  new Planta("violeta africana", 980, "perenne", "interior", 6, "flores-04.png")
);
plantas.push(
  new Planta("lavanda", 190, "perenne", "exterior", 7, "flores-07.png")
);
plantas.push(
  new Planta("kalanchoe", 590, "perenne", "exterior", 8, "flores-08.png")
);
plantas.push(
  new Planta("gazania", 170, "perenne", "exterior", 9, "flores-11.png")
);
plantas.push(
  new Planta("geranio", 980, "perenne", "exterior", 10, "flores-09.png")
);
plantas.push(
  new Planta("oxalis", 980, "anual", "exterior", 11, "flores-12.png")
);
plantas.push(
  new Planta("manzanilla", 210, "anual", "exterior", 12, "flores-10.png")
);
plantas.push(
  new Planta("agapanthus", 790, "perenne", "exterior", 13, "flores-14.png")
);
plantas.push(
  new Planta("frutilla", 190, "perenne", "exterior", 14, "flores-13.png")
);
plantas.push(
  new Planta("naranjo", 1500, "perenne", "exterior", 15, "flores-16.png")
);
plantas.push(
  new Planta("suculentas", 1200, "perenne", "exterior", 16, "flores-15.png")
);

// FLORES PARA RAMO
class Flor {
  constructor(nombre, precio, img) {
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
  }
}

const florPrincipal = [];
const florSecundaria = [];

florPrincipal.push(new Flor("rosa", 1000, "./img/PngItem_332482.png"));
florPrincipal.push(new Flor("fresia", 200, "./img/pngegg.png"));
florPrincipal.push(new Flor("jazmín", 700, "./img/jazmin.png"));
florPrincipal.push(new Flor("lilium", 1500, "./img/lilium.png"));
florPrincipal.push(new Flor("peonia", 900, "./img/peony.png"));
florPrincipal.push(new Flor("crisantemo", 900, "./img/crisantemo.png"));
florPrincipal.push(new Flor("ranunculo", 1250, "./img/ranunculo.png"));
florSecundaria.push(new Flor("lavanda", 150, "./img/lavanda.png"));
florSecundaria.push(new Flor("gypsophila", 250, "./img/gypso.png"));
florSecundaria.push(new Flor("paniculata", 200, "./img/baby.png"));
florSecundaria.push(new Flor("berries", 320, "./img/berry.png"));

// COLORES PARA ELEGIR
class Color {
  constructor(nombre, color, precio) {
    this.nombre = nombre;
    this.color = color;
    this.precio = precio;
  }
}

const colores = [];

colores.push(new Color("blanco", "#ffffff"));
colores.push(new Color("rosa", "#f6d9d5"));
colores.push(new Color("rojo", "#f49c92"));
colores.push(new Color("naranja", "#efccbb"));
colores.push(new Color("violeta", "#d8bbf2"));
colores.push(new Color("amarillo", "#efebbb"));
colores.push(new Color("aleatorio", "#daddce"));

// CUENTA SOBRE BOTÓN DE CARRITO
let cartButton = document.getElementById("cartButton");

const cuentaTotal = document.createElement("p");
cartButton.appendChild(cuentaTotal);

function initiate() {
  cuentaTotal.innerHTML = carrito.length;
}

initiate();

// ASIDE DE CARRITO

let aside = document.getElementById("asideCart");

// APERTURA DE CARRITO
cartButton.addEventListener("click", cart);

function eliminarProducto(product) {
  let exist = carrito.filter((el) => el.nombre != product.nombre);

  // ACTUALIZACIÓN DE CARRITO

  carrito = exist;
  cart();
  cuentaTotal.innerHTML = carrito.length;
}

// CIERRE DE ASIDE

function cerrado() {
  aside.className = "asideCart--await  animate__animated animate__fadeOutRight";

  setTimeout(() => {
    aside.className = "asideCart--closed";
  }, 500);
}
