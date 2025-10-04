// app.js

// Estrutura JSON simulando os destinos
const destinos = [
  {
    titulo: "Cancun",
    descricao: "Cancun é uma cidade no México, famosa por suas praias e resorts.",
    imagem: "img/cancun.jpg",
    alt: "Praia em Cancun"
  },
  {
    titulo: "Ibiza",
    descricao: "Ibiza é uma ilha da Espanha conhecida pela vida noturna e paisagens mediterrâneas.",
    imagem: "img/ibiza.jpg",
    alt: "Por do sol em Ibiza"
  },
  {
    titulo: "Dubai",
    descricao: "Dubai é um emirado nos Emirados Árabes, famoso por sua arquitetura moderna e compras de luxo.",
    imagem: "img/dubai.jpg",
    alt: "Skyline de Dubai"
  },
  {
    titulo: "Maldivas",
    descricao: "As Maldivas são conhecidas por suas praias, lagoas e recifes tropicais.",
    imagem: "img/maldiva.jpg",
    alt: "Resort nas Maldivas"
  },
  {
    titulo: "Havaí",
    descricao: "O Havaí é um estado dos EUA no Oceano Pacífico, famoso por vulcões e paisagens tropicais.",
    imagem: "img/hawaii.jpg",
    alt: "Praia no Havaí"
  }
];

// Função para criar um card dinamicamente
function criarCard(destino) {
  return `
    <article class="col">
      <div class="card h-100">
        <img src="${destino.imagem}" class="card-img-top" alt="${destino.alt}">
        <div class="card-body">
          <h3 class="card-title h5">${destino.titulo}</h3>
          <p class="card-text">${destino.descricao}</p>
        </div>
      </div>
    </article>
  `;
}

// Função para renderizar os cards no container
function renderizarCards(lista) {
  const container = document.getElementById("cards-container");
  container.innerHTML = lista.map(criarCard).join("");
}

// Renderizar na carga da página
document.addEventListener("DOMContentLoaded", () => {
  renderizarCards(destinos);
});
