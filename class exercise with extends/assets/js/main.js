class Dispositivo {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }
  ligar() {
    if (this.ligado) {
      console.log(this.nome + ' já está ligado');
      return;
    }
    this.ligado = true;
  }
  desligar() {
    if (!this.ligado) {
      console.log(this.nome + ' já está desligado');
      return;
    }
    this.ligado = false;
  }
  static ola() { // funcão somente da classe e não das instancias
    console.log('ola')
  }
}

class Smartphone extends Dispositivo {
  constructor(nome, cor) {
    super(nome); // refere ao construtor da classe pai "dispositivo"
    this.cor = cor;
  }
}

const s1 = new Smartphone('Iphone', 'black');
const d1 = new Dispositivo('Computer', 'white');
console.log(s1);
console.log(d1);
s1.ligar();
d1.ligar();
console.log(s1);
console.log(d1);