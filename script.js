document.querySelectorAll('form').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = form.querySelector('.form-msg');
    if (msg) {
      msg.textContent = '¡Gracias! Tu solicitud fue recibida. Un asesor comercial te contactará con la cotización internacional en menos de 24 horas.';
    }
    form.reset();
  });
});

document.querySelectorAll('.miniaturas img').forEach(function (thumb) {
  thumb.addEventListener('click', function () {
    var main = this.closest('.producto-galeria').querySelector('img');
    main.src = this.src.replace('w=300&q=60', 'w=900&q=80');
  });
});
