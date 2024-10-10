// Importa o pool de conexão com o banco de dados
const pool = require('../config/database')

// Função que retorna todos os itens armazenados
async function listItems() {
  // Retorna a lista de itens
  const buscarItems = await pool.query('SELECT * FROM items')

  // Retorna a lista de itens para o controlador
  return buscarItems[0];
};

// Função que cria um novo item e o adiciona à lista
async function createItem(name) {
  // Adiciona o novo item à lista
  const newItem = await pool.query(`INSERT INTO items (name) VALUES ('${name}')`)

  console.log('newItem', newItem)

  return newItem[0]
};


module.exports = {
  listItems,
  createItem,
}
