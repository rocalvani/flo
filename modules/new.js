// MÓDULO QUE AÑADE FUNCIONALIDAD AL NEW IN STORE DEL INDEX


// IMPORT

import {aside, plantas, carrito, cart, cerrado, cuentaTotal, eliminarProducto} from '../js/script.js';


  fetch("../data.json")
  .then ( (res) => res.json())
  .then ( (data) => {
    data.forEach((el) => {
      // SUMAR IVA
el.precio = el.precio * 1.21;
      //MOSTRAR
      let gridNew = document.createElement("div");
      gridNew.className = "newIn__card";
    
      gridNew.innerHTML = `
     <img src="${el.img}">
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
        carrito.push({
          nombre: el.nombre,
          precio: el.precio,
          img: el.img
        });
        cart();
        cuentaTotal.innerHTML = carrito.length;
      });
    })
  })