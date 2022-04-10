//fetch('pessoas.json')
//  .then(resposta => resposta.json())
//  .then(json => carregaElementos(json));
//forma de passar o json, mas com fetch


axios('pessoas.json').then(response => carregaElementos(response.data));
//axios com a msm funcao do fetch

function carregaElementos(json) {
  const table = document.createElement('table');


  for (let pessoa of json) {
    let tr = document.createElement('tr');


    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);

    table.appendChild(tr);

  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table)
}