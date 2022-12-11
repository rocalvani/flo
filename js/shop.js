//MÓDULO QUE AÑADE FUNCIÓN AL STORE COMPLETO

// IMPORT

import {
  aside,
  plantas,
  carrito,
  cerrado,
  cuentaTotal,
  eliminarProducto,
} from "./script.js";
import { cart } from "./cart.js";

// GRID
let storeGrid = document.getElementById("store__grid");

// LLAMADO AL JSON Y CONCATENACIÓN
var newProd;

fetch("../json/data.json")
  .then((res) => res.json())
  .then((data) => {
    newProd = data;
  })
  .then(() => {
    let shop = plantas.concat(newProd);

    shop.forEach((el) => {
      // IVA
      el.precio = parseInt(el.precio * 1.21);

      // STORE CONTENT

      let grid = document.createElement("div");
      grid.className = "storeGrid__card";

      grid.innerHTML = `
    <div class="storeGrid__img"><img src="../img/${el.img}">
   </div>
    <div class="storeGrid__info">
   <p class="storeGrid__nombre">${el.nombre}</p>
   <p class="storeGrid__precio">$${el.precio}</p>
   </div>`;

      storeGrid.append(grid);

      // BOTÓN PARA COMPRAR

      let comprar = document.createElement("button");
      comprar.innerHTML = `<span class="material-symbols-outlined">favorite</span>`;
      comprar.className = "storeGrid__button";
      grid.append(comprar);

      // FUNCIONALIDAD DEL BOTON
      comprar.addEventListener("click", () => {

        // BÚSQUEDA PARA EVITAR REPETICIÓN
        let foundShop = el.nombre;
        const foundIn = carrito.find((el) => el.nombre === foundShop);

        if (foundIn) {
          foundIn.amount++;
          foundIn.precio = el.precio * foundIn.amount;

          // ACTUALIZACIÓN DE CARRITO 
          cart();

        } else {

          // SI NO SE LO ENCUENTRA, SE SUMA COMO NUEVO
          carrito.push({
            nombre: el.nombre,
            precio: el.precio,
            img: el.img,
            amount: 1,

          });
          // ACTUALIZACIÓN DE CARRITO
          cart();
        }
        // ACTUALIZACIÓN DE CONTADOR EN BARRA DE NAV
        cuentaTotal.innerHTML = carrito.length;
      });
    });

    // FILTROS

    const perenne = shop.filter((el) => el.tipo.includes("perenne"));
    const anual = shop.filter((el) => el.tipo.includes("anual"));
    const interior = shop.filter((el) => el.lugar.includes("interior"));
    const exterior = shop.filter((el) => el.lugar.includes("exterior"));

    // PERENNE

    let perenneBtn = document.getElementById("store__tags--perenne");

    perenneBtn.addEventListener("click", () => {
      //COLOR DE BOTONES
      perenneBtn.style.backgroundColor = "#bccac7";
      anualBtn.style.backgroundColor = "transparent";
      interiorBtn.style.backgroundColor = "transparent";
      exteriorBtn.style.backgroundColor = "transparent";
      todo.style.backgroundColor = "transparent";

      storeGrid.innerHTML = `<img src="../img/process.gif">`;

      setTimeout(() => {
        //RENDER
        storeGrid.innerHTML = ``;
        perenne.forEach((el) => {
          let grid = document.createElement("div");
          grid.className = "storeGrid__card";

          grid.innerHTML = `
  <div class="storeGrid__img"><img src="../img/${el.img}">
  </div>
 <div class="storeGrid__info">
 <p class="storeGrid__nombre">${el.nombre}</p>
 <p class="storeGrid__precio">$${el.precio}</p>
 </div>`;

          storeGrid.append(grid);

          // BOTÓN DE COMPRAR

          let comprar = document.createElement("button");
          comprar.innerHTML = `<span class="material-symbols-outlined">
 favorite
 </span>`;
          comprar.className = "storeGrid__button";
          grid.append(comprar);

          // FUNCIONALIDAD DEL BOTON
          comprar.addEventListener("click", () => {

            // BÚSQUEDA PARA EVITAR REPETICIÓN
            let foundShop = el.nombre;
            const foundIn = carrito.find((el) => el.nombre === foundShop);

            if (foundIn) {
              foundIn.amount++;
              foundIn.precio = el.precio * foundIn.amount;
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
      }, 2000);
    });

    // ANUAL

    let anualBtn = document.getElementById("store__tags--anual");

    anualBtn.addEventListener("click", () => {
      //COLOR DE BOTONES
      perenneBtn.style.backgroundColor = "transparent";
      anualBtn.style.backgroundColor = "#bccac7";
      interiorBtn.style.backgroundColor = "transparent";
      exteriorBtn.style.backgroundColor = "transparent";
      todo.style.backgroundColor = "transparent";

      storeGrid.innerHTML = `<img src="../img/process.gif">`;
      setTimeout(() => {
        //RENDER
        storeGrid.innerHTML = ``;
        anual.forEach((el) => {

          let grid = document.createElement("div");
          grid.className = "storeGrid__card";

          grid.innerHTML = `
        <div class="storeGrid__img"><img src="../img/${el.img}">
        </div>
       <div class="storeGrid__info">
       <p class="storeGrid__nombre">${el.nombre}</p>
       <p class="storeGrid__precio">$${el.precio}</p>
       </div>`;

          storeGrid.append(grid);

          //BOTÓN DE COMPRAR 

          let comprar = document.createElement("button");
          comprar.innerHTML = `<span class="material-symbols-outlined">
       favorite
       </span>`;
          comprar.className = "storeGrid__button";
          grid.append(comprar);

          // FUNCIONALIDAD DEL BOTON
          comprar.addEventListener("click", () => {

            // BÚSQUEDA PARA EVITAR REPETICIÓN
            let foundShop = el.nombre;
            const foundIn = carrito.find((el) => el.nombre === foundShop);

            if (foundIn) {
              foundIn.amount++;
              foundIn.precio = el.precio * foundIn.amount;
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
      }, 2000);
    });

    // INTERIOR
    let interiorBtn = document.getElementById("store__tags--interior");

    interiorBtn.addEventListener("click", () => {
      //COLOR DE BOTONES
      perenneBtn.style.backgroundColor = "transparent";
      anualBtn.style.backgroundColor = "transparent";
      interiorBtn.style.backgroundColor = "#bccac7";
      exteriorBtn.style.backgroundColor = "transparent";
      todo.style.backgroundColor = "transparent";

      //RENDER
      storeGrid.innerHTML = "";
      interior.forEach((el) => {
        storeGrid.innerHTML = `<img src="../img/process.gif">`;

        setTimeout(() => {
          storeGrid.innerHTML = ``;
          interior.forEach((el) => {
            let grid = document.createElement("div");
            grid.className = "storeGrid__card";

            grid.innerHTML = `
        <div class="storeGrid__img"><img src="../img/${el.img}">
        </div>
       <div class="storeGrid__info">
       <p class="storeGrid__nombre">${el.nombre}</p>
       <p class="storeGrid__precio">$${el.precio}</p>
       </div>`;

            storeGrid.append(grid);

            //BOTON PARA COMPRAR

            let comprar = document.createElement("button");
            comprar.innerHTML = `<span class="material-symbols-outlined">
       favorite
       </span>`;
            comprar.className = "storeGrid__button";
            grid.append(comprar);

            // FUNCIONALIDAD DEL BOTON
            comprar.addEventListener("click", () => {
              let foundShop = el.nombre;
              const foundIn = carrito.find((el) => el.nombre === foundShop);

              if (foundIn) {
                foundIn.amount++;
                foundIn.precio = el.precio * foundIn.amount;
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
        }, 2000);
      });
    });

    // EXTERIOR

    let exteriorBtn = document.getElementById("store__tags--exterior");

    exteriorBtn.addEventListener("click", () => {
      //COLOR DE BOTONES
      perenneBtn.style.backgroundColor = "transparent";
      anualBtn.style.backgroundColor = "transparent";
      interiorBtn.style.backgroundColor = "transparent";
      exteriorBtn.style.backgroundColor = "#bccac7";
      todo.style.backgroundColor = "transparent";

      //RENDER
      storeGrid.innerHTML = `<img src="../img/process.gif">`;

      setTimeout(() => {
        storeGrid.innerHTML = ``;
        exterior.forEach((el) => {
          let grid = document.createElement("div");
          grid.className = "storeGrid__card";

          grid.innerHTML = `
        <div class="storeGrid__img"><img src="../img/${el.img}">
        </div>
       <div class="storeGrid__info">
       <p class="storeGrid__nombre">${el.nombre}</p>
       <p class="storeGrid__precio">$${el.precio}</p>
       </div>`;

          storeGrid.append(grid);

          // BOTÓN PARA COMPRAR

          let comprar = document.createElement("button");
          comprar.innerHTML = `<span class="material-symbols-outlined">
       favorite
       </span>`;
          comprar.className = "storeGrid__button";
          grid.append(comprar);

          // FUNCIONALIDAD DEL BOTON
          comprar.addEventListener("click", () => {
            let foundShop = el.nombre;
            const foundIn = carrito.find((el) => el.nombre === foundShop);

            if (foundIn) {
              foundIn.amount++;
              foundIn.precio = el.precio * foundIn.amount;
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
      }, 2000);
    });

    // TODO
    let todo = document.getElementById("store__tags--todo");

    todo.addEventListener("click", () => {
      //COLOR DE BOTONES
      perenneBtn.style.backgroundColor = "transparent";
      anualBtn.style.backgroundColor = "transparent";
      interiorBtn.style.backgroundColor = "transparent";
      exteriorBtn.style.backgroundColor = "transparent";
      todo.style.backgroundColor = "#bccac7";

      //RENDER

      storeGrid.innerHTML = `<img src="../img/process.gif">`;
      setTimeout(() => {
        //RENDER
        storeGrid.innerHTML = ``;
        shop.forEach((el) => {
          let grid = document.createElement("div");
          grid.className = "storeGrid__card";

          grid.innerHTML = `
        <div class="storeGrid__img"><img src="../img/${el.img}">
        </div>
       <div class="storeGrid__info">
       <p class="storeGrid__nombre">${el.nombre}</p>
       <p class="storeGrid__precio">$${el.precio}</p>
       </div>`;

          storeGrid.append(grid);

          //BOTÓN PARA COMPRAR

          let comprar = document.createElement("button");
          comprar.innerHTML = `<span class="material-symbols-outlined">
       favorite
       </span>`;
          comprar.className = "storeGrid__button";
          grid.append(comprar);

          // FUNCIONALIDAD DEL BOTON
          comprar.addEventListener("click", () => {

            // BÚSQUEDA PARA EVITAR REPETICION
            let foundShop = el.nombre;
            const foundIn = carrito.find((el) => el.nombre === foundShop);

            if (foundIn) {
              foundIn.amount++;
              foundIn.precio = el.precio * foundIn.amount;
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
      }, 2000);
    });
  });
