# Projeto de Automacao - Watch-br
<h1 align="center">
  <p align="center">
    <img alt="Whatch" src="./assets/LOGO_WATCH.png" width="400px" />
  </p>

  <h3 align="center">
    Projeto para automação de testes na plataforma Watch Brasil.
  </h3>
  <p align="center">
     <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/leandroskt/Projeto-Automacao-Watch-br?color=1db954">
      <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/leandroskt/Projeto-Automacao-Watch-br?color=1db954">
      <img alt="Stars" src="https://img.shields.io/github/stars/leandroskt/Projeto-Automacao-Watch-br?color=1db954">
      <img alt="Repository Size" src="https://img.shields.io/github/repo-size/leandroskt/Projeto-Automacao-Watch-br?color=1db954">
  </p>
</h1>

<p align="center">
  <a href="#page_with_curl-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-começando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :page_with_curl: Sobre

Esse projeto tem por objetivo demonstrar os conhecimento em automação e em documentação, solicitados para oportunidade de Analista QA na Watch Brasil.

Diretrizes:
1. Com o acesso à plataforma fornecido, deve-se criar uma automatização de login, seleção de perfil e acessar um conteúdo da plataforma e assistir (pode ser qualquer tipo de conteúdo disponível na plataforma) e logout da plataforma;
1. Criar um teste negativo para essa variação, usando dados alterados ou manipulados de forma errada;
1. Documentar o roteiro de testes realizados, o roteiro pode ser criado em TDD ou BDD o que for melhor para o candidato;
1. Evidenciar os fluxos testados, exemplificando com imagens de sucesso e erro e do fluxo entre os testes se possível.
1. Postar seu desenvolvimento no Git (Gilab, Github) e compartilhar o link do projeto para validação da estrutura.


## :books: Requisitos

- Ter [**Node.js**](https://nodejs.org/en/) instalado.

## :rocket: Como executar

```bash
# Clonar o projeto
  git clone https://github.com/tobiascorrea/watch-web


# Criar o arquivo cypress.env na raiz do projeto com as informações corretas de acesso
    Exemplo: {
    "EMAIL": "XXXXX@XXXXX.com.br",
    "PASSWORD": "********"}

#Intalar as dependencias:
  npm install

# Executar os testes
   - npx cypress open : Excecuta o cypress em modo iterativo.
   - npm run test:electron: Executa o Cypress no modo headless usando o navegador Electron, que é o navegador padrão do Cypress.
   - npm run test:chrome: Executa o Cypress no modo headless usando o navegador Chrome. Isso requer que o Chrome esteja instalado na sua máquina.
   - npm run test:edge: Executa o Cypress no modo headless usando o navegador Edge. Isso requer que o Edge esteja instalado na sua máquina.
```

## 💡 Informações

- O usuário utilizado nos testes deve ter acessado a plataforma pelo menos uma vez antes de ser utilizado nos testes pois não está mapeado a configuração de primeiro acesso.
- A performance dos testes está ligeiramente afetada por necessidade de capturas de telas a cada procedimento, o que se faz necessário esperar o carregamento completo das telas.