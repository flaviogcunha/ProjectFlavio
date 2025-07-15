import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Configuração do MySQL (substitua com seus dados!)
const connection = mysql.createConnection({
  host: 'localhost',  // ou '127.0.0.1'
  user: 'root',       // usuário mostrado no Workbench
  password: 'fatec',  // senha que você definiu para o root
  database: 'jira'    // nome do banco que criamos
});

// Testar conexão
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('✅ Conectado ao MySQL!');
});

// Rota para buscar projetos (exemplo)
app.get('/projetos', (req, res) => {
  connection.query('SELECT * FROM projetos', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Iniciar servidor
const PORT = 5173;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});