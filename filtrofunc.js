/*
 * Variáveis globais
 */
const BOOKS_ELEMENT = document.getElementById("books");
const EMPTY_ELEMENT = document.getElementById("empty-state");
const RESET_BTN = document.getElementById("reset-btn");
let CATEGORY = null;
let ONLY_AVAILABLE = false;
let SEARCH_TERM = null;

/*
 * Funções auxiliares
 */
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
    <article class="card" id="book-${id}" data-id="${id}">
      <div class="wrapper between">
        <span class="badge">${area}</span>
        <span class="badge">${ano}</span>
      </div>
      <h3 class="title clamp line-3" title="${titulo}">${titulo}</h3>
      <p class="author clamp line-2" title="${autor}">${autor}</p>
      <p class="description custom-scrollbar" tabindex="0">${descricao}</p>
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
  RESET_BTN.style.cssText = "display: block; opacity: 1; visibility: visible;";
  const filteredBooks = LIVROS.filter((book) => {
    return (
      (CATEGORY ? book.area === CATEGORY : true) &&
      (ONLY_AVAILABLE ? book.disponivel : true) &&
      (SEARCH_TERM
        ? book.titulo.toLowerCase().includes(SEARCH_TERM.toLowerCase())
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
function searchBooks(event) {
  event.preventDefault();
  const searchTerm = document.getElementById("search");
  SEARCH_TERM = searchTerm.value;
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
