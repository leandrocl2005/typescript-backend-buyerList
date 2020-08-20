# Lista de Compras (backend) 

Backend de lista de compras em Typescript e Express.

Projeto para praticar CRUD. Desenvolvido em sistema operacional Windows 10 Home.

## Como começar o projeto?

No terminal digite os seguintes comandos:
```bash
mkdir buyerList
cd buyerList
yarn init -y
yarn add typescript -D
yarn add express
yarn add -D @types/express
yarn add uuid
yarn add -D @types/uuid
yarn tsc --init
mkdir src
mkdir dist
```
Adicione no arquivo *tsconfig.json* a seguinte linha: *outDir: ./dist*.

Adicione o arquivo *.gitignore* na pasta *buyerList*. 

Adicione os arquivos *index.ts*, *routes.ts* e *controllers.ts* a pasta *src*.

## Estrutura de pastas
```
buyerList
|   dist
│   node_modules
│   README.md
│   package.json
|   tsconfig.json
|   yarn.lock
|   .gitignore    
└───src
│   │   index.ts
|   |   routes.ts
|   |   controllers.ts 
```

## Como rodar o projeto
```bash
yarn tsc
node dist/index.js
```

