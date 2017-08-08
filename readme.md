# ZSSN (Zombie Survival Social Network) - Teste Code Miner 42

Baseado no [teste enviado](https://gist.github.com/akitaonrails/694fc9e85735c400d7e0dc8e79576288) e na [API disponibilizada](http://zssn-backend-example.herokuapp.com/swagger-api/index.html).

# Ferramentas utilizadas
- `react`
- `jest`
- `next.js`

Assumindo que já possua o `npm` instalado, basta clonar este repositório, e rodar `npm install` na linha de comando.

Para rodar a aplicação use o comando `npm run dev` que o `next.js` irá criar um servidor local que faz server side rendering.

Na pasta `__tests__` possuí um teste simples em jest que apenas verifica se o label da tela de ~~login~~.

Vale a ressalva de que como o endpoint que retorna uma pessoa única não trazia a propriedade `infected?` tive que fazer uma filtragem de todos os sobreviventes na visualização de um só.