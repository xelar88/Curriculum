// Seleccionamos todas las tarjetas con la clase "cont-work"
const tarjetas = document.querySelectorAll('.cont-work');

// Añadimos los eventos para el hover a cada tarjeta
tarjetas.forEach((tarjeta) => {
  tarjeta.addEventListener('mouseenter', () => {
    tarjeta.classList.add('voltear');
  });

  tarjeta.addEventListener('mouseleave', () => {
    tarjeta.classList.remove('voltear');
  });
});
