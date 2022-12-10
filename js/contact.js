// FUNCIONALIDAD EN CONTACTO

let contactMail = document.getElementById("contact__mail");
let contactMsg = document.getElementById("contact__msg");

let requiredInfo =  document.getElementById("contactError");

let contactBtn = document.getElementById("prevent");
contactBtn.addEventListener("click", (e) => {
    
    requiredInfo.className = "contactError__on";

    if (contactMail.value != "" && contactMsg.value != "") {
Swal.fire('Tu mensaje fue enviado y recibirás una respuesta en los próximos 7 días.')
contactMail.style.borderColor = "";
        contactMsg.style.borderColor = "";    
} else {
        contactMail.style.borderColor = "red";
        contactMsg.style.borderColor = "red";

        requiredInfo.innerHTML = `
        <p>No completaste los campos requeridos. No olvides completarlos para enviar tu mensaje.</p>
        `;

        setTimeout(() => {
          requiredInfo.className = "contactError__off";  
        }, 3000);
    }
    

    e.preventDefault();});

