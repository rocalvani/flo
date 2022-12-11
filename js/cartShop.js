//IMPORT Y EXPORT
import {carrito, compra,cuentaTotal} from "./script.js"
export {cart,};

// ASIDE DE CARRITO

let aside = document.getElementById("asideCart");

// APERTURA DE CARRITO
cartButton.addEventListener("click", cart);

// CIERRE DE ASIDE

function cerrado() {
  aside.className = "asideCart--await  animate__animated animate__fadeOutRight";

  setTimeout(() => {
    aside.className = "asideCart--closed";
  }, 500);
}


function cart() {
    aside.className = "asideCart--open animate__animated animate__fadeInRight";
  
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
    <div class="asideCart__img"><img src="../img/${el.img}"></div>
    <div class="asideCart__info">
    <p>${el.nombre}</p>
    <h3>$${el.precio}</h3>
    <p>cantidad: ${el.amount}</p>
    </div>
    `;
      cartContent.appendChild(cartList);
  
      let minus = document.createElement("div");
      minus.className = "asideCart__minus";

      minus.innerHTML = `<span class="material-symbols-outlined">
      delete
      </span>`;
      cartList.append(minus);
  
      minus.addEventListener("click", function () {
        eliminarProductoShop(el);
      });
    });
  
    let asideTotal = document.createElement("div");
    asideTotal.className = "asideCart__total";
    cartOpen.appendChild(asideTotal);
  
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    asideTotal.innerHTML = `
    <p>Total:</p>
<b>$${total}</b>
    `;
  
    let botonComprar = document.createElement("div");
    botonComprar.className = "asideCart__comprar";
    cartOpen.appendChild(botonComprar);
  
    botonComprar.innerHTML = `
    <a href="./checkout.html"><button class="asideCart__llevar">comprar</button></a>
    `;
  
    // STORAGE
    compra("listaProductos", JSON.stringify(carrito));
  }
