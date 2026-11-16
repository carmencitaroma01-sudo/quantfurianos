document.getElementById('form-contacto').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form-msg').textContent =
    '¡Gracias! Tu solicitud fue recibida. Un asesor comercial te contactará con la cotización internacional en menos de 24 horas.';
  this.reset();
});
