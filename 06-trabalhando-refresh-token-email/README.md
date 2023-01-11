<p align="center">
  <img src="../.github/capa-ignite-nodejs.png" alt="Ignite Node.js">
</p>

<br>

<h1 align="center">
  Trabalhando com refresh token e e-mail
</h1>

<br>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
</p>

### Objetivos do módulo:
- Continuar o desenvolvimento de novas funcionalidades na aplicação;
- Aplicar o refresh token;
- Entender como melhorar a autenticação com o refresh token;
- Integrar o envio de e-mail;
- Criar template para o envio de e-mail para o reset da senha;
- Implementar novos os testes.

### Requisitos da aplicação:
- Descrição de novos requisitos da aplicação:
  - Aluguel de carro:
    - RN:
      - Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.
  - Devolução de carro:
    - RF:
      - Deve ser possível realizar a devolução de um carro.
    - RN:
      - Se o carro for devolvido com menos de 24h, deverá ser cobrado diária completa;
      - Ao realizar a devolução, o carro deverá ser liberado para outro aluguel;
      - Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel;
      - Ao realizar a devolução, deverá ser calculado o total do aluguel;
      - Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrada multa proporcional aos dias de atraso;
      - Caso haja multa, deverá ser somado ao total do aluguel;
      - O usuário deve estar logado na aplicação.
  - Listagem de aluguel para o usuário:
    - RF:
      - Deve ser possível realizar a busca de todos os aluguéis para o usuário.
    - RN:
      - O usuário deve estar logado na aplicação.
  - Recuperar a senha:
    - RF:
      - Deve ser possível o usuário recuperar a senha informando o e-mail;
      - O usuário deve receber um e-mail como o passo a passo da recuperação da senha;
      - O usuário deve conseguir inserir uma nova senha.
    - RN:
      - O usuário precisa informar uma nova senha;
      - O link enviado para a recuperação deve expirar em 3 horas.