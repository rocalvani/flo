// MODULO PARA AGREGAR FUNCIONALIDAD A CREAR UN RAMO


// IMPORT

import { carrito, florPrincipal, florSecundaria, Flor, Color, colores, cuentaTotal} from './script.js';
import {cart} from "./cart.js";

// CHECKED
let checked = document.createElement("div");
checked.innerHTML = "Y";
checked.style.opacity = 0;


// CREACION DE RAMO

const ramoPrincipal = [];
const ramoSecundario = [];

let seleccion = document.getElementById("seleccion");
let seleccion2 = document.getElementById("seleccionDos");
let settingsPrincipal = document.getElementById("settings__principal");
let settingsSecundario = document.getElementById("settings__secundario");

settingsPrincipal.innerHTML = `Flor principal:`;
settingsSecundario.innerHTML = `Flor Secundaria:`;


// SELECCIÓN FLOR PRINCIPAL

florPrincipal.forEach((el) => {

  let principal = document.createElement("div");
  principal.className = "selectPrincipal"

  principal.innerHTML = `${el.nombre}`;

  let nombrePrincipal = principal.innerHTML;

  settingsPrincipal.appendChild(principal);

  let check = document.createElement("div");
  check.innerHTML = "y";
  check.style.opacity = 0;

  principal.append(check);

  principal.addEventListener("click", () => {

    // ANIMACION DE CHECKED

    check.style.opacity = 1;

    setTimeout(() => {
      check.style.opacity = 0;
    }, 1000);

    // MODIFICACION DE COLOR DE FONDO

    seleccion.style.opacity = 0;

    setTimeout(() => {
      seleccion.innerHTML = `
    <img src="${el.img}">`;

    seleccion.style.opacity = 1;


    }, 500);

    // SUMAR FLORES
    ramoPrincipal.push({
      nombre: el.nombre,
      precio: el.precio,
    });

    // ELIMINAR FLORES EXTRA
    if (ramoPrincipal.length == 2) {
      ramoPrincipal.shift();
    };

    ramoCompleto();

  })

})

// CANTIDAD DE FLORES EN RAMO 
let cantidadTotal = 0;
let seis = document.getElementById("settings__cantidad--6");
let doce = document.getElementById("settings__cantidad--12");
let dieciocho = document.getElementById("settings__cantidad--18");
let cantidad = 1;

seis.addEventListener("click", () => {
  seis.className = "settings__cantidad--active";
  doce.className = "settings__cantidad--inactive";
  dieciocho.className = "settings__cantidad--inactive";
  ramoPrincipal.forEach((el) => {
    cantidadTotal = el.precio * 6;
    cantidad = 6;
  })
  ramoCompleto();
});

doce.addEventListener("click", () => {
  seis.className = "settings__cantidad--inactive";
    doce.className = "settings__cantidad--active";
  dieciocho.className = "settings__cantidad--inactive";

  ramoPrincipal.forEach((el) => {
    cantidadTotal = el.precio * 12;
    cantidad = 12;
  })
  ramoCompleto();
});

dieciocho.addEventListener("click", () => {
  seis.className = "settings__cantidad--inactive";
  doce.className = "settings__cantidad--inactive";
  dieciocho.className = "settings__cantidad--active";
  ramoPrincipal.forEach((el) => {
    cantidadTotal = el.precio * 18;
    cantidad = 18;
  })
  ramoCompleto();
});



// SELECCIÓN FLOR SECUNDARIA

florSecundaria.forEach((el) => {

  //SETEO DE NOMBRES

  let secundaria = document.createElement("div");
  secundaria.className = "selectSecundaria"

  secundaria.innerHTML = `${el.nombre}`;

  settingsSecundario.appendChild(secundaria);

  let check = document.createElement("div");
  check.innerHTML = "y";
  check.style.opacity = 0;

  secundaria.append(check);

  // SELECCION

  secundaria.addEventListener("click", () => {

    // ANIMACION DE CHECKED

    check.style.opacity = 1;

    setTimeout(() => {
      check.style.opacity = 0;
    }, 1000);

    // MODIFICACION DE COLOR DE FONDO

    seleccion2.style.opacity = 0;

    setTimeout(() => {
      seleccion2.innerHTML = `
    <img src="${el.img}">`;

    seleccion2.style.opacity = 1;

    }, 500);

    // SUMAR AL RAMO

    ramoSecundario.push({
        nombre: el.nombre,
        precio: el.precio,
      });

      // ELIMINAR FLORES EXTRA
      if (ramoSecundario.length == 2) {
        ramoSecundario.shift();
      };

      ramoCompleto();

  });

});

// SELECCIÓN COLOR Y MENSAJE

let detail = [];

// COLOR

let color = document.getElementById("seleccionColor");
let settingsColor = document.getElementById("settings__color");

colores.forEach((el) => {

  let colorBoton = document.createElement("div");
  colorBoton.className = "settings__color--boton";

  colorBoton.style.backgroundColor = `${el.color}`;

  settingsColor.appendChild(colorBoton);

  // COLOR ELEGIDO APLICADO

  colorBoton.addEventListener("click", () => {

    // ANIMACIÓN DE BOTÓN

    colorBoton.style.width = "100px";

    setTimeout(() => {
      colorBoton.style.width = "";
    }, 1000);

    //CAMBIO DE COLOR DE FONDO 
    
    color.style.backgroundColor = `${el.color}`;

    detail.push({
      nombre: el.nombre,
      precio: 0,
    });

    // ELIMINAR FLORES EXTRA
    if (detail.length == 2) {
      detail.shift();
    };
  })

})

// AGREGAR MENSAJE
var textArea = document.querySelector("#settings__text");
var textAreaBtn = document.querySelector("#settings__btn");

textAreaBtn.onclick = () => {
  textArea.classList.toggle("settings__text--on");
  textArea.classList.toggle("settings__text--off");
}

let msj = document.getElementById("settings__msj--form");

// CUENTA TOTAL

let settingsTotal = document.getElementById("settings__compra--total");

let ramoTotal = 0;
let ramo;

function ramoCompleto() {
  
  if (ramoPrincipal && ramoSecundario) {
    let ramoFlores = ramoPrincipal.concat(ramoSecundario);
    if (detail) {
      ramo = ramoFlores.concat(detail);
    } else {ramo = ramoFlores}

    ramoTotal = (ramo.reduce((acc, el) => acc + el.precio, 0) + cantidadTotal) * 1.21;
    
    settingsTotal.innerHTML = `
   <p>Total: </p>
   <p>$${ramoTotal} </p>
  `
  }
}

// SUMAR AL CARRITO 
let settingsButton = document.getElementById("settings__compra--button");

settingsButton.addEventListener("click", () => {

  if(ramo[0], ramo[1], ramo[2]) {

    Swal.fire({
      title: 'Querés sumarlo al carrito?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Si',
      denyButtonText: `Todavía no terminé`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('listo!', '', 'success')
        const ramoCarrito = {
          nombre : "ramo personalizado",
          img : "https://i.pinimg.com/originals/c5/33/81/c53381a8780246c8f7b532be95d4610e.jpg",
          precio : parseInt((ramo.reduce((acc, el) => acc + el.precio, 0) + cantidadTotal) * 1.21),
          flores :[ramo[0].nombre, ramo[1].nombre],
          mensaje: msj.value,
          color: ramo[2].nombre,
         cantidadFlores: cantidad,
          amount: 1,
        }
      
      carrito.push(ramoCarrito);
      
      cart();
      
      cuentaTotal.innerHTML = carrito.length;
      } else if (result.isDenied) {
        Swal.fire('Te dejo que sigas en paz', '', 'info')
      }
    })

  } else {

    Swal.fire('Tu pedido no está completo. Recordá que es importante que elijas una flor principal, una flor secundaria y un color.')


  };



});
