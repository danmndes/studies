const inputTarefas = document.querySelector('.input-tarefa');
const btnTarefas = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li');
  return li;
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

inputTarefas.addEventListener('keypress', function (e) {
  if (!inputTarefas.value) return;
  if (e.keyCode === 13) {
    criaTarefa(inputTarefas.value);
  }
});


function limpaInput() {
  inputTarefas.value = '';
  inputTarefas.focus();
}


function criaBotaoApagar(li) {
  li.innerText += '  ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  botaoApagar.setAttribute('class', 'apagar');
  botaoApagar.setAttribute('title', 'Apagar esta tarefa');
  li.appendChild(botaoApagar);
};

btnTarefas.addEventListener('click', function (e) {
  if (!inputTarefas.value) return;
  criaTarefa(inputTarefas.value);
});

document.addEventListener('click', function (e) {
  const el = e.target;

  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefas()
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');

  const listaDeTarefas = JSON.parse(tarefas);


  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();

