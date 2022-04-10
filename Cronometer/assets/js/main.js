function cronometro() {

  function getTimeFromSeconds(segundos) {
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const relogio = document.querySelector('.relogio');
  const volta = document.querySelector('.volta');

  let segundos = 0;
  let timer;
  let estado;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerText = getTimeFromSeconds(segundos);
    }, 1000);
  }

  document.addEventListener('click', function (e) {
    const el = e.target;
    console.log(el);
    if (el.classList.contains('iniciar')) {
      if (estado == 'pausado' || segundos == 0) {
        clearInterval(timer);
        relogio.classList.remove('pausado');
        iniciaRelogio();
        estado = 'iniciado';
      }
    }
    if (el.classList.contains('pausar')) {
      if (segundos !== 0) {
        clearInterval(timer);
        relogio.classList.add('pausado');
        estado = 'pausado';
      }
    }

    if (el.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.classList.remove('pausado');
      segundos = 0;
      relogio.innerText = getTimeFromSeconds(0);
      volta.innerHTML = '';
    }
    if (el.classList.contains('lap')) {
      volta.innerHTML += `<br>${getTimeFromSeconds(segundos)}`;
    }
  });
}
cronometro();