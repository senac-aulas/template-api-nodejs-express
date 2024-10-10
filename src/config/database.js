// Importar o módulo mysql2/promise
const mysql = require('mysql2/promise')

// Criar conexão com o banco de dados
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'template_api'
})

// Exportar conexão com o banco de dados
module.exports = pool