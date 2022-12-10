// MÓDULO QUE AÑADE FUNCIONALIDAD AL NEW IN STORE DEL INDEX

// IMPORT

import {
  aside,
  plantas,
  carrito,
  cerrado,
  cuentaTotal,
  eliminarProducto,
} from "./script.js";

import {cart} from "./cart.js";

let cantidad = 1;

fetch("./json/data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((el) => {
      // SUMAR IVA
      el.precio = el.precio * 1.21;
      //MOSTRAR
      let gridNew = document.createElement("div");
      gridNew.className = "newIn__card";

      gridNew.innerHTML = `
  <div class="newIn__img">
  <img src="./img/${el.img}">
  </div>
     <div class="newIn__info">
     <p class="newIn__info--nombre">${el.nombre}</p>
     <p class="newIn__info--precio">$${el.precio}</p>
     </div>`;

      let newIn = document.getElementById("newIn");
      newIn.append(gridNew);

      let comprar = document.createElement("button");
      comprar.innerHTML = `<span class="material-symbols-outlined">
     favorite
     </span>`;
      comprar.className = "newIn__button";
      gridNew.append(comprar);

      // FUNCIONALIDAD DEL BOTON
      comprar.addEventListener("click", () => {

        // BUSQUEDA DE PRODUCTO PARA EVITAR REPETIRLO EN EL CARRITO

        let foundCart = el.nombre;
        const foundu = carrito.find((el) => el.nombre === foundCart);

        if (foundu) {

          foundu.amount ++;
          foundu.precio = el.precio * foundu.amount;

          cart();

        } else {
        carrito.push({
          nombre: el.nombre,
          precio: el.precio,
          img: el.img,
          amount: 1,
        });
        cart();
        }

        cuentaTotal.innerHTML = carrito.length;
      });
    });
  });