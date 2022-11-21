// IMPORT

import {aside, plantas, carrito, cart, cerrado, cuentaTotal, eliminarProducto, newIn} from '../js/script.js';

let shop = plantas.concat(newIn);
shop.forEach((el) => {
    // IVA
    el.sumaIva();
  
    // STORE CONTENT
  
    let grid = document.createElement("div");
    grid.className = "storeGrid__card";
  
    grid.innerHTML = `
   <img src=".${el.img}">
   <div class="storeGrid__info">
   <p class="storeGrid__nombre">${el.nombre}</p>
   <p class="storeGrid__precio">$${el.precio}</p>
   </div>`;
  
    let storeGrid = document.getElementById("storeGrid");
    storeGrid.append(grid);
  
    let comprar = document.createElement("button");
    comprar.innerHTML = `<span class="material-symbols-outlined">
   favorite
   </span>`;
    comprar.className = "storeGrid__button";
    grid.append(comprar);
  
    // FUNCIONALIDAD DEL BOTON
    comprar.addEventListener("click", () => {
      carrito.push({
        nombre: el.nombre,
        precio: el.precio,
        img: el.img
      });
      console.log(carrito);
      cart();
      cuentaTotal.innerHTML = carrito.length;
    });
  });