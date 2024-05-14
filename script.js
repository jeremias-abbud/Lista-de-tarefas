let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

// Função para adicionar tarefa

function addTarefa() {
    // Pegar o valor do input
    let valorInput = input.value;
    // Se não for vazio, nem nulo, nem indefinido:
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        contador++;

        let novoItem =
            `<div id=${contador} class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
        </div>
        </div>`;
        // Adicionar novo item no main:
        main.innerHTML += novoItem;
        // Zerar os campos
        input.value = "";
        input.focus();

    }
}

// Função para deletar
function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

// Função para marcar tarefa
function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute("class");

    if (classe == "item") {
        item.classList.add("clicado");

        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-check-circle");

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove("clicado");

        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");
    }
}

// Adicionando a tecla enter
input.addEventListener("keyup", function (event) {
    // Se teclou enter (13)
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})