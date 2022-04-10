const form = document.querySelector('#formulario');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  if (!peso) {
    setResultado("Peso inválido");
    return;
  };
  if (!altura) {
    setResultado("Altura inválida");
    return;
  };
  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);
  console.log(imc, nivelImc);
  setResultado(`Seu IMC é ${imc}, ${nivelImc}`);
});

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function getNivelImc(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function setResultado(msg) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = `<p class="paragrafo-resultado">${msg}</p>`;
}