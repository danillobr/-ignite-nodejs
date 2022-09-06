<p align="center">
  <img src="../.github/capa-ignite-nodejs.png" alt="Ignite Node.js">
</p>

<br>

<h1 align="center">
  Primeiro projeto com Node.js

  <br>

  FinAPI (API de finanças)
</h1>

<br>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
</p>

### Requisitos:
- [x] Deve ser possível criar uma conta.
- [x] Deve ser possível buscar o extrato bancário do cliente.
- [x] Deve ser possível realizar um depósito.
- [x] Deve ser possível realizar um saque.
- [x] Deve ser possível buscar o extrato bancário do cliente por data.
- [] Deve ser possível atualizar dados da conta do cliente.
- [] Deve ser possível obter dados da conta do cliente.
- [] Deve ser possível deletar uma conta.
- [] Deve ser possível retornar o saldo da conta.

---

### Regras de negócio:
- [x] Não dever ser possível cadastrar uma conta com CPF já existente.
- [x] Não dever ser possível buscar extrato em uma conta não existente.
- [x] Não dever ser possível fazer depósito em uma conta não existente.
- [x] Não dever ser possível fazer saque em uma conta não existente.
- [x] Não dever ser possível fazer saque quando o saldo for insuficiente.
- [] Não dever ser possível excluir uma conta não existente.

### Comandos úteis:
- Instalação das dependências da aplicação:
  > yarn

- Execução do projeto:
  > yarn dev