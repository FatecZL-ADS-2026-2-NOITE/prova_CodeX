# Lista de Requisitos

Projeto Desafio 09 — Catálogo da Biblioteca do Curso
Instituição: FATEC Zona Leste — Análise e Desenvolvimento de Sistemas
Membros: Anderson, Daniel, Rafael e Vitor
Time: CodeX
Cliente: Coordenação do curso de Análise e Desenvolvimento de Sistemas

## 1. Apresentação do projeto
O projeto tem como objetivo desenvolver uma página web para facilitar a consulta ao catálogo de livros relacionados ao curso de Análise e Desenvolvimento de Sistemas. A proposta busca evitar que os estudantes se desloquem até a biblioteca sem saber se determinada obra está disponível. A solução permitirá pesquisar livros por título ou autor, filtrar por área de conhecimento e consultar a situação dos exemplares. O levantamento considera uma entrevista simulada, de caráter acadêmico, com uma personagem que representa a Coordenação do curso. A principal necessidade identificada é facilitar a localização das obras e informar claramente quando houver apenas um exemplar livre ou nenhum disponível.

## 2. Requisitos funcionais
RF01 — Exibição: apresentar os livros em cartões gerados dinamicamente a partir dos dados cadastrados.
RF02 — Pesquisa: permitir buscar obras por título ou autor, sem diferenciar letras maiúsculas e minúsculas.
RF03 — Filtro por área: permitir filtrar os livros por área de conhecimento, combinando o filtro com a pesquisa.
RF04 — Contador: informar a quantidade de resultados exibidos e atualizá-la conforme os critérios aplicados.
RF05 — Detalhes: permitir consultar informações complementares da obra selecionada, incluindo descrição e localização física, quando disponíveis.
RF06 — Disponibilidade: indicar a situação dos exemplares por meio dos estados “Disponível”, “Último exemplar” e “Emprestado”.
RF07 — Filtro de disponibilidade: permitir exibir somente livros com exemplares livres.
RF08 — Resultado vazio: informar quando nenhum livro corresponder à pesquisa ou aos filtros selecionados.

## 3. Requisitos não funcionais
RNF01 — Responsividade: manter a página legível e funcional em telas com largura de 400 px.
RNF02 — Tecnologias: utilizar HTML5, CSS3 e JavaScript puro.
RNF03 — Organização: separar a estrutura, os estilos, os dados e a lógica nos arquivos index.html, style.css, dados.js e script.js.
RNF04 — Dados: cadastrar pelo menos oito objetos, cada um com cinco ou mais propriedades, incluindo valores numéricos e booleanos.
RNF05 — Renderização dinâmica: gerar os cartões a partir dos dados cadastrados, sem inserir manualmente cada livro no HTML.

## 4. Regras de negócio e limitações
A situação do livro será determinada pela quantidade de exemplares livres: “Disponível” quando houver mais de um, “Último exemplar” quando restar exatamente um e “Emprestado” quando não houver exemplares livres. A quantidade não poderá ser negativa, e o atributo disponivel deverá ser coerente com os dados registrados. O filtro de disponibilidade deverá mostrar apenas obras com pelo menos um exemplar livre.
O catálogo será informativo e não realizará empréstimos, devoluções ou controle de estoque em tempo real. A disponibilidade apresentada dependerá das informações cadastradas no sistema.

