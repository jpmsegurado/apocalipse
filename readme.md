# ZSSN (Zombie Survival Social Network) - Teste Code Miner 42

Baseado no [teste enviado](https://gist.github.com/akitaonrails/694fc9e85735c400d7e0dc8e79576288) e na [API disponibilizada](http://zssn-backend-example.herokuapp.com/swagger-api/index.html).

# Ferramentas utilizadas
- `react`
- `jest`
- `next.js`

Assumindo que já possua o `npm` instalado, basta clonar este repositório, e rodar `npm install` na linha de comando.

Para rodar a aplicação use o comando `npm run dev` que o `next.js` irá criar um servidor local que faz server side rendering.

Na pasta `__tests__` possuem 3 arquivos de teste: 
- `check-people-table-rows.test.js`: testa se o componente de tabela renderiza o número certo de pessoas
- `empty-inventory-person.test.js`: testa se a página de visualização de uma pessoa sem itens de inventório renderiza o aviso que a mesma tem o inventório vazio.
- `person-with-items.test.js`: testa se a página de visualização de uma pessoa renderiza uma tabela com os 4 tipos de itens de inventório.

# Avisos importantes

- O endpoint que retorna uma pessoa única não trazia a propriedade `infected?`, então foi necessário fazer uma filtragem de todos os sobreviventes na visualização de um só.
- O endpoint de troca não funciona conforme a documentação.