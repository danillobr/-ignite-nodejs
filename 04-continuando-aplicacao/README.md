<p align="center">
  <img src="../.github/capa-ignite-nodejs.png" alt="Ignite Node.js">
</p>

<br>

<h1 align="center">
  Continuando a aplicação

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
- Entender o Docker;
- Aprender sobre a criação de containers;
- Inserir a aplicação no Docker;
- Executar a aplicação e o banco de dados no Docker;
- Entender alguns comandos do Docker;
- Incrementar a documentação da API;
- Entender o processo de autenticação e criptografia de senhas.

### Documentação de instalação do Docker:
Acesse o [link](https://bit.ly/3FDHsh1) para instalação e configuração da ferramenta. Para instalação nativa do Docker no WSL 2 consulte este [tutorial](https://bit.ly/3FFG9xK).

### O que é o Docker?
- Uma ferramenta para criação de containers;
- Container: ambiente isolado;
- Imagens: instruções para criação de um container;
- O que "roda" localmente "roda" em produção;
- Um único sistema operacional que compartilha recursos da máquina host.

### Comandos do Docker:
1. Docker:
   - Listar todas as imagens:
     > docker images -a
   - Remover imagem pelo id:
     > docker rmi id
   - Remover todas as imagens:
     > docker rmi $(docker images -q)
   - Listar todos os containers:
     > docker ps -a
   - Listar todos os containers ativos:
     > docker ps
   - Iniciar um container:
     > docker start id | name
   - Parar um container:
     > docker stop id | name
   - Remover um container:
     > docker rm id | name
   - Visualizar os logs da aplicação:
     > docker logs id | name
   - Observar os logs da aplicação durante a execução:
     > docker logs id | name -f
   - Acessar um container:
     > docker exec -it id | name /bin/bash
   - Finalizar o acesso a um container:
     > Ctrl + D

2. Docker-compose:
   - Criar e iniciar um container:
     > docker-compose up
   - Parar um container:
     > Ctrl + C
   - Iniciar um container (background):
     > docker-compose start | up -d
   - Parar um container (background):
     > docker-compose stop
   - Parar todos os containers (background):
     > docker stop $(docker ps -a -q)
   - Remover um container:
     > docker-compose down
   - Remover todos os containers:
     > docker rm $(docker ps -a -q)
   - Forçar a Recriação de um container (background):
     > docker -compose up--force-recreate -d

### Conhecendo as formas de usar banco de dados:
- Driver: [node-postgres](https://node-postgres.com/);
- Query builder: [Knex.js](https://knexjs.org/);
- ORM (mapeamento objeto-relacional):
  - [Sequelize](https://sequelize.org/);
  - [TypeORM](https://typeorm.io/#/).

### Aprendendo o conceito de migrations:
- Uma forma de versionar o schema da aplicação;
- Trabalha com a manipulação do banco de dados:
  - Criação, alteração e remoção.
- Controla as alterações do banco de dados juntamente com o versionamento da aplicação;
- Permite o compartilhamento das alterações realizadas.

### Criando migration de categoria:
- Criar uma migration:
  > yarn typeorm migration:create -n model-name
- Aplicar uma migration no banco de dados:
  > yarn typeorm migration:run
- Remover uma migration do banco de dados:
  > yarn typeorm migration:revert

### Entendendo autenticação com JWT (JSON Web Token):
- São os tokens que garantem que um usuário esteja autenticado na aplicação;
- Garantem determinadas permissões dentro do sistema para usuários específicos;
- Estruturas que compõem um token:
  - Header:
    ```{JSON}
    {
      "alg": "HS256",
      "typ": "JWT"
    }
    ```
  - Payload:
    ```{JSON}
    {
      "sub": "1234567890",
      "name": "Logan",
      "iat": 1516239022
    }
    ```
  - Verify signature:
    ```
    HMACSHA256(
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    your-256-bit-secret
    )
    ```
