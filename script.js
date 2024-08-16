const tarefasPredefinidas = [
  { titulo: "Festinha", descricao: "Organizar uma Festinha no -HOTEL ROMA- com a Permissão do Proprietario(João Victor Festeiro)" },
  { titulo: "Arrumar Emprego", descricao: "Auto explicativo! e de preferencia na FitBank" },
  { titulo: "Roubar item lendario", descricao: "Ir para o Castelo(Casa) do Felipe nas ferias e Furtivamente Roubar o Item lendario (RX 7900 XTX) que está em um baú no seu quarto!" },
];

document.addEventListener("DOMContentLoaded", function () {
  carregarTarefasPredefinidas();
});

function carregarTarefasPredefinidas() {
  const tarefasContainer = document.getElementById("tarefasContainer");

  tarefasPredefinidas.forEach((tarefa) => {
    const tarefaDiv = document.createElement("div");
    tarefaDiv.classList.add("tarefa");

    const tituloElement = document.createElement("p");
    tituloElement.textContent = tarefa.titulo;

    const descricaoElement = document.createElement("pre");
    descricaoElement.textContent = tarefa.descricao;

    // Cria o botão de deletar
    const botaoDeletar = document.createElement("button");
    botaoDeletar.textContent = "X"; // Pode ser um "X" para indicar remoção
    botaoDeletar.classList.add("botaoDeletar");

    // Adiciona um evento para remover a tarefa quando o botão for clicado
    botaoDeletar.addEventListener("click", function () {
      tarefaDiv.remove();
    });

    // Adiciona os elementos ao contêiner de tarefa
    tarefaDiv.appendChild(botaoDeletar); // Adiciona o botão primeiro para sobrepor
    tarefaDiv.appendChild(tituloElement);
    tarefaDiv.appendChild(descricaoElement);

    tarefasContainer.appendChild(tarefaDiv);
  });
}

document
  .querySelector(".cadastro")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os valores do título e da descrição
    const titulo = document.getElementById("Titulo").value;
    const descricao = document.getElementById("Descricao").value;

    // Cria os elementos <p> e <pre>
    const tarefaDiv = document.createElement("div");
    tarefaDiv.classList.add("tarefa");

    const tituloElement = document.createElement("p");
    tituloElement.textContent = titulo;

    const descricaoElement = document.createElement("pre");
    descricaoElement.textContent = descricao;

    // Cria o botão de deletar
    const botaoDeletar = document.createElement("button");
    botaoDeletar.textContent = "X";
    botaoDeletar.classList.add("botaoDeletar");

    // Adiciona um evento para remover a tarefa quando o botão for clicado
    botaoDeletar.addEventListener("click", function () {
      tarefaDiv.remove();
    });

    // Adiciona os elementos criados ao contêiner de tarefas
    tarefaDiv.appendChild(tituloElement);
    tarefaDiv.appendChild(descricaoElement);
    tarefaDiv.appendChild(botaoDeletar); // Adiciona o botão ao final

    document.getElementById("tarefasContainer").appendChild(tarefaDiv);

    // Limpa os campos do formulário
    document.getElementById("Titulo").value = "";
    document.getElementById("Descricao").value = "";
  });


document.getElementById("novo").addEventListener("click", function () {
  const formCadastro = document.querySelector(".cadastro");

  if (
    formCadastro.style.display === "none" ||
    formCadastro.style.display === ""
  ) {
    formCadastro.style.display = "flex";
  } else {
    formCadastro.style.display = "none";
  }
});

document.getElementById("Visualizar").addEventListener("click", function () {
  const formCadastro = document.querySelector(".tarefasContainer");

  if (
    formCadastro.style.display === "none" ||
    formCadastro.style.display === ""
  ) {
    formCadastro.style.display = "grid";
  } else {
    formCadastro.style.display = "none";
  }
});