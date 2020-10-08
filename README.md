## Iniciando o projeto
 
Para iniciar o projeto devemos rodar os seguintes comandos:
 
``yarn`` ou ``npm install``
 
Esses comandos iniciaram o processo de download das dependências necessárias para rodar o projeto.
Em seguida:
 
```
yarn start
```
ou
 
```
npm start
```
#### JSON-Server
 
Para o Mockup da API acabei utilizando o <a href="https://github.com/typicode/json-server" target="__blank">JSON Server</a>, como não havia uma especificação de qual api deveria ser consumida, foi selecionada esta dependência para a finalidade de Mockup.
 
Ela funciona da seguinte forma, na raiz do projeto ou em alguma pasta selecionada especificamente para isso, devemos criar um arquivo JSON, de nome `db.json`.
 
exemplo:
 
````
{
 "cars": [
   {
     "id": 2,
     "name": "Chevrolet Onix",
     "year": "2013",
     "price": 118,
     "color": "prata",
     "picture": "https://img.olx.com.br/images/56/569926114174941.jpg"
   },
   {
     "id": 3,
     "name": "Renault Sandero",
     "year": "2012",
     "price": 102,
     "color": "prata",
     "picture": "https://s2.glbimg.com/2NWlZVIxW2gC3wptCEGtB2i1WUE=/290x217/s.glbimg.com/jo/g1/f/original/2011/05/11/sandero-300.jpg"
   },
   {
     "id": 4,
     "name": "Fiat Palio",
     "year": "2005",
     "price": 50,
     "color": "prata",
     "picture": "https://imganuncios.mitula.net/fiat_palio_2006_flex_palio_fire_1_0_200506_manual_flex_2590_5990122587129244424.jpg"
   }
 ]
}
````
Cada array ou objeto gravado nesse arquivo gera uma rota como por exemplo, `/cars` possuindo todos os métodos HTTP `GET`, `POST`, `PUT`, `DELETE` e etc...
 
Para iniciarmos o Json serve na nossa máquina precisa ter a sua dependência de forma global instalada, para isso devemos rodar o comando:
 
````
yarn global add json-server
````
ou
````
npm install -g json-server
````
 
Em seguida para iniciarmos o servidor basta rodar o comando:
 
````
json-server --watch db.json --port 9000
````
 
Como nosso projeto React já está utilizando a portal `3000` devemos utilizar uma outra porta para p json-server que utiliza por padrão também a porta `3000`.
Nesta situação estou utilizando a porta `9000`.
 
Com isso o projeto irá executar em sua máquina.
 
referências:
 
<a href="https://github.com/typicode/json-server" target="_blank">JSON-server</a>
 
___
### Dependências
 - "@testing-library/jest-dom": "^4.2.4"
 - "@testing-library/react": "^9.3.2"
 - "@testing-library/user-event": "^7.1.2"
 - "@unform/core": "^2.1.3"
 - "@unform/web": "^2.1.3"
 - "axios": "^0.20.0"
 - "global": "^4.4.0"
 - "polished": "^4.0.1"
 - "react": "^16.13.1"
 - "react-dom": "^16.13.1"
 - "react-icons": "^3.11.0"
 - "react-modal": "^3.11.2"
 - "react-scripts": "3.4.3"
 - "styled-components": "^5.2.0"
___
 
 ### Dependências de desenvolvimento
 
 - "@typescript-eslint/eslint-plugin": "^4.4.0"
 - "@typescript-eslint/parser": "^4.4.0"
 - "babel-eslint": "^10.1.0"
 - "babel-plugin-root-import": "^6.5.0"
 - "customize-cra": "^1.0.0"
 - "eslint": "^6.6.0"
 - "eslint-config-prettier": "^6.12.0"
 - "eslint-import-resolver-babel-plugin-root-import": "^1.1.1"
 - "eslint-plugin-prettier": "^3.1.4"
 - "eslint-plugin-react": "^7.21.3"
 - "json-serve": "^0.1.0"
 - "prettier": "^2.1.2"
 - "react-app-rewired": "^2.1.6"
 
 ___
 
 <a href="https://github.com/thaua97/" target="__blank">@author</a> Thauã Borges.
 