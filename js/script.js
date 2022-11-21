// EXPORT

export {
  aside,
  carrito,
  plantas,
  cart,
  eliminarProducto,
  cerrado,
  cuentaTotal,
  florPrincipal,
  florSecundaria,
  Flor,
  Color,
  colores,
  newIn,
};


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
    this.precio = this.precio * 1.21;
  }
  
}

const plantas = [];
plantas.push(
  new Planta(
    "peperomia pilea",
    1100,
    "perenne",
    "interior",
    1,
    "./img/flores-01.png"
  )
);
plantas.push(
  new Planta("fittonia", 1100, "perenne", "interior", 2, "./img/flores-02.png")
);
plantas.push(
  new Planta("orquídea", 5900, "perenne", "interior", 3, "./img/flores-03.png")
);
plantas.push(
  new Planta("monstera", 1200, "perenne", "interior", 4, "./img/flores-04.png")
);
plantas.push(
  new Planta("begonia", 2600, "perenne", "interior", 5, "./img/flores-05.png")
);
plantas.push(
  new Planta(
    "violeta africana",
    980,
    "perenne",
    "interior",
    6,
    "./img/flores-06.png"
  )
);
plantas.push(
  new Planta("lavanda", 190, "perenne", "exterior", 7, "./img/flores-07.png")
);
plantas.push(
  new Planta("kalanchoe", 590, "perenne", "exterior", 8, "./img/flores-08.png")
);
plantas.push(
  new Planta("gazania", 170, "perenne", "exterior", 9, "./img/flores-09.png")
);
plantas.push(
  new Planta("geranio", 980, "perenne", "exterior", 10, "./img/flores-10.png")
);
plantas.push(
  new Planta("oxalis", 980, "anual", "exterior", 11, "./img/flores-11.png")
);
plantas.push(
  new Planta("manzanilla", 210, "anual", "exterior", 12, "./img/flores-12.png")
);
plantas.push(
  new Planta(
    "agapanthus",
    790,
    "perenne",
    "exterior",
    13,
    "./img/flores-13.png"
  )
);
plantas.push(
  new Planta("frutilla", 190, "perenne", "exterior", 14, "./img/flores-14.png")
);
plantas.push(
  new Planta("naranjo", 1500, "perenne", "exterior", 15, "./img/flores-15.png")
);
plantas.push(
  new Planta(
    "suculentas",
    1200,
    "perenne",
    "exterior",
    16,
    "./img/flores-16.png"
  )
);

// NEW IN STORE 

const newIn = [];

newIn.push(new Planta ("amapola", 1750, "perenne", "exterior", 17, "./img/flores-17.png"));
newIn.push(new Planta ("cerezo", 6800, "perenne", "exterior", 18, "./img/flores-18.png"));
newIn.push(new Planta ("olivo", 3160, "perenne", "exterior", 19, "./img/flores-19.png"));

// FILTROS

const perenne = plantas.filter((el) => el.tipo.includes("perenne"));
const anual = plantas.filter((el) => el.tipo.includes("anual"));
const interior = plantas.filter((el) => el.lugar.includes("interior"));
const exterior = plantas.filter((el) => el.lugar.includes("exterior"));

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
florPrincipal.push(new Flor("peonia", 1500, "./img/peony.png"));
florPrincipal.push(new Flor("crisantemo", 1500, "./img/crisantemo.png"));
florPrincipal.push(new Flor("ranunculo", 1500, "./img/ranunculo.png"));
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
colores.push(new Color("rosa", "#DE89A8"));
colores.push(new Color("rojo", "#F09494"));
colores.push(new Color("naranja", "#F5C183"));
colores.push(new Color("violeta", "#AE89DE"));
colores.push(new Color("amarillo", "#EAE190"));
colores.push(new Color("aleatorio", "#089f8f"));

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

function cart() {
  aside.className = "asideCart--open";
  let cartOpen = document.createElement("div");
  cartOpen.className = "asideCart__Open";
  aside.appendChild(cartOpen);

  // CIERRE DE CARRITO

  let cerrar = document.createElement("div");
  cerrar.className = "asideCart__close";
  cerrar.innerHTML = `
<button class="cerrado"><span class='material-symbols-outlined'>close</span></button>`;

  cartOpen.appendChild(cerrar);

  cerrar.addEventListener("click", cerrado);
  // CONTENIDO DE CARRITO

  let cartContent = document.createElement("div");
  cartContent.className = "asideCart__content";
  cartOpen.append(cartContent);

  carrito.forEach((el) => {
    let cartList = document.createElement("div");
    cartList.className = "asideCart__list";
    cartList.innerHTML = `
  <div class="asideCart__img"><img src="${el.img}"></div>
  <div class="asideCart__info">
  <p>${el.nombre}</p>
  <h3>$${el.precio}<h3>
  </div>
  `;
    cartContent.appendChild(cartList);

    let minus = document.createElement("span");
    minus.textContent = "X";
    cartList.append(minus);

    minus.addEventListener("click", eliminarProducto);
  });

  let asideTotal = document.createElement("div");
  asideTotal.className = "asideCart__total";
  cartOpen.appendChild(asideTotal);

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);
  asideTotal.innerHTML = `
  <p>Total:</p>
  $${total}
  `;

  let botonComprar = document.createElement("div");
  botonComprar.className = "asideCart__comprar";
  cartOpen.appendChild(botonComprar);

  botonComprar.innerHTML = `
  <a href="./checkout.html"><button class="asideCart__llevar">comprar</button></a>
  `;

  // STORAGE
  compra("listaProductos", JSON.stringify(carrito));
};

const eliminarProducto = () => {
  const found = carrito.find((el) => el.nombre);
  carrito = carrito.filter((carritoId) => {
    return carritoId != found;
  });
  cart();
  cuentaTotal.innerHTML = carrito.length;
};

function cerrado() {
  aside.className = "asideCart--closed";
};
