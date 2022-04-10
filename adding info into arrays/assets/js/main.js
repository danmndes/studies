const listaPessoas = [];
const recebe = document.querySelector('.nomes');
const nome = document.querySelector('.nome');
const sobrenome = document.querySelector('.sobrenome');

document.addEventListener('click', e => {
  const el = e.target;
  if (el.classList.contains('aplicar')) {
    criaPessoa();
  };
});

function criaPessoa() {
  const pessoaNome = nome.value;
  const pessoaSobrenome = sobrenome.value;
  recebePessoa(pessoaNome, pessoaSobrenome);
};

function recebePessoa(nome, sobrenome) {
  let pessoa = {};
  pessoa.nome = nome;
  pessoa.sobrenome = sobrenome;
  return addPessoas(pessoa);
};

function addPessoas(pessoa) {
  listaPessoas.push(pessoa);
  recebe.innerHTML += `<tr>${pessoa.nome} ${pessoa.sobrenome}<tr><br>`;
};
