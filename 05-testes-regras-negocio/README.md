<p align="center">
  <img src="../.github/capa-ignite-nodejs.png" alt="Ignite Node.js">
</p>

<br>

<h1 align="center">
  Testes e regras de negócio

  <br>

  RentX (API de aluguel de carros)
</h1>

<br>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
</p>

### Objetivos do módulo:
- Entender testes e quais os seus tipos;
- Entender e aplicar o TDD (Test Driven Development/Desenvolvimento Dirigido por Testes);
- Aprender e implementar as regras de negócio;
- Analisar os requisitos da aplicação.

### Conhecendo os tipos de testes
- Tipos de testes:
  - Testes unitários:
    - São testes realizados em "pedaços"/unidades da aplicação;
    - Testes realizados nos serviços/funcionalidades/regras de negócio;
    - Testes de casos de sucesso e casos de erros;
    - Não é testado o acesso a APIs externas;
    - Garantem que a lógica do negócio está bem definida.
  - Testes de integração:
    - São testes realizados para verificar a aplicação inteira;
    - Verificação do fluxo completo da aplicação;
    - Verificação dos fluxos externos da aplicação (conexão com o banco de dados, acesso a APIs externas, envio de e-mails e etc.).
- TDD:
  - Metodologia usada para criação de testes;
  - Iniciar criando os testes, para só depois implementar as funcionalidades em si.
- Vantagens do uso de testes:
  - Apontar as mudanças das regras de negócio através dos testes criados;
  - Minimizar o "caos" oriundo dos erros no estágio de produção;
  - Auxiliar no entendimento das implementações realizadas aplicação.

### Criando o primeiro teste:
Documentação do [Jest](https://jestjs.io/pt-BR/docs/getting-started).

### Requisitos da aplicação:
- Definições:
  - Requisitos Funcionais (RF): são os requisitos que refletem sobre as funcionalidades da aplicação. Por exemplo, “deve ser possível um usuário pode criar o cadastro de categorias”.
  - Requisitos Não Funcionais (RNF):  são requisitos que não refletem necessariamente as regras de negócio e/ou funcionalidades do sistema. Por exemplo, “o banco de dados adotado para este projeto é o PostgreSQL”.
  - Regras de Negócio (RN): estão relacionadas ao detalhamento dos RF. Por exemplo, “não deve se possível cadastrar uma categoria com um nome já existente”.

- Descrição dos requisitos da aplicação:
  - Cadastro de um carro:
    - RF:
      - Deve ser possível cadastrar um novo carro.
    - RN:
      - Não deve ser possível cadastrar um carro com uma placa já existente;
      - O carro deve ser cadastrado, por padrão, como disponível;
      - O usuário responsável pelo cadastro de um carro deve ser um administrador.
  - Listagem de carros:
    - RF:
      - Deve ser possível listar todos os carros disponíveis para aluguel;
      - Dever ser possível listar todos os carros disponíveis pelo nome da categoria;
      - Dever ser possível listar todos os carros disponíveis pelo nome da marca;
      - Dever ser possível listar todos os carros disponíveis pelo nome do carro.
    - RN:
      - O usuário não precisa estar autenticado no sistema para listar os carros disponíveis.
  - Cadastro de especificações no carro:
    - RF:
      - Deve ser possível cadastrar uma especificação para um carro.
    - RN:
      - Não deve ser possível cadastrar uma especificação para um carro que não está cadastrado;
      - Não deve ser possível cadastrar uma especificação já existente para o mesmo carro;
      - O usuário responsável pelo cadastro de uma especificação deve ser um administrador.
  - Cadastro de imagens do carro:
    - RF:
      - Deve ser possível cadastrar a imagem do carro.
    - RNF:
      - Utilizar o Multer para o upload dos arquivos.
    - RN:
      - O usuário deve poder cadastrar mais de uma imagem para o mesmo carro;
      - O usuário responsável pelo cadastro deve ser um administrador.
  - Aluguel de carro:
    - RF:
      - Deve ser possível cadastrar um aluguel.
    - RN:
      - O aluguel dever ter duração mínima de 24h;
      - Não deve ser possível cadastrar um novo aluguel, caso já exista um aluguel aberto para o mesmo usuário;
      - Não deve ser possível cadastrar um novo aluguel, caso já exista um aluguel aberto para o mesmo carro;
      - O usuário deve estar logado na aplicação.
