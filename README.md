## Sistema Financeiro

**Sistema Financeiro** é um projeto que visa auxiliar no controle financeiro pessoal. Ele é dividido em duas partes: uma API RESTful construída com Spring Boot e um frontend desenvolvido com React.

### API RESTful (Spring Boot)

A API RESTful fornece endpoints para gerenciar as seguintes entidades:

* Usuários
* Categorias
* Lançamentos

### Frontend (React)

O frontend inclui funcionalidades para:

* Cadastrar e visualizar usuários
* Registrar e visualizar transações

#### Pré-requisitos

Para executar o frontend, você precisará ter instalado em sua máquina:

* Node.js
* npm (gerenciador de pacotes do Node.js)

#### Instalação

1. Clone o repositório do projeto:

```
git clone https://github.com/nullbyte-s/sistema-financeiro.git
```

2. Acesse a pasta do frontend:

```
cd sistema-financeiro/frontend
```

3. Instale as dependências do projeto:

```
npm install
```

4. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

```
REACT_APP_API_URL=http://localhost:8080
```

5. Inicie a aplicação:

```
npm start
```

A aplicação estará disponível em `http://localhost:3000`.