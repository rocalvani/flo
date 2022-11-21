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
let checkoutList = document.getElementById("checkoutLista");

function checkout () {
  carrito.forEach((el) => {
    // MOSTRAR CARRITO
  
    let checkoutEl = document.createElement("div");
    checkoutEl.className = "checkout__el";
  
    checkoutEl.innerHTML = `
      <div class="asideCart__img"><img src="${el.img}"></div>
      <div class="asideCart__info">
      <p>${el.nombre}</p>
      <h3>$${el.precio}<h3>
      </div>
      `;
    checkoutList.append(checkoutEl);
  
  
    
  });
}

checkout();

// TOTAL

let asideTotal = document.createElement("div");
asideTotal.className = "asideCart__total";
checkoutList.appendChild(asideTotal);

let total = carrito.reduce((acc, el) => acc + el.precio, 0);
asideTotal.innerHTML = `
  <p>Total:</p>
  $${total}
  `;

// DESCUENTO
let aplicar = document.getElementById("discount");

aplicar.addEventListener("click", descuento);

function descuento() {
  let code = document.getElementById("checkoutCode").value;

  if (code == "FLO615V" || code == "flo615v") {
    total = total / 1.15;
    asideTotal.innerHTML = `
  <p>Total:</p>
  $${total}
  `;
  }
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
}

function debits() {
  selection.innerHTML = `
    <option value="1">1 pago - $${total}</option>`;
}

// SUBMIT

let form = document.getElementById("checkoutForm");
form.addEventListener("submit", validate);

function validate(e) {
let name = document.getElementById("name");
let lastName = document.getElementById("lastName");
let number = document.getElementById("number");
let security = document.getElementById("security");
let id = document.getElementById("id");

let required = document.getElementById("required");

if (name.value || id.value || lastName.value || number.value || security.value == "") {
 
  required.innerHTML = `<p>Recuerde completar: nombre, apellido, el número de su tarjeta, el código de seguirdad y su dni.</p>`
} else {
  required.innerHTML = `<p><`
}

  e.preventDefault();
}
