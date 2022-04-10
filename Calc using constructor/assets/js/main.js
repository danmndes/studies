function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.capturaCliques();
    this.capturaBtn();
  };

  this.capturaCliques = () => {
    document.addEventListener('click', e => {
      const el = e.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clr')) this.clr();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizaConta();
    });
  };

  this.capturaBtn = () => {
    document.addEventListener('keyup', e => {
      if (e.keyCode !== 13) return;
      this.realizaConta();
    })
  }
  this.addNumDisplay = el => {
    this.display.value += el.innerText;
    this.display.focus();
  };
  this.clr = () => this.display.value = '';
  this.del = () => this.display.value = this.display.value.slice(0, -1);

  this.realizaConta = () => {

    try {
      const conta = eval(this.display.value); //verifica se é uma conta válida
      if (!conta) { //verifica se é NaN
        alert('Conta Inválida');
        return;
      }
      this.display.value = conta;
    } catch (err) {
      alert('Conta Inválida');
      return;
    }

  };

}

const calculadora = new Calculadora();
calculadora.inicia();