function transformar() {
  const CODIGO_INTERNACIONAL =
   document.getElementById(
    "codigoInternacional").value;
 
  const numero = document
   .getElementById("numero").value;
 
  let num = "https://wa.me/" +
   CODIGO_INTERNACIONAL + numero;
 
  window.open(num);
 }
 
 function toggleDayMode() {
 
  let body = document.body;
  body.classList.toggle(
   "day-mode");
 }