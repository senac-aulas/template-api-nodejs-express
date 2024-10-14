const express = require("express"); // Importa o Express
const app = express(); // Cria uma instância do Express
const itemRoutes = require("./routes/item.routes"); // Importa as rotas definidas para itens

app.use(express.json()); // Middleware para permitir o uso de JSON nas requisições

// Define as rotas da aplicação, utilizando '/api/items' como base para todas as rotas de itens
app.use("/api/items", itemRoutes);

// Rota de health check para verificar se o servidor está online
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

// Porta do servidor, pode ser definida pela variável de ambiente ou padrão 3000
const PORT = process.env.PORT || 3000;

// Inicia o servidor e exibe uma mensagem no console indicando a porta em uso
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
