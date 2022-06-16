import { Pool } from "pg";

const DATABASE_URL =
  "postgres://postgres:Hola789520@localhost:5432/sistema-solar";

const pool = new Pool({
  connectionString: DATABASE_URL,
});

pool.on("connect", () => {
  console.log("Base de Dados conectada");
});

export { pool };
