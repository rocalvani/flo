// MÓDULO QUE AÑADE FUNCIONALIDAD AL CHECKOUT

// IMPORT

import {
  aside,
  plantas,
  carrito,
  cerrado,
  cuentaTotal,
  eliminarProducto,
  compra,
} from './script.js';

import {cart} from './cart.js'

// BÁSICO 

let final = parseInt(carrito.reduce((acc, el) => acc + el.precio, 0));

// CUENTA TOTAL

let container = document.getElementById("checkout__container");

let asideTotal = document.createElement("div");
asideTotal.className = "checkout__total";
container.appendChild(asideTotal);

function showTotal() {
  let total = parseInt(carrito.reduce((acc, el) => acc + el.precio, 0));
  return asideTotal.innerHTML = `
  <p>Total:</p>
  <p class="checkout__total--bold">$${total}</p>
  `;
};

showTotal();


// LISTA DE CHECKOUT
let checkoutList = document.getElementById("checkout__lista");

checkoutList.innerHTML = `<img src="../img/process.gif" width="100%">`;

const listed = () => {
  return new Promise ( (resolve, reject) => {
    if (carrito.length > 0) {
      setTimeout(() => {
        resolve(carrito)
      }, 2000)
    } else {
      checkoutList.innerHTML = `Tu carrito está vacío, deberías volver atrás`
    }
  })
}

let loadedCart = []

const render = (arr) => {
  checkoutList.innerHTML ="";
  carrito.forEach((el) => {
    // MOSTRAR CARRITO
  
    let checkoutEl = document.createElement("div");
    checkoutEl.className = "checkout__el";
  
    checkoutEl.innerHTML = `
      <div class="checkout__el--img"><img src="../img/${el.img}"></div>
      <div class="checkout__el--product">
      <p>${el.nombre}</p>
      <h3>$${el.precio}<h3>
      </div>
      `;
    checkoutList.append(checkoutEl);

    let counter = document.createElement("div");
    counter.className ="checkout__el--counter"
    checkoutEl.append(counter);

    let quantity = document.createElement("div");

    quantity.innerHTML = `${el.amount} u.`;
    counter.append(quantity);

let addUp = document.createElement("button");
addUp.innerHTML = `+`
counter.append(addUp);

addUp.addEventListener("click", () => {

  // CALCULO DE PRECIO AL SUMAR CANTIDAD
let precioIndividual = el.precio / el.amount;
el.precio = el.precio + precioIndividual;

// MUESTRA DEL CAMBIO DE PRECIO

  el.amount++
  quantity.innerHTML = `${el.amount} u.`;

  checkoutEl.innerHTML = `
      <div class="checkout__el--img"><img src="../img/${el.img}"></div>
      <div class="checkout__el--product">
      <p>${el.nombre}</p>
      <h3>$${el.precio}<h3>
      </div>
      `;
      checkoutEl.append(counter);

      // MUESTRA DEL TOTAL
      showTotal();

      final = parseInt(carrito.reduce((acc, el) => acc + el.precio, 0));


 // STORAGE 
 compra("listaProductos", JSON.stringify(carrito));

});

// BOTON DE RESTA Y SU FUNCIÓN

let substract = document.createElement("button");
substract.innerHTML = `-`
counter.append(substract);

substract.addEventListener("click", () => {

  if (el.amount > 1 ){
    // CALCULO DE PRECIO AL RESTAR CANTIDAD
let precioIndividual = el.precio / el.amount;
el.precio = el.precio - precioIndividual;

    // MUESTRA DEL CAMBIO DE PRECIO
    el.amount--;
    quantity.innerHTML = `${el.amount} u.`;

  checkoutEl.innerHTML = `
  <div class="checkout__el--img"><img src="../img/${el.img}"></div>
  <div class="checkout__el--product">
  <p>${el.nombre}</p>
  <h3>$${el.precio}<h3>
  </div>
  `;
  checkoutEl.append(counter);

  // MUESTRA DEL TOTAL
  showTotal();
  } ;

  final = parseInt(carrito.reduce((acc, el) => acc + el.precio, 0));

// STORAGE 
compra("listaProductos", JSON.stringify(carrito));
});
  });

}

listed()
.then((res) => {
    loadedCart = res;
  render(loadedCart);
})
.catch(() => {
  checkoutList.innerHTML = `Ups! Parece que algo salió mal`
});

// DESCUENTO
let aplicar = document.getElementById("checkout__discount");

aplicar.addEventListener("click", descuento);

function descuento(e) {
  let codeBox = document.getElementById("checkout__codeBox");
  let code = document.getElementById("checkout__code").value;

aplicar.value = `Esperá un segundo`;

  setTimeout(() => {if (code == "FLO615V" || code == "flo615v" || code == "FLO615v") {

    // CUENTA Y MUESTRA EL DESCUENTO 

    let total = parseInt(carrito.reduce((acc, el) => acc + el.precio, 0));
    total = parseInt(total / 1.15);

    asideTotal.innerHTML = `
  <p>Total:</p>
  <p class="checkout__total--bold">$${total}</p>
  `;
  codeBox.innerHTML= `
  <div id="checkout__codeBox--approved">
  <p>Código de descuento:</b> 
  <p><b>${code}</b></p>
  </div>
  `;

  // FUNCION DE PAGO CON TARJETA

  final = total;
 
  } else {
    let codeError = document.createElement("div");
    codeError.className = "checkout__error--on";

    codeError.innerHTML = `
    <p>El código ingresado no es válido, intentá con otro. </p>`;

    codeBox.append(codeError);

    setTimeout(() => {
      codeError.className = "checkout__error--off"; 

    setTimeout(() => {
      codeError.style.display = "none";
      aplicar.value = `Aplicar`;
    }, 1500)}, 

    2000);

  }}, 

  1000)

  e.preventDefault();
}


// CRÉDITO O DÉBITO
let credit = document.getElementById("credit");
let debit = document.getElementById("debit");
let selection = document.getElementById("selection");

function cardPayment() {

credit.addEventListener("click", credits);
debit.addEventListener("click", debits);

let seisCuotas = parseInt(final/6);
let doceCuotas = parseInt(final/12);
let veinticuatroCuotas = parseInt(final/24);

debit.style.opacity = "0.5";
credit.style.opacity = "0.5";

function credits() {
  selection.innerHTML = `
<option value="6">6 cuotas - $${seisCuotas}</option>
<option value="12">12 cuotas - $${doceCuotas}</option>
<option value="24">24 cuotas - $${veinticuatroCuotas}</option>`;
credit.style.opacity = "1";
debit.style.opacity = "0.5";
}

function debits() {
  selection.innerHTML = `
    <option value="1">1 pago - $${final}</option>`;
    credit.style.opacity = "0.5";
    debit.style.opacity = "1";
}
}

cardPayment();

// SUBMIT
let formButton = document.getElementById("checkout__submit");
let form = document.getElementById("checkout__form");
form.addEventListener("submit", validate);

let name = document.getElementById("name");
let lastName = document.getElementById("lastName");
let number = document.getElementById("number");
let security = document.getElementById("security");
let id = document.getElementById("id");

let required = document.getElementById("required");

let data = [name, lastName, number,security,id]

data.forEach((el) => {
  el.addEventListener("change", () => {

el.style.borderColor ="green";

if (name.value != "" && lastName.value != "" && id.value != "" && number.value != "" && security.value != ""){
  formButton.innerHTML = `
  COMPRAR`;
}

  });
})



function validate(e) {

if (name.value === "" || lastName.value === "" || id.value === "" || number.value === "" || security.value === "") {

  required.innerHTML = `<img src="../img/process.gif">`;
  setTimeout(() => {
    required.innerHTML = `Recordá completar todos los datos requeridos para poder avanzar.`;
  }, 2000)
} else {
  swal({
    title: "¡Tu compra fue aprobada!",
    text: "En los próximos días te contactaremos para que la retires en nuestro local.",
    icon: "success",
    button: "Aceptar"}).then(okay => {
      if (okay) {
       window.location.href = "../index.html";
     }
  });

  localStorage.clear();
}

  e.preventDefault();
}