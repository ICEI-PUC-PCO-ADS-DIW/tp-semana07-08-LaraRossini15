const destinos = [
  {
    id: 1,
    titulo: "Cancun",
    descricao: "Cancun é uma cidade no México, famosa por suas praias e resorts.",
    imagem: "img/cancun.jpg",
    alt: "Praia em Cancun",
    detalhes: "Além das praias paradisíacas, Cancun oferece passeios a sítios arqueológicos maias e vida noturna vibrante."
  },
  {
    id: 2,
    titulo: "Ibiza",
    descricao: "Ibiza é uma ilha da Espanha conhecida pela vida noturna e paisagens mediterrâneas.",
    imagem: "img/ibiza.jpg",
    alt: "Por do sol em Ibiza",
    detalhes: "Ibiza também conta com vilarejos históricos e praias tranquilas para quem busca descanso."
  },
  {
    id: 3,
    titulo: "Dubai",
    descricao: "Dubai é um emirado nos Emirados Árabes, famoso por sua arquitetura moderna e compras de luxo.",
    imagem: "img/dubai.jpg",
    alt: "Skyline de Dubai",
    detalhes: "Em Dubai você encontra o Burj Khalifa, o maior prédio do mundo, além de desertos para safáris."
  },
  {
    id: 4,
    titulo: "Maldivas",
    descricao: "As Maldivas são conhecidas por suas praias, lagoas e recifes tropicais.",
    imagem: "img/maldiva.jpg",
    alt: "Resort nas Maldivas",
    detalhes: "É o destino ideal para mergulho e experiências em bangalôs sobre a água."
  },
  {
    id: 5,
    titulo: "Havaí",
    descricao: "O Havaí é um estado dos EUA no Oceano Pacífico, famoso por vulcões e paisagens tropicais.",
    imagem: "img/hawaii.jpg",
    alt: "Praia no Havaí",
    detalhes: "No Havaí, você encontra trilhas em vulcões ativos, cachoeiras e praias de areia colorida."
  }
];

function criarCard(destino) {
  return `
    <article class="col">
      <div class="card h-100">
        <img src="${destino.imagem}" class="card-img-top" alt="${destino.alt}">
        <div class="card-body">
          <h3 class="card-title h5">${destino.titulo}</h3>
          <p class="card-text">${destino.descricao}</p>
          <a href="detalhes.html?id=${destino.id}" class="btn btn-primary">Detalhes</a>
        </div>
      </div>
    </article>
  `;
}

function renderizarCards(lista) {
  const container = document.getElementById("cards-container");
  if (container) {
    container.innerHTML = lista.map(criarCard).join("");
  }
}

function renderizarDetalhes() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  if (!id) return;

  const destino = destinos.find(d => d.id === id);

  if (destino) {
    const container = document.getElementById("detalhes-container");
    if (container) {
      container.innerHTML = `
        <div class="col-md-8">
          <div class="card">
            <img src="${destino.imagem}" class="card-img-top" alt="${destino.alt}">
            <div class="card-body">
              <h2 class="card-title">${destino.titulo}</h2>
              <p class="card-text">${destino.detalhes}</p>
            </div>
          </div>
        </div>
      `;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("cards-container")) {
    renderizarCards(destinos);
  }
  if (document.getElementById("detalhes-container")) {
    renderizarDetalhes();
  }
});
