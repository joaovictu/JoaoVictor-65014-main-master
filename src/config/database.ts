import { Pool } from 'pg';

// Substitue a string de conexão do Render.com
const connectionString = 'postgresql://postgres:xCvezjBRwVNeUtHwiviwstKapljBJzpf@junction.proxy.rlwy.net:43448/railway';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite a conexão SSL não autorizada
  }
});

export default pool;