# Lista de Entidades e Atributos

**Projeto:** Desafio 09 — Catálogo da Biblioteca do Curso  
**Instituição:** FATEC Zona Leste — Análise e Desenvolvimento de Sistemas  
**Membros:** Anderson, Daniel, Rafael e Vitor  
**Time:** CodeX  
**Cliente:** Coordenação do curso de Análise e Desenvolvimento de Sistemas

## 1. Apresentação do modelo

O modelo tem como objetivo organizar os dados necessários ao catálogo da biblioteca, permitindo que os estudantes pesquisem livros por título ou autor, filtrem as obras por área de conhecimento e consultem a disponibilidade dos exemplares. Para isso, são consideradas três entidades principais: Livro, Autor e Area, que representam os elementos centrais do projeto e constituem a base conceitual para a futura construção do Modelo Entidade-Relacionamento (MER).

## 2. Entidades e atributos

- **Livro:** representa cada obra cadastrada no catálogo e possui os atributos `id` (número, chave primária), `titulo` (texto), `autorId` (número, chave estrangeira), `areaId` (número, chave estrangeira), `ano` (número), `exemplares` (número), `disponivel` (booleano) e `descricao` (texto).

- **Autor:** representa os responsáveis pela autoria das obras e possui os atributos `id` (número, chave primária) e `nome` (texto).

- **Area:** representa as categorias utilizadas para organizar e filtrar os livros e possui os atributos `id` (número, chave primária), `nome` (texto) e `descricao` (texto).

Os atributos `id` identificam individualmente os registros de cada entidade. Os atributos `autorId` e `areaId` funcionam como chaves estrangeiras, relacionando os livros aos respectivos autores e às áreas de conhecimento.

## 3. Relacionamentos e regras de negócio

O modelo estabelece dois relacionamentos do tipo um para muitos (1:N):

- **Autor (1) → (N) Livro:** um autor pode estar associado a vários livros, mas cada livro possui um único autor no modelo proposto.
- **Area (1) → (N) Livro:** uma área pode classificar vários livros, mas cada livro pertence a uma única área de conhecimento.

Essas associações são representadas pelos atributos `autorId` e `areaId` na entidade Livro, que funcionam como chaves estrangeiras para referenciar as entidades Autor e Area. Dessa forma, o modelo evita a repetição desnecessária dos dados de identificação dessas entidades e organiza suas relações.

Quanto às regras de negócio, a quantidade de exemplares livres não pode ser negativa e determina a situação apresentada no catálogo: **“Disponível”**, quando houver mais de um exemplar; **“Último exemplar”**, quando restar exatamente um; e **“Emprestado”**, quando não houver exemplares livres.

## 4. Relação com a implementação

Atualmente, os livros são armazenados no array `LIVROS`, no arquivo `dados.js`, com os dados de autor e área registrados diretamente em cada objeto. Assim, a separação das três entidades e o uso de chaves primárias e estrangeiras representam a proposta conceitual para o futuro MER, não necessariamente a estrutura existente no código atual.

O catálogo informa a disponibilidade, mas não realiza o gerenciamento completo de empréstimos e devoluções.
