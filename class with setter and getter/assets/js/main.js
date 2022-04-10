const _velocidade = Symbol(); //gera um id aleatório, nunca um igual ao outro
class Carro {
  constructor(nome, velocidade) {
    this.nome = nome;
    this[_velocidade] = 0;
  }
  get velocidade() {
    return this[_velocidade];
  }
  set velocidade(value) {
    if (typeof value !== 'number') return;
    if (value >= 100 || value <= 0) return;
    this[_velocidade] = value;
  }
  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }
  frear() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
};


const c1 = new Carro('Fusca');
//c1.velocidade = 1500;
for (let i = 0; i <= 200; i++) {
  c1.acelerar();
};
c1.velocidade = 1500;
console.log(c1);

//getter e setter para poder tratar um valor antes que ele seja atribuido à chave do objeto 

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }
  set nomeCompleto(value) {
    if (typeof value !== 'string') return;
    value = value.split(' ');
    this.nome = value.shift();
    this.sobrenome = value.join(' ');
  }
}

const p1 = new Pessoa('Daniel', 'Ribeiro');
//p1.nomeCompleto = 'Daniel Ribeiro Mendes';
console.log(p1);
