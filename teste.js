let inputNovaTarefa = document.querySelector('#inputNovaTarefa');
let btnAddTarefa = document.querySelector('#btnAddTarefa');
let ListaTarefas = document.querySelector('#ListaTarefas');

inputNovaTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        let tarefa = {
            nome: inputNovaTarefa.value,
            id: gerarid(),
        }
        adicionarTarefa(tarefa);
    }
});

btnAddTarefa.addEventListener('click', (e) => {

    let tarefa = {
        nome: inputNovaTarefa.value,
        id: gerarid(),
    }
    adicionarTarefa(tarefa);
});

function gerarid() {
    return Math.floor(Math.random() * 3000);
}

function adicionarTarefa(tarefa) {
    let li = criarTagLI(tarefa);
    ListaTarefas.appendChild(li);
   inputNovaTarefa.value = '';
}

function criarTagLI(tarefa) {
    let li = document.createElement('li');

    let span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.nome;

    let div = document.createElement('div');

    let BtnEditar = document.createElement('button');
    BtnEditar.classList.add('btnAcao');
    BtnEditar.innerHTML = <i class="fa fa-pencil"></i>;

    let BtnExcluir = document.createElement('button');
    BtnExcluir.classList.add('btAcao');
    BtnExcluir.innerHTML = <i class="fa fa-trash"></i>;

    div.appendChild(btneditar);
    div.appendChild(btnexcluir);


    li.appendChild(span);
    li.appendChild(div);
    return li;
}