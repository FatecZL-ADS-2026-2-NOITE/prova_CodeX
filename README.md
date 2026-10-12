# 📚 Catálogo da Biblioteca do Curso

Projeto desenvolvido pelo time **CodeX** para o **Projeto Integrador — Projeto Desafio 01**, da disciplina de Análise e Desenvolvimento de Sistemas da **FATEC Zona Leste**.

---

## 📖 Sobre o projeto

O Catálogo da Biblioteca do Curso é uma página web criada para facilitar a consulta ao acervo bibliográfico de Análise e Desenvolvimento de Sistemas.

A proposta resolve um problema de informação: o estudante pode verificar previamente se determinado livro existe, conhecer sua área, consultar seus autores e identificar a situação de disponibilidade antes de procurar a obra na biblioteca.

O projeto utiliza dados estáticos em JavaScript e funciona diretamente no navegador, sem back-end, banco de dados ou dependências externas.

---

## ✨ Funcionalidades

- 📚 Exibição dinâmica dos livros cadastrados no array `LIVROS`.
- 🔎 Busca por título ou autor enquanto o usuário digita.
- 🗂️ Filtro por área de conhecimento.
- ✅ Filtro para mostrar somente livros disponíveis.
- 🔄 Combinação entre busca, área e disponibilidade.
- 🔢 Contador atualizado com a quantidade de resultados encontrados.
- 📭 Mensagem de estado vazio quando nenhum livro atende aos critérios.
- 🧹 Botão para limpar todos os filtros.
- 📋 Tela de detalhes do livro selecionado.
- 🏷️ Selo de situação calculado pelo JavaScript:
  - **Disponível**;
  - **Último exemplar**;
  - **Emprestado**.
- 📱 Interface responsiva para telas menores, incluindo largura aproximada de 400 px.
- 🧱 Estrutura semântica com cabeçalho, conteúdo principal e rodapé.

---

## 🛠️ Tecnologias e restrições

### Tecnologias utilizadas

- HTML5;
- CSS3;
- JavaScript puro;
- Arrays e objetos;
- Métodos de array como `filter`, `forEach`, `find` e `includes`;
- Manipulação do DOM;
- Eventos `input`, `change` e `click`.

O projeto não utiliza frameworks ou bibliotecas externas. Também não utiliza back-end, banco de dados, armazenamento local ou cookies.

---

## 📁 Estrutura do projeto

```text
prova_CodeX/
├── index.html              # Estrutura da página
├── style.css               # Estilos e responsividade
├── dados.js                # Array de livros e seus dados
├── script.js               # Renderização, busca, filtros e detalhes
├── docs/
│   ├── requisitos.md        # Documento de requisitos
│   └── entidades.md         # Entidades, atributos e relacionamentos
└── README.md               # Documentação do projeto
```

---

## 🗃️ Modelo de dados

Cada livro é representado por um objeto com as seguintes propriedades:

| Propriedade | Tipo | Descrição |
|---|---|---|
| `id` | Número | Identificador do livro |
| `titulo` | Texto | Título da obra |
| `autor` | Texto | Autor ou autores |
| `area` | Texto | Área de conhecimento |
| `ano` | Número | Ano de publicação ou edição |
| `exemplares` | Número | Quantidade de exemplares livres |
| `disponivel` | Booleano | Indica se há pelo menos um exemplar livre |
| `descricao` | Texto | Resumo da obra |

O array atual contém **10 livros**, e os cartões são gerados automaticamente pelo JavaScript. Portanto, a inclusão de um novo objeto em `dados.js` deve gerar um novo cartão sem alteração manual do HTML.

---

## ▶️ Como executar

1. Clone este repositório ou baixe seus arquivos.
2. Abra o arquivo `index.html` em um navegador moderno.
3. Utilize a busca e os filtros para consultar o catálogo.

### Executando com Git

```bash
git clone https://github.com/FatecZL-ADS-2026-2-NOITE/prova_CodeX.git
cd prova_CodeX
```

Depois, abra `index.html` no navegador.

Não é necessário instalar dependências ou iniciar um servidor para executar a versão atual.

---

## 👥 Organização do time

### Time

**CodeX**

### Integrantes

- Anderson dos Santos Araujo
- Daniel Nascimento Gonçalves
- Rafael Ramos Almeida
- Vitor Hideki Lopes Kawahara

### Divisão de tarefas registrada

A divisão abaixo consolida as informações atualmente registradas no README, no histórico de commits e nas tarefas públicas do repositório. Ela deve ser conferida com o Kanban antes da entrega final:

- **Anderson dos Santos Araujo:** implementação da página de detalhes, funções principais, dados e melhorias de acessibilidade.
- **Daniel Nascimento Gonçalves:** desenvolvimento da página de listagem e colaboração na implementação da interface.
- **Rafael Ramos Almeida:** documentação de requisitos e entidades, organização do projeto e colaboração na interface.
- **Vitor Hideki Lopes Kawahara:** desenvolvimento da página de listagem e colaboração na implementação da interface.

---

## 🎓 Requisitos acadêmicos atendidos

- [x] Arquivo HTML único (`index.html`).
- [x] CSS externo (`style.css`).
- [x] Dados separados da lógica (`dados.js` e `script.js`).
- [x] Array com mais de oito objetos.
- [x] Cada objeto com mais de cinco propriedades.
- [x] Propriedades numéricas e booleanas.
- [x] Renderização dinâmica dos cartões.
- [x] Busca textual.
- [x] Filtro por categoria/área.
- [x] Contador de resultados.
- [x] Detalhe do item selecionado.
- [x] Estado vazio para buscas sem resultado.
- [x] Cabeçalho e rodapé com os integrantes.
- [x] Layout adaptado para telas pequenas.

---

## ⚠️ Limitações do projeto

Esta versão não possui:

- cadastro de usuários;
- autenticação;
- empréstimo ou devolução de livros;
- reserva de exemplares;
- controle de multas;
- painel administrativo;
- integração com o sistema real da biblioteca;
- atualização automática da disponibilidade.

A disponibilidade exibida é baseada nos dados estáticos cadastrados em `dados.js`.

---

## 📝 Pendências antes da entrega

- [ ] Revisar a consistência entre `exemplares` e `disponivel`.
- [ ] Confirmar que o selo “Disponível”, “Último exemplar” ou “Emprestado” corresponde aos dados de cada livro.
- [ ] Executar e registrar os testes de busca, filtros, detalhes, estado vazio e responsividade.
- [ ] Conferir se o Kanban está acessível, com responsáveis e movimentações registradas.
- [ ] Revisar a divisão de tarefas com base no Kanban definitivo.
- [ ] Atualizar o documento de requisitos após os testes finais.
- [ ] Completar a representação do MER em `docs/entidades.md`, se necessário.
- [ ] Ensaiar a apresentação com a participação dos quatro integrantes.

---

## 🔗 Documentação complementar

- **Documento de requisitos**
- **Entidades, atributos e relacionamentos**
- **Repositório no GitHub**
- **Kanban do projeto**

---

## 📄 Licença

Projeto acadêmico desenvolvido para fins educacionais no âmbito do Projeto Integrador da FATEC Zona Leste.
