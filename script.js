/*
 * Variáveis globais
 */
const BOOKS_ELEMENT = document.getElementById("books");
const EMPTY_ELEMENT = document.getElementById("empty-state");
const RESET_BTN = document.getElementById("reset-btn");
const DRAWER = document.getElementById("drawer");

let CATEGORY = null;
let ONLY_AVAILABLE = false;
let SEARCH_TERM = null;

/*
 * Listeners
 */
document.getElementById("search").addEventListener("input", (event) => {
  searchBooks(event.target.value);
});

document.getElementById("category").addEventListener("change", (event) => {
  filterBooksByCategory(event.target.value);
});

document
  .getElementById("only-available")
  .addEventListener("change", (event) => {
    filterAvailableBooks(event.target.checked);
  });

document.getElementById("reset-btn").addEventListener("click", () => {
  resetAll();
});

document.querySelector(".overlay").addEventListener("click", () => {
  cleanDrawer();
});

/*
 * Funções auxiliares
 */
function cleanDrawer() {
  DRAWER.innerHTML = "";
  document.body.style.overflow = "auto";
}

function getBookById(id) {
  const book = LIVROS.find((book) => book.id === id);
  if (!book) return null;

  // Renderiza um drawer com as informações do livro
  const drawer = `
  <div class="drawer custom-scrollbar">
    <button class="btn" onclick="cleanDrawer()">Fechar</button>
    <h2 class="title">${book.titulo}</h2>
    <p class="author"><strong>Autor:</strong> ${book.autor}</p>
    <p class="badge"><strong>Disponível:</strong> ${book.disponivel ? "Sim" : "Não"}</p>
    <hr>
    <p class="area"><strong>Área:</strong> ${book.area}</p>
    <p class="year"><strong>Ano:</strong> ${book.ano}</p>
    <p class="exemplares"><strong>Exemplares:</strong> ${book.exemplares}</p>
    <p class="description"><strong>Descrição:</strong> ${book.descricao}</p>
  </div>
  `;

  // Tira o scroll do body
  document.body.style.overflow = "hidden";

  // Adiciona o drawer ao body
  DRAWER.innerHTML = drawer;
}

function renderCards(book) {
  const { id, titulo, autor, area, ano, exemplares, disponivel, descricao } =
    book;
  const available =
    exemplares > 1 && disponivel
      ? { label: "Disponível", dataAvailable: 2 }
      : exemplares === 1 && disponivel
        ? { label: "Último exemplar", dataAvailable: 1 }
        : { label: "Emprestado", dataAvailable: 0 };

  const card = `
    <article class="card" id="book-${id}" data-id="${id}" onclick="getBookById(${id})" >
      <div class="wrapper between">
        <span class="badge">${area}</span>
        <span class="badge">${ano}</span>
      </div>
      <h3 class="title clamp line-3" title="${titulo}">${titulo}</h3>
      <p class="author clamp line-2" title="${autor}">${autor}</p>
      <div class="description-container">
        <p class="description clamp line-6" tabindex="0">${descricao}</p>
      </div>
      <p class="available text-center" data-available="${available.dataAvailable}">
      ${available.label}
      </p>
    </article>
  `;

  return card;
}

function renderEmptyState() {
  const emptyState = `
    <span class="book-icon">&#128366;</span>
    <h3>Nenhum livro encontrado</h3>
  `;

  EMPTY_ELEMENT.innerHTML = emptyState;
}

function filter() {
  // Se todos os filtros estiverem vazios, esconde o botão de reset
  if (!CATEGORY && !ONLY_AVAILABLE && !SEARCH_TERM)
    RESET_BTN.style.cssText = "display: none; opacity: 0; visibility: hidden;";
  else
    RESET_BTN.style.cssText =
      "display: block; opacity: 1; visibility: visible;";

  // Busca por título ou autor, filtra por categoria e disponibilidade
  const filteredBooks = LIVROS.filter((book) => {
    return (
      (CATEGORY ? book.area === CATEGORY : true) &&
      (ONLY_AVAILABLE ? book.disponivel : true) &&
      (SEARCH_TERM
        ? book.titulo.toLowerCase().includes(SEARCH_TERM.toLowerCase()) ||
          book.autor.toLowerCase().includes(SEARCH_TERM.toLowerCase())
        : true)
    );
  });

  populateCards(filteredBooks);
}

function populateSelectCategory() {
  const select = document.getElementById("category");
  const uniqueAreas = [];
  LIVROS.forEach(({ area }) => {
    if (!uniqueAreas.includes(area)) uniqueAreas.push(area);
  });

  uniqueAreas.forEach((category) => {
    select.innerHTML += `<option value="${category}">${category}</option>`;
  });
}

/*
 * Popula os cards com o array de livros
 */
function populateCards(books) {
  const qtySpan = document.getElementById("qty");
  qtySpan.innerText = books.length ?? 0;
  BOOKS_ELEMENT.innerHTML = "";
  EMPTY_ELEMENT.innerHTML = "";

  if (books.length) {
    books.forEach((book) => {
      BOOKS_ELEMENT.innerHTML += renderCards(book);
    });
  } else {
    renderEmptyState();
  }
}

/*
 * Busca os livros de acordo com o termo digitado no input de busca
 */
function searchBooks(value) {
  // não tem "debounce" porque add mais complexidade e não é o foco da aula
  SEARCH_TERM = value;
  filter();
}

/*
 * Filtra os livros de acordo com a categoria selecionada no select de categorias
 */
function filterBooksByCategory(category) {
  CATEGORY = category;
  filter();
}

/*
 * Filtra apenas os livros disponíveis
 */
function filterAvailableBooks(onlyAvailable) {
  ONLY_AVAILABLE = onlyAvailable;
  filter();
}

/*
 * Reseta Tudo
 */
function resetAll() {
  RESET_BTN.style.cssText = "display: none; opacity: 0; visibility: hidden;";
  const searchTerm = document.getElementById("search");
  searchTerm.value = "";
  const categorySelect = document.getElementById("category");
  categorySelect.value = "";
  const onlyAvailableCheckbox = document.getElementById("only-available");
  onlyAvailableCheckbox.checked = false;
  CATEGORY = null;
  ONLY_AVAILABLE = false;
  SEARCH_TERM = null;
  populateCards(LIVROS);
}

/*
 * Renderização Inicial
 */
renderEmptyState();
resetAll();
populateSelectCategory();
