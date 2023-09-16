const key = "d883fdd01e25b72011be7ee268751331";

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`
  ).then((resposta) => resposta.json());

  console.log(dados);
}

function cliqueBotao() {
  const cidade = document.querySelector(".input-cidade").value;

  buscarCidade(cidade);
}
