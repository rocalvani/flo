// MÓDULO QUE AÑADE FUNCIONALIDAD AL CHECKOUT

// IMPORT

import {
  aside,
  plantas,
  carrito,
  cart,
  cerrado,
  cuentaTotal,
  eliminarProducto,
} from '../js/script.js';


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
      <div class="checkout__el--img"><img src="${el.img}"></div>
      <div class="checkout__el--product">
      <p>${el.nombre}</p>
      <h3>$${el.precio}<h3>
      </div>
      `;
    checkoutList.append(checkoutEl); });

}

listed()
.then((res) => {
    loadedCart = res;
  render(loadedCart);
})
.catch(() => {
  checkoutList.innerHTML = `Ups! Parece que algo salió mal`
})

// TOTAL

let container = document.getElementById("checkout__container");

let asideTotal = document.createElement("div");
asideTotal.className = "checkout__total";
container.appendChild(asideTotal);

let total = parseInt(carrito.reduce((acc, el) => acc + el.precio, 0))
asideTotal.innerHTML = `
  <p>Total:</p>
  $${total}
  `;

// DESCUENTO
let aplicar = document.getElementById("checkout__discount");

aplicar.addEventListener("click", descuento);

function descuento(e) {
  let codebox = document.getElementById("checkout__codeBox");
  let code = document.getElementById("checkout__code").value;

  if (code == "FLO615V" || code == "flo615v" || code == "FLO615v") {
    total = parseInt(total / 1.15);
    asideTotal.innerHTML = `
  <p>Total:</p>
  $${total}
  `;
  codebox.innerHTML= `
  <p>Código de descuento:</b> 
  <p><b>${code}</b></p>
  `;
 
  } else {
    let codeError = document.createElement("div");
    codeError.innerHTML = `
    <p>El código ingresado no es válido, intentá con otro. </p>`;

    codebox.append(codeError);
  }

  e.preventDefault();
}


// CRÉDITO O DÉBITO

let credit = document.getElementById("credit");
let debit = document.getElementById("debit");
let selection = document.getElementById("selection");

credit.addEventListener("click", credits);
debit.addEventListener("click", debits);

function credits() {
  selection.innerHTML = `
<option value="6">6 cuotas - $${total / 6}</option>
<option value="12">12 cuotas - $${total / 12}</option>
<option value="24">24 cuotas - $${total / 24}</option>`;
credit.style.opacity = "1";
debit.style.opacity = "0.5"
}

function debits() {
  selection.innerHTML = `
    <option value="1">1 pago - $${total}</option>`;
    credit.style.opacity = "0.5";
    debit.style.opacity = "1";
}

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
    button: "Aceptar",
  });

  localStorage.clear();
}

  e.preventDefault();
}