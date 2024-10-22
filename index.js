const express = require('express');
const app = express();

// Importando as rotas
const routes = require('./routes');

// Rota principal - para evitar o erro "Cannot GET /"
app.get('/', (req, res) => {
  res.send('Bem-vindo à API! Use /api para acessar as rotas da API');
});

// Rotas da API
app.use('/api', routes);

// Configuração da porta
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
