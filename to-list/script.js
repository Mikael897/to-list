const button = document.querySelector('.btn-add')
const input = document.querySelector('.input-task')
const ListaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []

function adicionarNovaTarefa(){
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''
    mostrarTarefa()
}

function mostrarTarefa(){
    let novaLi = ''
    minhaListaDeItens.forEach((item, posicao) =>{
        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
            <img src="./img/checked.png" alt="check-na-tarefa" onclick="riscarItem(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="" onclick="deletarItem(${posicao})">
        </li>`
    })
    ListaCompleta.innerHTML = novaLi    

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)
    mostrarTarefa()
}

function riscarItem(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
    mostrarTarefa()
}

function recarregarTarefas(){
    const tarefasLocal = localStorage.getItem('lista')

    if (tarefasLocal) {
        minhaListaDeItens = JSON.parse(tarefasLocal)
        mostrarTarefa()
    }
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)
