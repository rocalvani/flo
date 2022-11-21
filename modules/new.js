// IMPORT

import {aside, plantas, carrito, cart, cerrado, cuentaTotal, eliminarProducto, newIn} from '../js/script.js';


newIn.forEach((el) => {
    // IVA
    el.sumaIva();

    // STORE CONTENT
  
    let gridNew = document.createElement("div");
    gridNew.className = "storeGrid__card";
  
    gridNew.innerHTML = `
   <img src="${el.img}">
   <div class="storeGrid__info">
   <p class="storeGrid__nombre">${el.nombre}</p>
   <p class="storeGrid__precio">$${el.precio}</p>
   </div>`;
  
    let newIn = document.getElementById("newIn");
    newIn.append(gridNew);
  
    let comprar = document.createElement("button");
    comprar.innerHTML = `<span class="material-symbols-outlined">
   favorite
   </span>`;
    comprar.className = "storeGrid__button";
    gridNew.append(comprar);
  
    // FUNCIONALIDAD DEL BOTON
    comprar.addEventListener("click", () => {
      carrito.push({
        nombre: el.nombre,
        precio: el.precio,
        img: el.img
      });
      cart();
      cuentaTotal.innerHTML = carrito.length;
    });
  });